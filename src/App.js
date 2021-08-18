import "./App.css";
import { Header } from "./components/Header";
import Main from "./components/Main";
import "@material-tailwind/react/tailwind.css";

function App() {
  //const token = require('query-string').parse(window.location.search)?.token;
  const token = window.location?.hash;
  var meta =
    token == "#si"
      ? {
          summary: {
            refid: "A102934",
          },
          steps: {
            login: ["name", "birthday"],
            review: ["/leaflet.pdf"],
          },
        }
      : {
          summary: {
            policyno: "A102934",
          },
          steps: {
            login: ["name", "birthday"],
            summary: {
              premium: 10000,
              suminsured: 100000,
              base: "Set for Health",
            },
            review: ["/plan.pdf", "/sample.pdf"],
            upload: ["ID card front", "ID card back"],
            upload_2: ["Selfie"],
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
