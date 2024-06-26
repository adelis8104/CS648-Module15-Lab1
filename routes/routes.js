import express from 'express'
import { getAllEmployees, createEmployee, deleteEmployee } from '../controllers/employees.js'

const router = express.Router()

router.route('/api/employees')
    .get(getAllEmployees)
    .post(createEmployee)
router.route('/api/employees')
    // .get(getEmployee)
    // .patch(updateEmployee)
    .delete(deleteEmployee)

export default router