// index.js 

import express from 'express';
//import { registerUser, loginUser, updateUserProfile } from './controllers/user.controller.js';
import './config/db.connection.js'; // needed 
//import { authenticateJWT } from './services/auth.service.js';
import cors from 'cors';
import patientAuthRoutes from './routes/patientAuth.js';
//import {router} from './services/admin.service.js'

const app = express();
app.use(cors()); // needed to avoid CORS errors in frontend app 
app.use(express.json());
//app.use(authenticateJWT); // uncomment to use authentication and authorization
app.use('/api',patientAuthRoutes);

//app.use('/admin', router);
const PORT = process.env.PORT || 2000; // set PORT=2002 && npm start

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// app.post('/register', registerUser);
// app.post('/login', loginUser);
// app.put('/users/:id', updateUserProfile);

// app.get('/admin/login', (req, res) => {
//     res.render('admin/login');
// });

// // Handle admin login form submission
// app.post('/admin/login', (req, res) => {
//     // Validate admin credentials
//     const { username, password } = req.body;
//     if (username === 'admin' && password === 'password') {
//         console.log('admin login');
//         // Successful login
//         // req.session.isAdmin = true;
//         // res.redirect('/admin/dashboard');
//     } else {
//         console.log('not admin');
//         // Invalid credentials
//         // res.render('admin/login', { error: 'Invalid username or password' });
//     }
// });