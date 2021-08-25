import "./App.css";
import { Header } from "./components/Header";
import Main from "./components/Main";
import "@material-tailwind/react/tailwind.css";

function App() {
  //const token = require('query-string').parse(window.location.search)?.token;
  const token = window.location?.hash;
  var meta =
    token === "#si"
      ? {
          summary: {
            refid: "A102934",
          },
          steps: [
            {
              type: "login",
              data: ["name", "birthday"],
            },
            {
              type: "review",
              data: ["/proposal.pdf"],
            },
          ],
        }
      : {
          summary: {
            policyno: "A102934",
          },
          steps: [
            {
              type: "login",
              data: ["name", "birthday"],
            },
            {
              type: "upload",
              data: ["ID card front", "ID card back"],
            },
            {
              type: "selfie",
            },
            {
              type: "declaration",
              data: ["ID card front", "ID card back"],
            },
            {
              type: "review",
              data: ["/appform.pdf", "/pdp.pdf"],
            },
            {
              type: "otp",
            },
            {
              type: "sign",
              data: ["po", "insured"],
            },
          ],
        };
  return (
    <div className="app">
      <Header summary={meta.summary}></Header>
      <Main meta={meta}></Main>
    </div>
  );
}

export default App;
