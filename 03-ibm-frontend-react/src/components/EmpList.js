
import axios from "axios";
import { useEffect, useState } from "react";
import EmpService from "../services/EmpService";
import { useDispatch, useSelector } from "react-redux";
import { setAllEmp } from "../redux/EmpSlice";

const EmpList = () => {
    const dispatch =useDispatch();
    const empList=useSelector(state=> state.emp.empDataList)
    // const [empData, setEmpData] = useState('');
    // const empList = useSelector(state =>state.emp.s)

    // useEffect(() => {
    //     console.log('asdf');
    // }, []);

    useEffect(() => {
        console.log('usEffect');
        //axios.get('http://localhost:9090/emp/get-all-emps')
            EmpService.getEmployee()
            .then((resp) => {
                console.log(resp)
                // setEmpData(resp)
                dispatch(setAllEmp(resp));
                
            })  
    }, []);
    console.log("---------------------------")
    console.log(empList[0]);

    return (
        <>
            <div>
                <h1 className="container mt-3">Employee List</h1>
                <table className="container text-center">
                <thead className="row">
                    <th className="col" >id</th> 
                    <th className="col" >Name</th> 
                    <th className="col">salary</th> 
                    <th className="col">aadhar</th>
                    <th className="col">email</th>

                </thead>
                <tbody>
                {empList && empList.map(emp => (
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
        </>
    );
}

export default EmpList;
// import axios from "axios";
// import { useEffect, useState } from "react";

// const EmpList = () => {

//     const [empList, setEmpList] = useState('');

//     useEffect(() => {
//         console.log('useEffect');
//         axios.get('http://localhost:9090/emp/get-all-emps')
//             .then((resp) => {
//                 console.log(resp.data);
//                 setEmpList(resp.data);
//             })
//     }, []);

//     return (
//         <>
//             <h1>EmpList Component</h1>
//             <table class="container text-left">
//                 <thead className="row" >
//                     <th className="col" >Name</th>
//                      <th className="col">Username</th>
//                       <th className="col">Email</th>
//                        <th className="col" >City</th>
//                 </thead>
//                 <tbody>
//                     {empList && empList.map(emp =>
//                         <tr className="row" key={emp.id}>
//                             <td className="col">{emp.name} </td>
//                             <td className="col">{emp.username} </td>
//                             <td className="col">{emp.email} </td>
//                             <td className="col">{emp.address.city} </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </>
//     );
// };

// export default EmpList;


// import axios from "axios";
// import { useState } from "react";

// const EmpList = () => {

//     const [empList, setEmpList] = useState('');

//     const getEmpList = () => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((resp) => {
//                 console.log(resp);
//                 setEmpList(resp.data);
//             })
//     };

//     return (
//         <>
//             <h1>EmpList Component</h1>
//             <p> {empList && empList.length} </p>
//             <button onClick={getEmpList}>Get Emp List</button>

//         </>
//     );
// };

// export default EmpList;
