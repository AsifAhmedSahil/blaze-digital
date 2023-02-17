import { RouterProvider } from 'react-router-dom';
import './App.css';


import HomePage from './Pages/HomePage/HomePage';
import Services from './Pages/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import NavigationBar from './Pages/Shared/Navbar/NavigationBar';
import router from './Routes/Routes/Routes';


function App() {
  return (
    // <div className="pt-6 px-80 banner" >
    //   <NavigationBar/>
    //   <HomePage></HomePage>
    //   <Footer/>
    // </div>
    <div className="pt-6 px-80 banner">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
