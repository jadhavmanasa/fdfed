function StudentProfile(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Roll Number: {props.rollNumber}</p>
      <p>Department: {props.department}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

export default StudentProfile;