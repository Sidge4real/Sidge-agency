import menuItem from "./menuItem"

function Nav() {
    return (
      <nav className="Nav">
      <menuItem link="/home" text="Home"/>
      <menuItem link="/contact-us" text="Contact Us"/>
      <menuItem link="/about-us" text="About Us"/>
      </nav>
    )
  }
  
  export default Nav