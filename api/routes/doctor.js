import express from 'express';
import {
AddAppointMentCollection, AddDoctor,
AppointmentPatientsList, appointMentByDate,
getDoctors, IsDoctor, AddServices, ServicesList,
AddReview, ReviewsList, UpdateUserInfo
}
  from '../controllers/doctor.js';

import { login, register, viewUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
import multer from "multer"

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("working token ")
})
//admin can access
router.post('/auth/addServices', verifyToken, verifyAdmin, AddServices);


//user or admin can access
router.post('/auth/addAppointMent', verifyToken, AddAppointMentCollection);
router.post('/auth/appointByDate', verifyToken, verifyUser, appointMentByDate);
router.post('/auth/addReview', verifyToken, AddReview);
router.put('/auth/updateInfo/:id', verifyToken, UpdateUserInfo);
router.get('/auth/patients', verifyToken, verifyUser, AppointmentPatientsList);
router.get('/auth/users', verifyToken, verifyAdmin, viewUser);

//global
router.get('/auth/ourServices', ServicesList);
router.post('/auth/isDoctor', IsDoctor);
router.get('/auth/reviews', ReviewsList);
router.post('/auth/addDoctors', upload.single('file'), AddDoctor)
router.get('/auth/doctors', getDoctors);

//auth
router.post('/auth/register', register);
router.post('/auth/login', login);
export default router;