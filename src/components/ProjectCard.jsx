import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/ProjectCard.css'

const ProjectCard = (props) => {
  return (
    <div className="col-12 col-sm-4">
        <div className="project-card mt-2">
            <div className="project-card-title mt-2">
                <p className="text-center titulo-3">Titleeee</p>
            </div>
            <hr className="line-solid p-2  mb-2"/>
            <div className="project-card-image">
                <img src={props.imageurl} className="project-card-image-src"/>
            </div>
            <hr className="line-solid p-2 mt-2 mb-2"/>
            <div className="project-card-text">
                <p className="text-justify">{props.text}</p>
            </div>
            <div className="project-card-buttons text-center">
                    <a href={props.url} className="btn btn-green">Go to project</a>
            </div>
        </div>
        
    </div>
  );
};

export default ProjectCard;