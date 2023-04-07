// Write your JS code here
import './index.css'

const Header = () => (
  <>
    <div className="header">
      <img
        className="nav-logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
      <div className="lg-nav">
        <li className="navEl">Home</li>
        <li className="navEl">Products</li>
        <li className="navEl">Cart</li>
        <div className="logout-btn">
          <button type="button">Logout</button>
        </div>
      </div>
      <img
        className="sm-nav"
        alt="nav logout"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
      />
    </div>
    <div className="sm-nav-elements">
      <img
        alt="home"
        className="sm-nav-El"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
      />
      <img
        alt="nav products"
        className="sm-nav-El"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
      />
      <img
        alt="nav cart"
        className="sm-nav-El"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
      />
    </div>
  </>
)

export default Header
