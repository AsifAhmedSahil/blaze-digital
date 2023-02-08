import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';


function App() {
  return (
    <div className="px-96 py-10">
      <NavigationBar></NavigationBar>
      <h1 className='text-red-800'>Welcome,Blaze Digital</h1>
      <p>Ignite Your Presence</p>
    </div>
  );
}

export default App;
