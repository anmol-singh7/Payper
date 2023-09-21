import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import WayPayper from '../components/whyPayper';
import FAQPage from '../components/FAQPage';
import Footer from '../components/footer.jsx';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header />
    <WayPayper/>
    <FAQPage/>
    <Footer/>
    </>

  )
}

export default Home