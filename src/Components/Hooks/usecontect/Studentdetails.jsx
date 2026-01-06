import { useContext } from "react";
import { StudentContext } from "./Student";
import ContactInformation from "./ContactInformation";

const StudentDetails = () => {
  const { subjects } = useContext(StudentContext);

  return (
    <div>
      <div>
        <h3>Subjects</h3>
        <ul className="subject">
          {subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>

      <ContactInformation/>
    </div>
  );
}
export default StudentDetails;
