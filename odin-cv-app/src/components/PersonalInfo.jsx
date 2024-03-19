import Input from "./Input";
import "./PersonalInfo.css";

export default function PersonalInformation({ personalInfo, onChange }) {
  return (
    <form className="personal-information">
      <Input title="Name" value={personalInfo.name} data="name" onChange={onChange} />
      <Input title="Number" value={personalInfo.number} data="number" onChange={onChange} />
      <Input title="Email Address" value={personalInfo.email} data="email" onChange={onChange} />
      <Input title="Address" value={personalInfo.address} data="address" onChange={onChange} />
    </form>
  );
}
