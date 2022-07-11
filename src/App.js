import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home/HomeContainer';
import Body from './Home/Body';
import Link1 from './Link1/Link1'
import Link2 from './Link2/Link2'
import Link3 from './Link3/Link3'
import NotFound from './Utilities/NotFound'
import './Utilities/reset.css';
import './App.css';
import CreateGuestForm from './CreatGuestForm/CreateGuestForm';

function App() {
  return (
    <section className="main-container">
      <nav className="nav-container">
        <div className="logo-container">
          <Link to='/'>
            <h1 className="logo-title">ZET Resorts & Hotels</h1>
          </Link>
          <Link to='/'>
            {/* <img src={logo} alt='' style={logoStyle} /> */}
          </Link>
        </div>
        <ul className="link-container">
          <Link to='/link1'>
            <li className="link pic-lib-link">LINK1</li>
          </Link>
          <Link to='/link2'>
            <li className="link pic-lib-link">LINK2</li>
          </Link>
          <Link to='/link3'>
            <li className="link pic-lib-link">LINK3</li>
          </Link>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/body' element={<Body />} />
          <Route path='/link1' element={<Link1 />} />
          <Route path='/link2' element={<Link2 />} />
          <Route path='/link3' element={<Link3 />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </section>
  );
}

export default App;
