import { Fragment } from "react";
import "./Preview.css";

function PreviewPersonal({ personalInfo }) {
  return (
    <div className="preview-personal">
      <p>{personalInfo.name}</p>
      <p>{personalInfo.number}</p>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.address}</p>
      <p>{personalInfo.about}</p>
    </div>
  );
}

function PreviewEducation({ educationInfo }) {
  return (
    <div className="preview-education">
      {educationInfo.map((info, i) => {
        return (
          <Fragment key={i}>
            <p>{info.schoolName}</p>
            <p>{info.course}</p>
            <p>{info.date}</p>
          </Fragment>
        );
      })}
    </div>
  );
}

function PreviewWork({ workInfo }) {
  return (
    <div className="preview-work">
      {workInfo.map((info, i) => {
        return (
          <Fragment key={i}>
            <p>{info.employer}</p>
            <p>{info.position}</p>
            <p>{info.date}</p>
          </Fragment>
        );
      })}
    </div>
  );
}

export { PreviewPersonal, PreviewEducation, PreviewWork };
