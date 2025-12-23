import { useState } from "react";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Task3 = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const valid = name.trim() !== '' && EMAIL.test(email);


    const handlechangename= (event) =>{
        setName(event.target.value);
        }    
 
    const handlechangeemail = (event) =>{
        setEmail(event.target.value);
    }
    const handlesubmit = (event) =>{
        event.preventDefault();
        alert(`Submitted:\nName: ${name}\nEmail: ${email}`);
    }




    return(
    <>
    <form onSubmit={handlesubmit}>
        <label>Name:
           <input type="text"
            value = {name}
            onChange = {handlechangename}/>
        </label>
        <label>Email:
            <input type="email" 
            value = {email}
            onChange = {handlechangeemail} />
        </label>
        <button type="submit" disabled={!valid}>Submit</button>
    </form>


    </>
    )
};
export default Task3;
