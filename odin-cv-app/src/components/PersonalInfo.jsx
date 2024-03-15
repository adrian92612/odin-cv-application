import { useState } from "react";
import "./PersonalInfo.css";

function Input({ type = "text", title, id, value, onChange }) {
  return (
    <>
      <label>
        {title}
        <input type={type} id={id} value={value} onChange={(e) => onChange(e)} />
      </label>
    </>
  );
}

export default function PersonalInformation({ personalInfo, onChange }) {
  return (
    <div className="personal-information">
      <Input title="Name" id="name" value={personalInfo.name} onChange={onChange} />
      <Input
        title="Number"
        id="number"
        type="tel"
        value={personalInfo.number}
        onChange={onChange}
      />
      <Input
        title="Email Address"
        id="email"
        type="email"
        value={personalInfo.email}
        onChange={onChange}
      />
      <Input title="Address" id="address" value={personalInfo.address} onChange={onChange} />
      <Input title="About Me" id="about" value={personalInfo.about} onChange={onChange} />
    </div>
  );
}
