import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  return (
    <div id="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw' }}>
      <Header />
      <Outlet />
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Footer />}
    </div>
  );
};

export default Layout;