import Input from "./Input";
import "./PersonalInfo.css";

export default function PersonalInformation({ personalInfo, onChange }) {
  return (
    <form className="personal-information">
      <Input
        title="Name"
        placeholder="John Doe"
        value={personalInfo.name}
        onChange={(e) => onChange(e, "name")}
      />
      <Input
        title="Number"
        placeholder="123 456 789"
        value={personalInfo.number}
        onChange={(e) => onChange(e, "number")}
      />
      <Input
        title="Email Address"
        placeholder="johndoe@somedomain.com"
        value={personalInfo.email}
        onChange={(e) => onChange(e, "email")}
      />
      <Input
        title="Address"
        placeholder="Some City, Some Country"
        value={personalInfo.address}
        onChange={(e) => onChange(e, "address")}
      />
    </form>
  );
}
