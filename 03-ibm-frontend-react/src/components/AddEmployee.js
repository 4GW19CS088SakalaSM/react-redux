// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// const AddEmployee = () => {
//     const backendUrl = 'http://localhost:9090/emp/add-emp';
//     const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();
//     const handleChange = (evt) => {
//         setEmpData({ ...empData, [evt.target.name]: evt.target.value });
//         setErrors({ ...errors, [evt.target.name]: '' });
//     };
//     const validateForm = () => {
//         let isValid = true;
//         const newErrors = {};
//         if (!empData.firstName.trim()) {
//             newErrors.firstName = "First name is required";
//             isValid = false;
//         }
//         if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empData.email)) {
//             newErrors.email = "Invalid email address";
//             isValid = false;
//         }
//         if (!/^\d{12}$/.test(empData.aadhaar)) {
//             newErrors.aadhaar = "Aadhaar must be a 12-digit number";
//             isValid = false;
//         }
//         if (empData.salary <= 0 || isNaN(empData.salary)) {
//             newErrors.salary = "Salary must be a positive number";
//             isValid = false;
//         }
//         setErrors(newErrors);
//         return isValid;
//     };
//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         if (validateForm()) {
//             axios.post(backendUrl, empData)
//                 .then((resp) => {
//                     alert(`${resp.data.firstName} added successfully!`);
//                     setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
//                     navigate('/emp');
//                 })
//                 .catch(error => {
//                     console.error("Error adding employee:", error);
//                 });
//         }
//     };
//     return (
//         <>
//         <div className="m-4 p-4 d-flex flex-column border rounded-4 shadow-lg position-absolute translate-middle top-50 start-50 bg-primary-subtle col-8">
//             <h2>Add Employee Component</h2>
//             <form className="row g-3 px-2" onSubmit={handleSubmit}>
//                 <label htmlFor="firstName">First Name:</label>
//                 <input type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" className="input-group-lg px-4 py-1 rounded" required autoFocus />
//                 {errors.firstName && <span className="error">{errors.firstName}</span>}
//                 <br />
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" className="input-group-lg px-4 py-1 rounded" />
//                 {errors.email && <span className="error">{errors.email}</span>}
//                 <br />
//                 <label htmlFor="aadhaar">Aadhaar:</label>
//                 <input type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" className="input-group-lg px-4 py-1 rounded" />
//                 {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
//                 <br />
//                 <label htmlFor="salary">Salary:</label>
//                 <input type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" className="input-group-lg px-4 py-1 rounded" />
//                 {errors.salary && <span className="error">{errors.salary}</span>}
//                 <br />
//                 <input type="submit" value="Add Employee" className="btn btn-primary"/>
//             </form>
//             </div>
//         </>
//     );
// };
// export default AddEmployee;
import { useState } from "react";
import axios from "axios";
import EmpService from "../services/EmpService";
const AddEmp = () => {

    //const backendUrl = 'http://localhost:9090/emp/add-emp';
    const [empData, setEmpData] = useState({ firstName: '', email: '', aadhar: '', salary: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
        setErrors({ ...errors, [evt.target.name]: '' });

        if (evt.target.name === 'aadhar' && /^\d{12}$/.test(evt.target.value)) {
            console.log(evt.target.value);
            // const isValidAadhar = !/^\d{12}$/.test(empData.aadhar);
            // if (!isValidAadhar) {
                setErrors({ ...errors, [evt.target.name]: 'Aadhar number must have exactly 12 digits.' });
            // }
        }

        

        // if (evt.target.name === 'aadhar') {
        //     if ((evt.target.value)) {
        //         setErrors({ ...errors, [evt.target.name]: 'Aadhar number must have exactly 12 digits.' });
                
        //     }
        // }

        // Validation for Email
        if (evt.target.name === 'email') {
            const isValidEmail = /\S+@\S+\.\S+/.test(evt.target.value);
            if (!isValidEmail) {
                setErrors({ ...errors, [evt.target.name]: 'Please enter a valid email address.' });
            }
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
        if (empData.salary <= 0) {
            newErrors.salary = "Salary should be greater than 0.";
            isValid = false;
        }

        // Validate Aadhar number
    // const aadharRegex = /^\d{12}$/;
    // if (!aadharRegex.test(empData.aadhar)) {
    //     newErrors.aadhar = "Aadhar number must be 12 digits.";
    //     isValid = false;
    // };

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(empData.email)) {
        newErrors.email = "Invalid email address.";
        isValid = false;
    }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            //axios.post(backendUrl, empData)
            EmpService.addEmployee(empData)
                .then((resp) => {
                    console.log(resp);
                    alert(`${resp.firstName}  added successfully!`);
                    setEmpData({ firstName: '', email: '', aadhar: '', salary: '' });
                })
                .catch(error => {
                    console.error("Error adding employee:", error);
                });
        }
    };

    return (
        <div className="container mt-3">
            <h1>Add Employee Component</h1>
            <div className="col-4">
                <form className="form form-group mx-2 py-2 my-2 py-2" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name:</label>
                    <input className="form-control" type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input className="form-control" type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
                    {errors.email && <span>{errors.email}</span>}
                    <br />
                    <label htmlFor="aadhar">Aadhar:</label>
                    <input className="form-control" type="number" id="aadhar" name="aadhar"  value={empData.aadhar} onChange={handleChange} placeholder="Enter aadhar" />
                    {errors.aadhaar && <span>{errors.aadhar}</span>}
                    <br />
                    <label htmlFor="salary">Salary:</label>
                    <input className="form-control" type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
                    {errors.salary && <span>{errors.salary}</span>}
                    <br />
                    <input className="form-control btn btn-outline-light" type="submit" value="Add Employee" />
                </form>
            </div>
        </div>
    );
};

