import axios from "axios";

const BASE_URL="http://localhost:9090/emp/"
const EmpService =  {
    // addEmployee: async (empData) => {
    //     try {
    //         const response = await axios.post(`${BASE_URL}/add-emp`, empData);
    //         return response.data;
    //     } catch (error) {
    //         console.log(error);
    //         throw new Error(error);
    //     }
    //     },
    getEmployee: async ()=>{
        try {
            const response = await axios.get(`${BASE_URL}get-all-emps`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },

    getEmpById: async(empById)=>{
        try{
            const response = await axios.get(`${BASE_URL}get-emp-by-id/${empById}`)
            return response.data;

        }catch(error){
            console.log(error);
            throw new Error(error);
        }
        

    },

    getEmpByName: async(empNameToFind)=>{
        try{
            const response = await axios.get(`${BASE_URL}get-emp-by-name/${empNameToFind}`)
            return response.data;

        }catch(error){
            console.log(error);
            throw new Error(error);
        }
        

    },



}
 
export default EmpService;