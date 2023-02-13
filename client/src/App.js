import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import HomePage from './Pages/HomePage/HomePage';


function App() {
  return (
    <div className="pt-6 px-80 banner" >
      <NavigationBar></NavigationBar>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
