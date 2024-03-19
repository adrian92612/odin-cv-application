import Input from "./Input";

// function Input({ title, value, onChange }) {
//   return (
//     <>
//       <label>
//         {title}
//         <input value={value} onChange={onChange} />
//       </label>
//     </>
//   );
// }

function EducationInfo({ educInfo, onChange, onRemove }) {
  return (
    <>
      {educInfo.map((info) => {
        return (
          <div className="contents" key={info.id}>
            <Input
              title="School Name"
              placeholder="Some University"
              value={info.schoolName}
              onChange={(e) => onChange(e, "schoolName", info.id)}
            />
            <Input
              title="Course"
              placeholder="Some Course"
              value={info.course}
              onChange={(e) => onChange(e, "course", info.id)}
            />
            <Input
              title="Date Attended"
              placeholder="June 2010 - March 2024"
              value={info.date}
              onChange={(e) => onChange(e, "date", info.id)}
            />
            <button className="remove-btn" onClick={() => onRemove(info.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
}

function WorkInfo({ workInfo, onChange, onRemove }) {
  return (
    <>
      {workInfo.map((info) => {
        return (
          <div className="contents" key={info.id}>
            <Input
              title="Employer Name"
              placeholder="Some Company"
              value={info.employer}
              onChange={(e) => onChange(e, "employer", info.id)}
            />
            <Input
              title="Position"
              placeholder="Some Position"
              value={info.position}
              onChange={(e) => onChange(e, "position", info.id)}
            />
            <Input
              title="Date Employed"
              placeholder="January 2011 - Present"
              value={info.date}
              onChange={(e) => onChange(e, "date", info.id)}
            />
            <button className="remove-btn" onClick={() => onRemove(info.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
}

export { EducationInfo, WorkInfo };
