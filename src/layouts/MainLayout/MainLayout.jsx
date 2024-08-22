import './MainLayout.css';
import { Nav, NavLink } from '../../components/NavBar/NavBar';

// eslint-disable-next-line react/prop-types
export const MainLayout = ({ children }) => {
  return (
    <div className='main-layout'>
      <Nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'> Login </NavLink>
        <NavLink to='/register'> Register </NavLink>
      </Nav>
      <div className='content'>
        <aside className='sidebar'>Sidebar</aside>
        <main className='main-content'>{children}</main>
      </div>
      <footer className='footer'>Footer</footer>
    </div>
  );
};
