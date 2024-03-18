export default function Input({ type = "text", title, data, value, onChange }) {
  return (
    <div>
      <label>
        {title}

        <input type={type} value={value} onChange={(e) => onChange(e, data)} />
      </label>
    </div>
  );
}
