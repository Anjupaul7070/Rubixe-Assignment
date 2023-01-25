import './App.css';
import Boxfive from './components/Boxfive';
import Boxfour from './components/Boxfour';
import Boxone from './components/Boxone';
import Boxthree from './components/Boxthree';
import Boxtwo from './components/Boxtwo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
//-----

function App() {
  return (
    <div className='app'>
      <div id='navbar'>
        <Navbar />
      </div>
      <div id='boxone'>
        <Boxone />
      </div>
      <div id='boxtwo'>
        <Boxtwo />
      </div>
      <div id='boxthree'>
        <Boxthree />
      </div>
      <div id='boxfour'>
        <Boxfour />
      </div>
      <div id='boxfive'>
        <Boxfive />
      </div>
      <div id='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
