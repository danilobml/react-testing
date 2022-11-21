import "./App.css";
import { Application } from "./components/application/Application";
import Counter from "./components/counter/Counter";
import { Greet } from "./components/greet/Greet";
import Skills from "./components/skills/Skills";
import { AppProviders } from "./components/provider/app-provider";
import MuiMode from "./components/mui/MuiMode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Greet />
        <Application />
        <Skills skills={["Css", "Javascript"]} />
        <Counter />
      </div>
    </AppProviders>
  );
}

export default App;