export default AddEmp;

// // // import axios from "axios";
// // // import { useState } from "react";

// // // const AddEmployee = () => {

// // //     const backendUrl = 'https://jsonplaceholder.typicode.com/users';
// // //     const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });

// // //     const handleChange = (evt) => {
// // //         console.log(evt.target);
// // //         setEmpData({ ...empData, [evt.target.name]: evt.target.value });
// // //     };

// // //     const handleSubmit = (evt) => {
// // //         evt.preventDefault();
// // //         console.log(empData);
// // //         axios.post(backendUrl, empData)
// // //             .then((resp) => {
// // //                 console.log(resp.data);
// // //                 alert(`${resp.data.firstName} with id ${resp.data.id} added successfully!`);
// // //                 setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
// // //             });
// // //     };

// // //     return (
// // //         <>
// // //             <h1>Add Employee Component</h1>
// // //             <form onSubmit={handleSubmit} >
// // //                 <label htmlFor="firstName">First Name:</label>
// // //                 <input type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
// // //                 <br />
// // //                 <label htmlFor="email">Email:</label>
// // //                 <input type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
// // //                 <br />
// // //                 <label htmlFor="aadhaar">Aadhaar:</label>
// // //                 <input type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
// // //                 <br />
// // //                 <label htmlFor="salary">Salary:</label>
// // //                 <input type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
// // //                 <br />
// // //                 <input type="submit" value="Add Employee" />
// // //             </form>
// // //         </>
// // //     );
// // // };

// // // export default AddEmployee;






// // import axios from "axios";
// // import { useState } from "react";

// // const AddEmployee = () => {
// //     const backendUrl = 'http://localhost:9090/emp/add-emp';
// //     const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });
// //     const [errors, setErrors] = useState({});

// //     const handleChange = (evt) => {
// //         setEmpData({ ...empData, [evt.target.name]: evt.target.value });
// //         setErrors({ ...errors, [evt.target.name]: '' });
// //     };

// //     const validateForm = () => {
// //         let isValid = true;
// //         const newErrors = {};

// //         if (!empData.firstName.trim()) {
// //             newErrors.firstName = "First name is required";
// //             isValid = false;
// //         }

// //         if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empData.email)) {
// //             newErrors.email = "Invalid email address";
// //             isValid = false;
// //         }

// //         if (!/^\d{12}$/.test(empData.aadhaar)) {
// //             newErrors.aadhaar = "Aadhaar must be a 12-digit number";
// //             isValid = false;
// //         }

// //         if (empData.salary <= 0 || isNaN(empData.salary)) {
// //             newErrors.salary = "Salary must be a positive number";
// //             isValid = false;
// //         }

// //         setErrors(newErrors);
// //         return isValid;
// //     };

// //     const handleSubmit = (evt) => {
// //         evt.preventDefault();
// //         if (validateForm()) {
// //             axios.post(backendUrl, empData)
// //                 .then((resp) => {
// //                     alert(`${resp.data.firstName} with id ${resp.data.id} added successfully!`);
// //                     setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
// //                 })
// //                 .catch(error => {
// //                     console.error("Error adding employee:", error);
// //                 });
// //         }
// //     };

// //     return (
// //         <div className="container mt-3">
// //             <h1 >Add Employee Component</h1>
// //             <div class="col-4">
// //                 <form className="form form-group mx-2 py-2 my-2 py-2" onSubmit={handleSubmit}>
// //                     <label htmlFor="firstName">First Name:</label>
// //                     <input className="form-control"type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
// //                     {errors.firstName && <span className="error">{errors.firstName}</span>}
// //                     <br />
// //                     <label htmlFor="email">Email:</label>
// //                     <input className="form-control" type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
// //                     {errors.email && <span className="error">{errors.email}</span>}
// //                     <br />
// //                     <label htmlFor="aadhaar">Aadhaar:</label>
// //                     <input className="form-control" type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
// //                     {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
// //                     <br />
// //                     <label htmlFor="salary">Salary:</label>
// //                     <input className="form-control" type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
// //                     {errors.salary && <span className="error">{errors.salary}</span>}
// //                     <br />
// //                     <input className="form-control btn btn-outline-light" type="submit" value="Add Employee" />
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AddEmployee;
