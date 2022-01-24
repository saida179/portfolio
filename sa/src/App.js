import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootswatch/dist/slate/bootstrap.min.css';
import './App.css';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/index";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
//import { Link } from 'react-router-dom';


function App() {


  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route component={About} />
        </Switch>
        <Footer />
      </div>
      <div>
        <a href="https://www.linkedin.com/in/saida-arevalo-123a071b3/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/saida179">
          <FaGithub />
        </a>
        <a href={"mailto:zaida9000@gmail.com"}>
          <SiGmail />
        </a>
      </div>
    </Router>
  );
}

export default App;

