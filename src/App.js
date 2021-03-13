import Navbar from "./Navbar";
import Services from "./Services";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./styles.css";
import Content from "./Content";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Services/>
        <Content/>
      </div>
    </Router>
  );
}
