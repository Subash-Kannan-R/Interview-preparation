import { useContext } from "react";
import { StudentContext } from "./Student";

const ContactInformation = () => {
  const { contactInformation } = useContext(StudentContext);
  const { phoneNo, address } = contactInformation;
return (
    <div>
      <h3>Contact Information</h3>
      <p>Phone No: {phoneNo}</p>
      <p>Address: {address}</p>
    </div>
  );
}
export default ContactInformation;
