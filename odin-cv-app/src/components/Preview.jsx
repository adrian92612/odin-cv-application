export default function Preview({ personalInfo }) {
  return (
    <>
      <p>{personalInfo.name}</p>
      <p>{personalInfo.number}</p>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.address}</p>
      <p>{personalInfo.about}</p>
    </>
  );
}
