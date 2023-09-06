import { useState } from "react";


const BasicFormHandling = () => {

    const [firstName, setFirstName] = useState("Dan");
    const [lastName, setLastName] = useState("Perez");
    const user = [firstName, lastName];
    const [userDetails, setUserDetails] = useState("");

    let showInformation = (e) => {
        e.preventDefault();
        setUserDetails(user);

    }

    return ( 
        <>
        
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <from action="" method="">
                        <label htmlFor="">First Name:</label>
                        <input className="form-control" type="text" id="firstName" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                        <br></br>
                        <label htmlFor="">Last Name:</label>
                        <input className="form-control" type="text" id="lastName" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                        <hr></hr>
                        <button className="btn btn-primary w-100" onClick={showInformation}>Submit Information</button>
                        <label htmlFor="">Show Result:</label>
                        <h3>{userDetails[0]}</h3>
                        <h3>{userDetails[1]}</h3>
                    </from>
                </div>
            </div>
        </div>
        
        </>

     );
}
 
export default BasicFormHandling;