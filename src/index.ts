import express from "express";
import contactRouter from "./routes/contact/routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
// const PORT = process.env.PORT || 3000;

// ミドルウェア
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ルーティング
app.use("/contact", contactRouter);
