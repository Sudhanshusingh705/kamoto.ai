import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol,MDBInput,MDBBtn,MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <MDBFooter bgColor='black' className='text-center text-lg-start text-white'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              {/* Logo */}
              <img src='https://www.kamoto.ai/assets/images/logo.svg' alt='Logo' className='mb-4' />

              <p style={{ textAlign: 'justify' }}>
              Kamoto.AI is revolutionizing the AI landscape by enabling users to create, train, and monetize bespoke AI Characters or Personalities while offering celebrities & influencers the chance to license authentic AI replicas of themselves for an innovative, interactive, and monetizable experience through APIs or AI Character Marketplace.
              </p>
               {/* Social Media Icons */}
              <MDBIcon fab icon='facebook-f' className='me-3' size='1x' />
              <MDBIcon fab icon='youtube' className='me-3' size='1x' />
              <MDBIcon fab icon='twitter' className='me-3' size='1x' />
              <MDBIcon fab icon='instagram' className='me-3' size='1x' />
              <MDBIcon fab icon='linkedin' className='me-3' size='1x' />
              <MDBIcon fab icon='telegram' className='me-3' size='1x' />
              <MDBIcon fab icon='discord' className='me-3' size='1x' />
              <MDBIcon fab icon='reddit' className='me-3' size='1x' />
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className=' fw-bold mb-4' style={{color: 'yellow'}}>Kamoto AI</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Blog
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Helpcenter
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Sign in
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Register
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='fw-bold mb-4' style={{color: 'yellow'}}>Use Cases</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Celebrities & Influencers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Gaming Industry
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Education Industry
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Health Industry
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Individual Users
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Businesses & Startups
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Open AI Marketplace
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Refer & Earn
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='fw-bold mb-4' style={{color: 'yellow'}}>News & Updates</h6>
    
            <p>
              <a href='#!' className='text-reset'>
                Celebrities & Influencers
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Term & Conditions
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Privacy Policy
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Risk Disclaimer
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Responsible AI Policy
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Refund Policy
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Fair Usage Policy
              </a>
            </p>
    
            {/* Email Input and Send Button */}
            <div className='d-flex align-items-center mt-4'>
              <MDBInput type='text' id='form5Example2' label='Email address' contrast />
              <MDBBtn outline color='light' className='ms-2'>
                Send
              </MDBBtn>
            </div>
          </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'black' }}>
        Copyright: © {currentYear}&nbsp;
        <a className='text-reset fw-bold' href='https://www.digitalworlduniverse.com/'>
          <span style={{ color: 'yellow' }}>Agnistoka Digital Universe Tech Pvt Ltd</span>&nbsp;
        </a>
        <a className='text-reset fw-bold'>
          All Right Reserved.
        </a>
      </div>
    </MDBFooter>
  );
}
