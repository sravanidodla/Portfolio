import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      
      {socialMediaLinks.github ? 
      (<a href={socialMediaLinks.github} className="icon-button github">
        <i className="fab fa-github"></i>
        <span></span>
      </a>)
      :
      null}

      {socialMediaLinks.linkedin ?
      <a href={socialMediaLinks.linkedin} className="icon-button linkedin">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.gmail ?
      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google">
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.gitlab ?
      <a href={socialMediaLinks.gitlab} className="icon-button gitlab">
        <i className="fab fa-gitlab"></i>
        <span></span>
      </a>
      :
      null }

      {socialMediaLinks.facebook ?
      <a href={socialMediaLinks.facebook} className="icon-button facebook">
        <i className="fab fa-facebook-f"></i>
        <span></span>
      </a>
      :
      null}

       {socialMediaLinks.instagram ?
      <a href={socialMediaLinks.instagram} className="icon-button instagram">
        <i className="fab fa-instagram"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.twitter ?
      <a href={socialMediaLinks.twitter} className="icon-button twitter">
        <i className="fab fa-twitter"></i>
        <span></span>
      </a>
      :
      null}

      {socialMediaLinks.medium ? 
      (<a href={socialMediaLinks.medium} className="icon-button medium">
        <i className="fab fa-medium"></i>
        <span></span>
      </a>)
      :
      null}

      {socialMediaLinks.stackoverflow ? 
      (<a href={socialMediaLinks.stackoverflow} className="icon-button stack-overflow">
        <i className="fab fa-stack-overflow"></i>
        <span></span>
      </a>)
      :
      null}

    </div>
  );
}
