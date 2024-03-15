import { useState } from "react";
import PersonalInformation from "./components/PersonalInfo";
import "./index.css";

const initialPersonalInfo = {
  name: "John Doe",
  number: "9999999",
  email: "johndoe@somedomain.com",
  address: "Somewhere on earth",
  about: "Something about you",
};

function App() {
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);

  const changePersonalInfo = (e) =>
    setPersonalInfo({ ...personalInfo, [e.target.id]: e.target.value });

  return (
    <>
      <main>
        <section className="application-form">
          <PersonalInformation personalInfo={personalInfo} onChange={changePersonalInfo} />
        </section>
        <section className="preview"></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
