import "./App.css";
import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Properties from "./views/Properties/Properties";
import Property from "./views/Property/Property";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/properties" component={Properties} />
      <Route path="/property" component={Property} />
    </div>
  );
}

export default App;

