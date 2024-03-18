function Input({ title, value, onChange }) {
  return (
    <>
      <label>{title}</label>
      <input value={value} onChange={onChange} />
    </>
  );
}

export default function EducationInfo({ educInfo, onChange, onRemove }) {
  return (
    <>
      {educInfo.map((info) => {
        console.log(info.id);
        return (
          <div key={info.id}>
            <Input
              title="School Name"
              value={info.schoolName}
              onChange={(e) => onChange(e, "schoolName", info.id)}
            />
            <Input
              title="Course"
              value={info.course}
              onChange={(e) => onChange(e, "course", info.id)}
            />
            <Input
              title="Date Attended"
              value={info.date}
              onChange={(e) => onChange(e, "date", info.id)}
            />
            <button onClick={() => onRemove(info.id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
}
