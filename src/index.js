import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"

const app = <App key="app" />;
console.log(app)

ReactDOM.render(app, document.getElementById("root"), function () {
  console.log("callback")
})
