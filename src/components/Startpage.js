import React, { useEffect } from "react";
import "./Startpage.css";
import "./App.css";
import { Link } from "react-router-dom";
import startlogo from "../assets/entrance_images/Startlogo.png";
import cartoon from "../assets/entrance_images/cartoon_music.png";
import AOS from "aos";
import 'aos/dist/aos.css';



function Startpage() {

 useEffect(()=>{
  AOS.init({duration:2500});
 },[]);


  return (
    <section id="main">
      <div className="nav-item">
        <img
          className="navbar-brand"
          src={startlogo}
          width="100px"
          height="100px"
          alt="Loading...."
        />
       
      </div>
      <div className="main-row">
        <div className="main-row-img" data-aos="fade-down">
          <img className="head-phone-img App-logo" src={cartoon} alt="" />
        </div>
        <div className="main-row-text">
          <h1 data-aos="fade-up">"Music Expresses That Which Cannot be put into Words and that Which cannot remain Silent."</h1>
          <p>Feel Bored,Grab Some Noise Here</p>
          <Link to={"/Mainpage"} className="startbtn" data-aos="zoom-in">
                Start Noise
            </Link>
        </div>
      </div>
    </section>
    
  );
}
export default Startpage;
