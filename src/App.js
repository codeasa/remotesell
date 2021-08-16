import "./App.css";
import { Header } from "./components/Header";
import Main from "./components/Main";
import "@material-tailwind/react/tailwind.css";

function App() {
  var meta = {
    summary: {
      policyno: 'A102934',
    },
    steps: {
      login: {
        fields: ["name", "birthday"],
      },
      summary: {
        premium: 10000,
        suminsured: 100000,
        base: "Set for Health",
      },
      review: ["/plan.pdf", '/sample.pdf'],
      upload: ['ID card front', 'ID card back'],
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
