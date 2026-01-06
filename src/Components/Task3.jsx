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
    <div>
        <h2>Contact Form</h2>
        <form onSubmit={handlesubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={handlechangename}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={handlechangeemail}
                />
            </div>
            <button
                type="submit"
                disabled={!valid}
            >
                Submit
            </button>
        </form>
    </div>
    )
};
export default Task3;
