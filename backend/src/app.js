import express from "express";
const app = express(); //create an express app

//routes import
import userRouter from "./routes/user.route.js";
// import postRouter from "./routes/post.route.js";

app.use(express.json());
//routes declaration

app.use("/api/v1/users", userRouter);

//example route : http://localhost:4000/api/v1/users/register
export default app;

//every request which come to our backend server first comes to app.js
//and then it sends all the requests to the routes file, it checks the address, ulr path and method
// and when it handles all the paths it sends the request to specific controllers and controllers do they actual task like fetching, saving or deleitng whatever the user wants to do
