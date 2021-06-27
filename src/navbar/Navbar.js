import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return ( 
    <nav className="navbar__container">
        <div className="navbar__items">
          <h2 className="item">Flipkart</h2>
          <input className="item" type="text" name="" id=""/>
          <button className="item" >login</button>
          <h3 className="item" >more</h3>
          <h3 className="item"  ><Link style={{textDecoration:"none", color:"#fff"}}to="/cart">cart</Link></h3>
        </div>
    </nav>
   );
}
 
export default Navbar;
