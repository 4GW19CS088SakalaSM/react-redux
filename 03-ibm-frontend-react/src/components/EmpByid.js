import axios from "axios";
import { useState } from "react";
import EmpService from "../services/EmpService";
import { useDispatch, useSelector } from "react-redux";
import { setById } from "../redux/EmpSlice";

const EmpById = () => {

    const [empById, setEmpById] = useState('');
    const dispatch = useDispatch();
    const oneEmployee = useSelector(state => state.emp.byIdEmp)

    const handleChange = (evt) => {
        //setEmpData({ ...empData, [evt.target.name]: evt.target.value });
        setEmpById(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(empById);
        //axios.get(`http://localhost:9090/emp/get-emp-by-id/${empData}`)
        EmpService.getEmpById(empById)
        .then((resp) => {
            console.log(resp);
            // setEmpData(resp);
                        dispatch(setById(resp));
        })
        .catch(error => {
            console.log(error);
           alert("Employee doesnt exist") 
        });
    };

    return (
        <div className="container mt-3">
            <h1>Employee by Id</h1>
            <div className="col-4">
            <form onSubmit={handleSubmit}>
                <label htmlFor="employeeId">Employee Id:</label>
                <input className="form-control" type="text" id="employeeById" name="employeeById" value={empById} onChange={handleChange} placeholder="Enter employee id" required  />
                <br/>
                <input className="form-control btn btn-outline-light"type="submit" value="get employee with id"/>
            </form>
            </div>
            <div>
                <h3>Employee</h3>
                <h1 className="container mt-3">  Employee found : </h1>

                    <table className="container text-left">
                        <thead className="row">
                                <th className="col">id</th> 
                                <th className="col">Name</th> 
                                <th className="col ">Salary</th> 
                                <th className="col">Aadhar</th>
                                <th className="col">email</th>
                            
                        </thead>
                        <tbody>
                        {/* {empData && empData.map(emp => ( */}
                                <tr className="row" >
                                    <th className="col" >{oneEmployee.employeeId}</th>
                                    <th className="col">{oneEmployee.firstName}</th>
                                    <th className="col">{oneEmployee.salary}</th>
                                    <th className="col">{oneEmployee.aadhar}</th>
                                    <th className="col">{oneEmployee.email}</th>
                                </tr>
                            
                        </tbody>
                    </table>
                
            </div>
        </div>
    );
}
 
export default EmpById;

// import axios from "axios";
// import { useState } from "react";
// const EmpById = () => {
//     const [empData, setEmpData] = useState({ employeeId: '' });

//     const handleChange = (evt) => {
//         setEmpData({ ...empData, [evt.target.name]: evt.target.value });
//     }

    
//     const handleSubmit= () => {
//         console.log('submit');
//         axios.get(`http://localhost:9090/emp/get-emp-by-id/${empData.employeeId}`,empData)
//         .then((resp) => {
//             console.log(resp)
//             setEmpData({ employeeId:'' })})
//         .catch(error => {
//             console.log(error);
//             throw new Error(error);   
//         })
        
        
//     };

//     return (
//         <>
//         <h1>Employee by Id</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="employeeId">Employee Id:</label>
//                 <input type="text" id="employeeId" name="employeeId" value={empData.employeeId} onChange={handleChange} placeholder="Enter employee id" required  />
//                 <br/>
//                 <input type="submit" value="get employee with id"/>
//             </form>
//             <div>
//                 <h3>Employee</h3>
//                 <table border={1}>
//                 <thead>
//                     <th>Name</th> <th>salary</th> <th>aadhar</th>
//                 </thead>
//                 <tbody>
//                 {empData && empData.map(emp => (
//                         <tr key={emp.employeeId}>
//                             <th>{emp.firstName}</th>
//                             <th>{emp.salary}</th>
//                             <th>{emp.aadhar}</th>
//                         </tr>
//                     ))}
//                 </tbody>
                    
//                 </table>
//             </div>
//         </>
//     );
// }
 
// export default EmpById;