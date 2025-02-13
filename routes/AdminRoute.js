import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { deleteAdmin, getAdmin, getAllAdminById, loginAdmin, registerAdmin, updateAdmin } from '../controller/AdminController.js';

const AdminRoute = express.Router();

AdminRoute.get('/', verifyToken,getAdmin)
AdminRoute.get('/find/:id', verifyToken, getAllAdminById)

AdminRoute.post('/register',  registerAdmin)
AdminRoute.post('/login',  loginAdmin)

AdminRoute.put('/update/:id',  updateAdmin)

AdminRoute.delete('/delete/:id',  deleteAdmin)   

export default AdminRoute