import './App.css';
import Home from './home';
import Main from './main';
import Aside from './aside';
import Footer from './footer';
import WelcomeFc from './WelcomFc';
import WelcomeCc from './WelcomeCc';
function App() {
  return (

    <div className='app'>
    <Home/>
    <Main/>
    <Aside/>
    <Footer/>
    <WelcomeFc name="reactjs"/>
    <WelcomeCc name="reactjs"/>
    </div>
  );
}

export default App;
