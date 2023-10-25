import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Inicio.css'
import image from '../assets/my_picture.jfif';
import android from '../assets/android.jfif';
import logoandroid from '../assets/android-logo.png';
import logoios from '../assets/iOS-logo.png';
import logoflutter from '../assets/flutter-logo.png';
import logospring from '../assets/spring-boot-logo.png';
import logoflask from '../assets/flask-logo.png';
import logoreact from '../assets/react-logo.png';
import logolaravel from '../assets/laravel-logo.png';
import logoangular from '../assets/angular-logo.png';
import logojenkins from '../assets/jenkins-logo.png';
import shoes from '../assets/shoes.jpg';
import fly from '../assets/fly.jpg';
import notice from '../assets/notice.jpg';
import logogcp from '../assets/gcp-logo.png';
import logoaws from '../assets/aws-logo.png';
import logonet from '../assets/net-logo.png';
import cv from '../assets/cv.pdf';
import { FaDownload, FaLinkedin,FaGithub,FaMailBulk } from 'react-icons/fa';
import ProjectCard from "../components/ProjectCard";
const InicioPage = () => {
    return (
      <div className="m-5">
          <div className="container" id="home">
              <div className="row">
                <div className="col-8 contenedor-nombre">
                    <p className="text-start titulo">Jonathan Mojica Fernandez</p>
                    <p className="typing-animation titulo-2">Software Developer</p>
                    <p className="text-justify">Hi I'm Jonathan Mojica Fernandez, I have 4 years in software development, in languages like Java, Dart, Kotlin, Javascript and Python. Some of the Frameworks I work with are Spring Boot, Flask and Laravel. On the front end side I have experience in Frameworks like React and Angular. Also on the mobile side I work with Android Native with Kotlin and Java and Flutter. On the service management side I can handle GCP and AWS.</p>
                </div>
                <div className="col-12 col-sm-4">
                    <img className="circular-image" src={image} alt="" />
                </div>
                  
              </div>
              <div className="row">
                <div className="col-12 col-sm-3">
                    <div className="container-icon">
                        <FaLinkedin className="icon-style"/> <a href="https://www.linkedin.com/in/jonathanmf1/" className="link">jonathanmf1</a>
                    </div>
                </div>
                <div className="col-12 col-sm-3">
                    <div className="container-icon">
                        <FaGithub className="icon-style"/> <a href="https://github.com/JonathanMF2020" className="link">JonathanMF2020</a>
                    </div>
                </div>
                <div className="col-12 col-sm-3">
                    <div className="container-icon">
                        <FaDownload className="icon-style"/> <a href={cv} download="JonathanMojicaCV.pdf" className="link">Download CV</a>
                    </div>
                </div>
                <div className="col-12 col-sm-3">
                    <div className="container-icon">
                        <FaMailBulk className="icon-style"/> <a href="mailto:jonathanmojicafernandezdev@example.com?subject=Contact&body=Write the reason" className="link">Contact Me</a>
                    </div>
                </div>
              </div>
              
          </div>
          <hr className="line-solid p-2 mt-5"/>
          <div className="container" id="projects">
            <p className="text-center titulo-2">Projects</p>
            <div className="row mx-auto">
                <ProjectCard imageurl={fly} text="Application that allows you to display travel destination information for English and Spanish languages, status management with bloc manager." url="https://github.com/JonathanMF2020/travel_app"/>
                <ProjectCard imageurl={notice} text="This is a backend with Spring Boot and frontend in React that allowed to post, edit and comment a news forum, this was part of an exam for some company." url="https://github.com/JonathanMF2020/noticias"/>
                <ProjectCard imageurl={shoes} text="This is a project with Flask in which he is in charge of the complete management of a shoe factory for production and warehousing." url="https://gitlab.com/jonathanmojicafernandez/fabricazapatos" />
            </div>
          </div>
          <hr className="line-solid p-2 mt-5"/>
          <div id="stack">
            <p className="text-center titulo-2">Technology Stack</p>
            <div className="row text-center">
                <div className="col-12 col-sm-2">
                    <img src={logoandroid} className="logo-sizes"/>
                </div>
                <div className="col-12 col-sm-2">
                    <img src={logoios} className="logo-sizes"/>
                </div>
                <div className="col-12 col-sm-2">
                    <img src={logoflutter} className="logo-sizes"/>
                </div>
                <div className="col-12 col-sm-2">
                    <img src={logoflask} className="logo-sizes"/>
                </div>
                <div className="col-12 col-sm-2">
                    <img src={logospring} className="logo-sizes"/>
                </div>
                <div className="col-12 col-sm-2">
                    <img src={logolaravel} className="logo-sizes"/>
                </div>
                <div className="col-12 col-sm-2">
                    <img src={logonet} className="logo-sizes"/>
                </div>
                <div className="col-12 col-sm-2">
                    <img src={logoangular} className="logo-sizes"/>
                </div>
                <div className="col-12 col-sm-2">
                    <img src={logoreact} className="logo-sizes"/>
                </div>
                <div className="col-12 col-sm-2">
                    <img src={logojenkins} className="logo-sizes"/>
                </div>
                <div className="col-12 col-sm-2">
                    <img src={logogcp} className="logo-sizes"/>
                </div>
                <div className="col-12 col-sm-2">
                    <img src={logoaws} className="logo-sizes"/>
                </div>
                
                
            </div>
          </div>
          
      </div>
    );
  };
  
  export default InicioPage;