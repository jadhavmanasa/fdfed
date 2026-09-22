import { useState } from "react";

function StudentForm(props) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmitName(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;