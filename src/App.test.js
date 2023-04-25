import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  const main = document.createElement("main");
  render(<App />, main);
  ReactDOM.unmountComponentAtNode(main);
});
