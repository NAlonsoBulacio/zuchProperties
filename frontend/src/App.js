import "./App.css";
import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Properties from "./views/Properties/Properties";
import Property from "./views/Property/Property";
import PropertyPlaces from "./views/PropertyPlaces/PropertyPlaces";
import Contact from "./views/Contact/Contact";
import AboutUs from "./views/AboutUs/AboutUs";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about-us" component={AboutUs} />
      {/* <Route exact path="/properties" component={Properties} /> */}
      <Route exact path="/places" component={PropertyPlaces} />
      <Route exact path="/properties/:place" component={Properties} />
      <Route path="/property/:path" component={Property} />
    </div>
  );
}

export default App;

