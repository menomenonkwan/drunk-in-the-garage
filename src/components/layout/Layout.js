import React from 'react'
// COMPONENTS
import Navbar from './Navbar'
import Footer from './Footer';
// STYLES
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <GlobalStyles />
      <Typography />
      <Navbar />
        { children }
      <Footer />
    </div>
  )
}
