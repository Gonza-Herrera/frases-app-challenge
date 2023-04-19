import "./App.css";
import ToolbarComponent from "./components/Toolbar";
import { PhrasesContextProvider } from "./context/phrases";
import { CardListComponent } from "./components/CardList";

function App() {
  return (
    <div className="App">
      <PhrasesContextProvider>
        <ToolbarComponent />
        <CardListComponent phrases={[]} />
      </PhrasesContextProvider>
    </div>
  );
}

export default App;
