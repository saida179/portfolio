import 'bootswatch/dist/slate/bootstrap.min.css';
import './App.css';
import Footer from "./components/Footer";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome!</h1>
        <div class="card border-light mb-3">
          <div class="card-body">
            <h4 class="card-title">I'm Saida Arevalo,</h4>
            <p class="card-text">here you can find information about my journey as a full stack developer.</p>
          </div>
        </div>
        <div>
          <FaLinkedin />
          <FaGithub />
          <SiGmail />
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
