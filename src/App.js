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
          steps: {
            login: ["name", "birthday"],
            review: ["/proposal.pdf"],
          },
        }
      : {
          summary: {
            policyno: "A102934",
          },
          steps: {
            login: ["name", "birthday"],
            upload: ["ID card front", "ID card back"],
            selfie: ["Selfie"],
            otp:{},
            review: ["/appform.pdf", "/pdp.pdf"],
            sign: {},
          },
        };
  return (
    <div className="app">
      <Header summary={meta.summary}></Header>
      <Main meta={meta}></Main>
    </div>
  );
}

export default App;
