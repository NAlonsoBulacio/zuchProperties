import "./App.css";
import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Properties from "./views/Properties/Properties";
import Property from "./views/Property/Property";
import PropertyPlaces from "./views/PropertyPlaces/PropertyPlaces";
import Contact from "./views/Contact/Contact";
import AboutUs from "./views/AboutUs/AboutUs";
import TermsAndCondition from "./views/TermsAndCondition/TermsAndCondition";
import Privacity from "./views/Privacity/Privacity";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about-us" component={AboutUs} />
      <Route exact path="/places" component={PropertyPlaces} />
      <Route exact path="/properties/:place_id" component={Properties} />
      <Route path="/property/:path" component={Property} />
      <Route path="/terms-condition" component={TermsAndCondition} />
      <Route path="/privacity" component={Privacity} />
    </div>
  );
}

export default App;

