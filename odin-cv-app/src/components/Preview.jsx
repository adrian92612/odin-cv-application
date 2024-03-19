import { Fragment } from "react";
import "./Preview.css";
import phoneLogo from "../icons/phone-icon.svg";
import emailLogo from "../icons/email-icon.svg";
import locationLogo from "../icons/location-icon.svg";

function PreviewPersonal({ personalInfo }) {
  return (
    <div className="preview-personal">
      <p className="name">{personalInfo.name}</p>
      <div className="contact-details">
        <p>
          <img src={phoneLogo} alt="" />
          {personalInfo.number}
        </p>
        <p>
          <img src={emailLogo} alt="" />
          {personalInfo.email}
        </p>
        <p>
          <img src={locationLogo} alt="" />
          {personalInfo.address}
        </p>
      </div>
    </div>
  );
}

function PreviewEducation({ educationInfo }) {
  return (
    <div className="preview-education">
      <h2>EDUCATION</h2>

      {educationInfo.map((info, i) => {
        return (
          <div className="details" key={i}>
            <p className="org-name">{info.schoolName}</p>
            <p>{info.course}</p>
            <p>{info.date}</p>
          </div>
        );
      })}
    </div>
  );
}

function PreviewWork({ workInfo }) {
  return (
    <div className="preview-work">
      <h2>WORK</h2>
      {workInfo.map((info, i) => {
        return (
          <div className="details" key={i}>
            <p className="org-name">{info.employer}</p>
            <p>{info.position}</p>
            <p>{info.date}</p>
          </div>
        );
      })}
    </div>
  );
}

export { PreviewPersonal, PreviewEducation, PreviewWork };
