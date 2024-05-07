import axios from "axios";
import { useState } from "react";
import EmpService from "../services/EmpService";
const DeleteEmp = () => {

    const [empData, setEmpData] = useState({ employeeId: '' });

    const handleChange = (evt) => {
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
    }

    const handleSubmit =(evt)=>{
        evt.preventDefault();
        // axios.delete(`http://localhost:9090/emp/delete-emp/${empData.employeeId}`,empData, {
        //     withCredentials: true,
        //     crossOrigin: true,
        //   })
        EmpService.deleteById(empData.employeeId)
        .then((resp) => {
            if(resp.status===200)
            alert(`deleted successfully!`);
            setEmpData({ employeeId:'' });
        })
        .catch(error => {
            console.error("Error deleting employee:", error);
            alert(`employee with ${empData.employeeId} is not found`)
        });

    }



    return ( 
        <div className="container mt-3">
        <h1>Delete employee </h1>
        <div className="col-4">
            <form onSubmit={handleSubmit}>
                <label htmlFor="employeeId">Employee Id:</label>
                <input className="form-control"type="text" id="employeeId" name="employeeId" value={empData.employeeId} onChange={handleChange} placeholder="Enter employee id" required autoFocus />
                <br/>
                <input className="form-control btn btn-outline-light" type="submit" value="delete employee with id"/>
            </form>
        </div>
      
        </div>
     );
}
 
export default DeleteEmp;