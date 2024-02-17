import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
import AboutMe from './components/AboutMe';
// import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div id="section1" className="section">
        <AboutMe />
      </div>
      {/* <div id="section3" className="section">
        <Projects />
      </div> */}
    </div>
  );
}

export default App;
