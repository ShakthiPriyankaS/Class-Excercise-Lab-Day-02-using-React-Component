import * as React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
export default function Footer() {
  return (
    <div class="bottomleft">
       <Navbar bg="secondary" variant="dark">
      <Container>
      <Nav className="me-auto">
    you cantact us through
    <InstagramIcon/>
    <FacebookOutlinedIcon/>
    <TwitterIcon/>
    <WhatsAppIcon/>
    <p/>
    Contact no
    <PhoneInTalkIcon/>
    8248710125
    </Nav>
    </Container>
      </Navbar>
    </div>
  );
}