import { createContext } from "react";
import { studentData } from "./data";
import StudentDetails from "./StudentDetails";

export const StudentContext = createContext(null);

const Student = () =>{
  return (
    <StudentContext.Provider value={studentData}>
      <div>
        <h1>Student Details without useContext Hook</h1>

        <div className="student-detail">
          <h3>Name</h3>
          <p>{studentData.name}</p>

          <h3>Age</h3>
          <p>{studentData.age}</p>

          <h3>Department</h3>
          <p>{studentData.department}</p>
        </div>

        <StudentDetails />
      </div>
    </StudentContext.Provider>
  );
}
export default Student;
