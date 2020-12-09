import { environment } from "/environment.js";

export function logDebug(msg) {
  if (environment === "development") {
    console.log(msg);
  }
}
