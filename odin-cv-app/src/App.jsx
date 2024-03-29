import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PersonalInformation from "./components/PersonalInfo";
import { EducationInfo, WorkInfo } from "./components/EducationInfo";
import { PreviewPersonal, PreviewEducation, PreviewWork } from "./components/Preview";
import "./index.css";

const initialPersonalInfo = {
  name: "",
  number: "",
  email: "",
  address: "",
};

let ids = 0;
const initialEducationInfo = {
  id: ids,
  schoolName: "",
  course: "",
  date: "",
};

const initialWorkInfo = {
  id: ids,
  employer: "",
  position: "",
  date: "",
};

function App() {
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);

  const changePersonalInfo = (e, data) => {
    setPersonalInfo({ ...personalInfo, [data]: e.target.value });
  };

  const changeEducationInfo = (e, data, infoId) => {
    return setEducationInfo(
      educationInfo.map((info) => {
        if (info.id === infoId) return { ...info, [data]: e.target.value };
        return info;
      })
    );
  };

  const removeEducationInfo = (infoId) => {
    setEducationInfo(educationInfo.filter((info) => info.id !== infoId));
  };

  const changeWorkInfo = (e, data, infoId) => {
    return setWorkInfo(
      workInfo.map((info) => {
        if (info.id === infoId) return { ...info, [data]: e.target.value };
        return info;
      })
    );
  };
  const removeWorkInfo = (infoId) => {
    setWorkInfo(workInfo.filter((info) => info.id !== infoId));
  };

  const addInfo = (info, setInfo, initialInfo) => {
    setInfo([...info, { ...initialInfo, id: ids++ }]);
  };

  const downloadPDF = () => {
    const cv = document.querySelector("#preview");
    html2pdf(cv);
  };

  return (
    <>
      <main>
        <section className="application-form">
          <h2>Personal</h2>
          <div className="personal">
            <PersonalInformation personalInfo={personalInfo} onChange={changePersonalInfo} />
          </div>

          <h2>Education</h2>
          <div className="container">
            <EducationInfo
              educInfo={educationInfo}
              onChange={changeEducationInfo}
              onRemove={removeEducationInfo}
            />
          </div>
          <button
            className="add-btn"
            onClick={() => addInfo(educationInfo, setEducationInfo, initialEducationInfo)}
          >
            Add Education
          </button>
          <h2>Work</h2>
          <div className="container">
            <WorkInfo workInfo={workInfo} onChange={changeWorkInfo} onRemove={removeWorkInfo} />
          </div>
          <button
            className="add-btn"
            onClick={() => addInfo(workInfo, setWorkInfo, initialWorkInfo)}
          >
            Add Work Experience
          </button>
        </section>
        <section id="preview">
          <button className="download-btn" onClick={downloadPDF}>
            Download CV
          </button>
          <PreviewPersonal personalInfo={personalInfo} />
          <PreviewEducation educationInfo={educationInfo} />
          <PreviewWork workInfo={workInfo} />
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
