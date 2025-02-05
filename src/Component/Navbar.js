// Importing React library
import React from 'react';

// Navbar functional component
// Accepts various scroll functions as props for smooth navigation to different sections of the page.
const Navbar = ({
  scrollToHome,       // Function to scroll to the "Home" section
  scrollToWhyUs,      // Function to scroll to the "Why Us" section
  scrollToHowItWorks, // Function to scroll to the "How It Works" section
  scrollToAbout,      // Function to scroll to the "About Us" section
  scrollToContact,    // Function to scroll to the "Contact" section
  scrollToOrder       // Function to scroll to the "Order Now" section
}) => {
  
  // Inline style for the navbar background and text
  const navbarStyle = {
    backgroundColor: '#006D5B', // Sets the background color of the navbar
    color: 'White'                     // Sets the default text color of the navbar
  };

  // Inline style for navigation links
  const navLinkStyle = {
    color: 'White',  // Default text color for nav links
    cursor: 'pointer' // Pointer cursor on hover
  };

  // Hover style for navigation links
  const navLinkHoverStyle = {
    color: 'yellow' // Changes text color to yellow when hovered over
  };

  // JSX for the navbar
  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={navbarStyle}>
      <div className="container-fluid">
        {/* Brand Name: Clicking it scrolls to the "Home" section */}
        <span className="navbar-brand" onClick={scrollToHome} style={{ color: 'white' }}>
        Cultivator's Corner
        </span>

        {/* Hamburger menu button for small screens */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span> {/* Icon for toggling the menu */}
        </button>

        {/* Collapsible navigation menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* Aligns the navigation items to the right using "ms-auto" */}
            
            {/* Home link */}
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={scrollToHome} // Calls the scrollToHome function when clicked
                style={navLinkStyle} // Default style
                onMouseEnter={(e) => (e.target.style.color = '#ffd700')} // Changes color to gold on hover
                onMouseLeave={(e) => (e.target.style.color = 'white')}  // Reverts color to white when not hovering
              >
                Home
              </span>
            </li>

            {/* Why Us link */}
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={scrollToWhyUs} // Calls the scrollToWhyUs function when clicked
                style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = '#ffd700')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                Why Us
              </span>
            </li>

            {/* How It Works link */}
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={scrollToHowItWorks} // Calls the scrollToHowItWorks function when clicked
                style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = '#ffd700')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                How It Works
              </span>
            </li>

            {/* About Us link */}
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={scrollToAbout} // Calls the scrollToAbout function when clicked
                style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = '#ffd700')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                About Us
              </span>
            </li>

            {/* Contact link */}
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={scrollToContact} // Calls the scrollToContact function when clicked
                style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = '#ffd700')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                Contact
              </span>
            </li>

            {/* Order Now link */}
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={scrollToOrder} // Calls the scrollToOrder function when clicked
                style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = '#ffd700')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                Order Now
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Exporting the Navbar component for use in other parts of the application
export default Navbar;
