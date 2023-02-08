import './App.css';
import NavigationBar from './components/NavigationBar';
import HomePage from './Pages/HomePage/HomePage';


function App() {
  return (
    <div className="px-96 py-10 banner" >
      <NavigationBar></NavigationBar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
