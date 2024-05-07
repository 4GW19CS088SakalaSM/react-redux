import AddEmployee from "./AddEmployee";
import DeleteEmp from "./DelEmployee";
import EmpByName from "./EmpByName";
import EmpById from "./EmpByid";
import EmpList from "./EmpList";
import UpdateEmp from "./UpdateEmp";
const Employee = () => {

    return (
        <>
            <h1 className="container mt-3">Employee Component</h1>
            {/* <select className="form-select col-4" aria-label="Default select example">
                <option selected>Get All Employee</option>
                <option value="1">Add Employee</option>
                <option value="2">Update Employee</option>
                <option value="3">Get Employee By Id</option>
                <option value="4">Get Employee By Name</option>
                <option value="5">Delete Employee By Id</option>
            </select> */}
            <br/>
            <AddEmployee />
            <br/>
            <UpdateEmp/>
            <br/>
            <DeleteEmp/>
            <br/>
            <EmpById/>
            <br/>
            <EmpByName/>
            <br/>
            <EmpList />
        </>
    );
};

export default Employee;


// import { useState } from "react";

// const Employee = () => {

//     // let firstName = ''; // does not work
//     const [firstName, setFirstName] = useState(''); // works

//     const handleNameInput = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         // firstName = evt.target.value; // does not work
//         setFirstName(evt.target.value); // works
//     };

//     return (
//         <>
//             <h1>Employee Component</h1>
//             <p>Employee name is {firstName}.</p>
//             <form>
//                 <input type="text" name="firstName" value={firstName} onChange={handleNameInput} />
//             </form>
//         </>
//     );
// };

// export default Employee;

// const Employee = () => {

//     const employee = {
//         id: 101,
//         firstName: 'Sonu',
//         salary: 10.5,
//         isIndian: true,
//         phone: 98765544310 // ''
//     };

//     return (
//         <>
//             <h1>Employee Component</h1>
//             <p>Employee component</p>
//             <p>Employee name is {employee.firstName}.</p>
//             <p>Employee salary is ₹{employee.salary}/-.</p>
//             <>
//                 {
//                     employee.phone &&
//                     <p>Employee primary phone is {employee.phone}.</p>
//                 }
//             </>
//         </>
//     );
// };

// export default Employee;


// const Employee = () => {

//     const salary = 50000;
//     const firstName = 'Sonu';

//     return (
//         <>
//             <h1>Employee component</h1>
//             <p>Employee component</p>
//             <p>Employee name is {firstName}.</p>
//             <p>Employee salary is ₹{salary}/-.</p>
//             <p>But the take home is ₹{salary - 10000}/-.</p>
//         </>
//     );
// };

// export default Employee;
