import axios from "axios";
import { useState } from "react";
import EmpService from "../services/EmpService";
import { useDispatch, useSelector } from "react-redux";
import { setByName } from "../redux/EmpSlice";

const EmpByName = () => {
    //const [empData, setEmpData] = useState('');
    const [empNameToFind, setEmpNameToFind] = useState('');
    const dispatch= useDispatch();
    const EmployeeByName = useSelector(state => state.emp.byNameEmp)

    const handleChange = (evt) => {
        setEmpNameToFind(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(empNameToFind);
        //axios.get(`http://localhost:9090/emp/get-emp-by-name/${empNameToFind}`)
        EmpService.getEmpByName(empNameToFind)    
        .then((resp) => {
                console.log(resp);
                //setEmpData(resp);
                dispatch(setByName(resp));
                alert(`successfully got emp`);
                //setEmpData({ firstName:'' });
            })
            .catch(error => {
                console.log(error);
                alert(`Employee with name ${empNameToFind} is not present`);
            });
    };

    return (
        <div className="container mt-3">
            <h1>Employee by name</h1>
            <div className="col-4">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Employee Name:</label>
                    <input className="form-control" type="text" id="empNameToFind" name="empNameToFind" value={empNameToFind} onChange={handleChange} placeholder="Enter employee name" required />
                    <br />
                    <input className="form-control btn btn-outline-light" type="submit" value="get employee by name" />
                </form>
            </div>
            <div>
                <h3>Employee</h3>

                <div>
                    <h1 className="container mt-3"> {EmployeeByName.length} Employees found : </h1>
                    <table className="container text-center">
                        <thead className="row">
                            <th className="col" >id</th>
                            <th className="col" >Name</th>
                            <th className="col">salary</th>
                            <th className="col">aadhar</th>
                            <th className="col">email</th>

                        </thead>
                        <tbody>
                            {EmployeeByName && EmployeeByName.map(emp => (
                                <tr className="row" key={emp.employeeId}>
                                    <th className="col" >{emp.employeeId}</th>
                                    <th className="col">{emp.firstName}</th>
                                    <th className="col">{emp.salary}</th>
                                    <th className="col">{emp.aadhar}</th>
                                    <th className="col">{emp.email}</th>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

                {/* <table className="container text-left">
                    <thead className="row">
                        <th className="col">id</th>
                        <th className="col">Name</th>
                        <th className="col ">Salary</th>
                        <th className="col">Aadhar</th>
                        <th className="col">email</th>

                    </thead>
                    <tbody>
                        {empData &&
                            <tr className="row">
                                <td className="col">{empData[0].employeeId}</td>
                                <td className="col">{empData[0].firstName}</td>
                                <td className="col">{empData[0].salary}</td>
                                <td className="col">{empData[0].aadhar}</td>
                                <td className="col">{empData[0].email}</td>
                            </tr>
                        }

                    </tbody>
                </table> */}

            </div>
        </div>
    );
}

export default EmpByName;