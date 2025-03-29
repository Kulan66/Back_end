import "dotenv/config";
import express from "express";
import connectDB from "./infrastructure/db";



import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import bookingsRouter from "./api/booking";
import hotelsRouter from "./api/hotel";
import globalErrorHandlingMiddleware from "./api/middlewares/global-error-handling-middleware";

const app = express();

app.use(clerkMiddleware());

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/hotels", hotelsRouter);
app.use("/api/bookings", bookingsRouter);

app.use(globalErrorHandlingMiddleware);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));

