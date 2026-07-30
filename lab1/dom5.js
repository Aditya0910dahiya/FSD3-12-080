import { EventEmitter } from "events";

class DomClass extends EventEmitter {
  addEventListener(eventName, callback) {
    this.on(eventName, callback);
  }
  removeListener(eventName, callback) {
    this.off(eventName, callback);
  }
  dispatchEvent(eventName, eventData = {}) {
    const event = {
      type: eventName,
      timeStamp: new Date(),
      ...eventData,
    };
    this.emit(eventName, event);
  }
}
const button = new DomClass();
const handleClick = (event) => {
  console.log(`button clicked type : ${event.type} at ${event.times}`);
};
  button.addEventListener(`click`, handleClick);
  button.dispatchEvent("click", {
    target: "submitbtn",
  });
  button.removeEventListener("click", handleClick);
  button.dispatchEvent("click", {
    target: "resetbtn",
  });
  