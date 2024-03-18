import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PersonalInformation from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import Preview from "./components/Preview";
import "./index.css";

const initialPersonalInfo = {
  name: "John Doe",
  number: "9999999",
  email: "johndoe@somedomain.com",
  address: "Somewhere on earth",
  about: "Something about you",
};

let educId = 0;
const initialEducationInfo = {
  id: educId,
  schoolName: "Some University",
  course: "Some course",
  date: "June 1999 - March 2003",
};

function App() {
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  const [educationInfo, setEducationInfo] = useState([]);

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

  const addEducationInfo = () => {
    setEducationInfo([...educationInfo, { ...initialEducationInfo, id: educId++ }]);
  };

  return (
    <>
      <main>
        <section className="application-form">
          <PersonalInformation personalInfo={personalInfo} onChange={changePersonalInfo} />
          <EducationInfo
            educInfo={educationInfo}
            onChange={changeEducationInfo}
            onRemove={removeEducationInfo}
          />
          <button onClick={addEducationInfo}>Add Education</button>
        </section>
        <section className="preview">
          <Preview personalInfo={personalInfo} />
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
