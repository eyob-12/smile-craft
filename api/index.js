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

dotenv.config();

const allowedOrigins = [
    'http://localhost:3000',
    'https://smilecraft.vercel.app/' // Replace with your actual Vercel URL
];

const app = express();
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps, curl, etc)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true, // Allow credentials (cookies)
}));

const port = 4001;

mongoose.connection.on("disconnected", () => { console.log("Disconnected") });

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 5000,
            });
        console.log("Connected to Mongodb");
    } catch (err) {
        console.log(err);
    }
};

app.use(cookieParser());
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
