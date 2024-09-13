import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbars from './Navbar';

const Layout = () => {
  const location = useLocation();

  return (
    <div id="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw',overflowX: 'hidden',  // Prevents horizontal scrolling
      boxSizing: 'border-box'}}>
      <Navbars />
      <Outlet />
       <Footer/>
      {location.pathname !== '/login' && location.pathname !== '/signup' /*&& <Footer />*/}
    </div>
  );
};

export default Layout;