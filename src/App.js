import './App.css';
import SideNav from './components/SideNav.js';
import test from './images/test.jpg';
import BrendaMiley from './images/BrendaMiley1.jpg';
import ms from './images/ms.png';
import titleImg from './images/title-screen.jpeg';


function App() {
  return (
    <div>
      <div className='container'>
      </div>
      <div className='img-container'>
        <img className='landscape' src={ms} width='300'/>
        <img className='vertical' src={test} />
        <img className='vertical' src={BrendaMiley} />
        <SideNav />
      </div>
    </div>
  );
}

export default App;
