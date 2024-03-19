export default function Input({ title, placeholder, value, onChange }) {
  return (
    <div>
      <label>
        {title}
        <input placeholder={placeholder} value={value} onChange={onChange} />
      </label>
    </div>
  );
}
