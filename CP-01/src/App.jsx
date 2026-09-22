import { useState } from "react";
import StudentProfile from "./StudentProfile";
import StudentForm from "./StudentForm";
import Counter from "./Counter";
import Display from "./Display";

function App() {
  // Exercise 1: Student details
  const student = {
    name: "Manasa",
    rollNumber: "CS101",
    department: "Computer Science",
    year: "2nd Year"
  };

  // Exercise 2: Student name
  const [studentName, setStudentName] = useState("");

  const receiveStudentName = (name) => {
    setStudentName(name);
  };

  // Exercise 3: Counter state
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>React Exercises</h1>

      <hr />

      {/* Exercise 1 */}
      <h2>Exercise 1 - Student Profile</h2>

      <StudentProfile
        name={student.name}
        rollNumber={student.rollNumber}
        department={student.department}
        year={student.year}
      />

      <hr />

      {/* Exercise 2 */}
      <h2>Exercise 2 - Callback</h2>

      <StudentForm
        onSubmitName={receiveStudentName}
      />

      <h3>Received Student Name: {studentName}</h3>

      <hr />

      {/* Exercise 3 */}
      <h2>Exercise 3 - Lift State Up</h2>

      <Counter
        onIncrease={increase}
        onDecrease={decrease}
      />

      <Display count={count} />
    </div>
  );
}

export default App;