import React from 'react';
import './index.css'; // Importing the CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS (for components like navbar, modals, tooltips, etc.)
import Header from './components/Header/header';
import Hero from "./components/hero";
import OurTrack from "./components/ourTrack";
import Testimonials from './components/testimonial';
import Premium from './components/premium';
import FormAuth from './components/formauth';
import Footer from './components/Footer/footer';
import ManageProducts from './pages/AdminDashboard/ManageTopic';
import ResponsiveForm from './pages/AdminDashboard/AddTopic';



   

function App() {
  return (
    <div>
      {/* <Header />
      <Hero />
      <OurTrack />
      <Premium />
      <Testimonials />
      <FormAuth />
      <Footer /> */}
      <ResponsiveForm/>
      <ManageProducts/>
    
    
      
    </div>
  );
}

export default App;
