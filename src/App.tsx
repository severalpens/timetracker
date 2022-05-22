import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

const App:any = () => {
  return (
    <>
   <Navbar/>
   <Outlet/>
    </>
  );
}


export default App;