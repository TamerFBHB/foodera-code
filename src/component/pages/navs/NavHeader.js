
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavHeader.css";
import logo from "../../images/logo.png";

window.addEventListener("scroll", function() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("header").style.boxShadow = "0 8px 6px -6px #444";
  } else {
    document.getElementById("header").style.boxShadow = "none";
  }
});

const NavHeader = ({aBout,explorer,Review,Home}) => {
  
  // navigation to Home
const moveHome = () => {
  Home.current.scrollIntoView({ behavior: "smooth", block:"start" });
};
  // navigation to about
  const moveAbout = () => {
    aBout.current.scrollIntoView({ behavior: "smooth", block:"start" });
  };
    // navigation to Explorer
    const moveExplorer = () => {
      explorer.current.scrollIntoView({ behavior: "smooth", block:"start" });
    };
// navigation to Review
const moveReview = () => {
  Review.current.scrollIntoView({ behavior: "smooth", block:"start" });
};

  return (
    <Navbar expand="lg" id="header" className="navFixed">
      <Container>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end align-items-center  flex-grow-1 pe-3  ">
            <NavLink onClick={moveHome} className=" me-4 my-2">
              Home
            </NavLink>
            <NavLink onClick={moveAbout} className=" me-4 my-2">
              About Us
            </NavLink>
            <NavLink  onClick={moveExplorer} className=" me-4 my-2">
              Explore Foods
            </NavLink>
            <NavLink onClick={moveReview} className="me-4 my-2">
              Reviews
            </NavLink>
            <NavLink to="#Faq" className="me-4 my-2">
              Faq
            </NavLink>
            <Button variant="danger" className="btn menu my-2">
              1800789123
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
