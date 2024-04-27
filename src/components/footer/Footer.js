import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from "react-icons/fa";
import './Footer.css';


export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-social">
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"><FaTiktok/></a>
        <a href="https://www.https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <div className="footer-text text-center">
        <Typography variant="body2" color="white" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://localhost:3000/">
                Osol Supplies
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
      </div>
    </footer>
    
  );
}
