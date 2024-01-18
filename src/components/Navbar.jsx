import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';


export default function Navbar() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='black'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='https://www.kamoto.ai/assets/images/logo.svg'>
        <img src='https://www.kamoto.ai/assets/images/logo.svg' alt='Logo' />
      </MDBNavbarBrand>
  
      <MDBNavbarToggler
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setOpenBasic(!openBasic)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>
  
      <MDBCollapse navbar open={openBasic}>
      <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-end'>
        <MDBNavbarItem>
          <MDBNavbarLink
            active
            aria-current='page'
            href='#'
            style={{ color: 'yellow', marginRight: '15px' }}
            hover
          >
            Home
          </MDBNavbarLink>
        </MDBNavbarItem>
    
        <MDBNavbarItem>
          <MDBDropdown>
            <MDBDropdownToggle
              tag='a'
              className='nav-link'
              role='button'
              style={{ color: 'white', marginRight: '15px' }}
              hover={{ color: 'yellow' }}
            >
              Use Cases
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem link style={{ backgroundColor: 'black', color: 'white' }}>
                Celebrities & Influencers
              </MDBDropdownItem>
              <MDBDropdownItem link style={{ backgroundColor: 'black', color: 'white' }}>
                Gaming Industry
              </MDBDropdownItem>
              <MDBDropdownItem link style={{ backgroundColor: 'black', color: 'white' }}>
                EdTech Industry
              </MDBDropdownItem>
              <MDBDropdownItem link style={{ backgroundColor: 'black', color: 'white' }}>
                Healthcare Industry
              </MDBDropdownItem>
              <MDBDropdownItem link style={{ backgroundColor: 'black', color: 'white' }}>
                Individual Industry
              </MDBDropdownItem>
              <MDBDropdownItem link style={{ backgroundColor: 'black', color: 'white' }}>
                Business & Startups
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>
    
        <MDBNavbarItem>
          <MDBNavbarLink
            href='#'
            style={{ color: 'white', marginRight: '15px' }}
            hover={{ color: 'yellow' }}
          >
            Pricing
          </MDBNavbarLink>
        </MDBNavbarItem>
    
        <MDBNavbarItem>
          <MDBNavbarLink
            href='#'
            style={{ color: 'white', marginRight: '15px' }}
            hover={{ color: 'yellow' }}
          >
            Ai Marketplace
          </MDBNavbarLink>
        </MDBNavbarItem>
    
        <MDBNavbarItem>
          <MDBNavbarLink
            href='#'
            style={{ color: 'white', marginRight: '15px' }}
            hover={{ color: 'yellow' }}
          >
            Blog
          </MDBNavbarLink>
        </MDBNavbarItem>
    
        <MDBNavbarItem>
          <MDBNavbarLink
            href='#'
            style={{ color: 'white', marginRight: '15px' }}
            hover={{ color: 'yellow' }}
          >
            Refer & Earn
          </MDBNavbarLink>
        </MDBNavbarItem>
    
        <MDBNavbarItem>
          <MDBDropdown>
            <MDBDropdownToggle
              tag='a'
              className='nav-link'
              role='button'
              style={{ color: 'white', marginRight: '15px' }}
              hover={{ color: 'yellow' }}
            >
              More
            </MDBDropdownToggle>
          
            <MDBDropdownMenu>
              <MDBDropdownItem link style={{ backgroundColor: 'black', color: 'white' }}>
                About Us
              </MDBDropdownItem>
              <MDBDropdownItem link style={{ backgroundColor: 'black', color: 'white' }}>
                Contact Us
              </MDBDropdownItem>
              <MDBDropdownItem link style={{ backgroundColor: 'black', color: 'white' }}>
                Help Center
              </MDBDropdownItem>
              <MDBDropdownItem link style={{ backgroundColor: 'black', color: 'white' }}>
                Term & Condition
              </MDBDropdownItem>
              <MDBDropdownItem link style={{ backgroundColor: 'black', color: 'white' }}>
                Android App
              </MDBDropdownItem>
              <MDBDropdownItem link style={{ backgroundColor: 'black', color: 'white' }}>
                iOS App
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>
    
        <MDBBtn outline color='warning' style={{ marginRight: '15px', color: 'yellow' }}>
          SignUp
        </MDBBtn>
      </MDBNavbarNav>
    </MDBCollapse>
    
    
    </MDBContainer>
  </MDBNavbar>
  
  );
}