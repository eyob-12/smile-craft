import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import doctorRoutes from './routes/doctor.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert `import.meta.url` to a path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const allowedOrigin = 'http://localhost:3000';
const app = express();
app.use(cors({
    origin: allowedOrigin,
    credentials: true, // Allow credentials (cookies)
}));
const port = 4001;

mongoose.connection.on("disconnected", () => { console.log("Disconnected") });

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to Mongodb");
    } catch (err) {
        console.log(err);
    }
};

app.use(cookieParser());
dotenv.config();
app.use(express.json());
app.use(bodyParser.json());

// Setup multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', doctorRoutes);

// Default route
app.get('/', (req, res) => {
    res.send("hello it's running");
});

// Error handling middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something Went Wrong";
    return res.status(errorStatus).json({
        success: false,
        message: errorMessage,
        status: errorStatus,
        stack: err.stack,
    });
});

app.listen(process.env.PORT || port, () => {
    connect();
    console.log("Server started");
});
