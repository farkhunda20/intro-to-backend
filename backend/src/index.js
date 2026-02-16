import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

import app from "./app.js";
import connectDB from "./config/database.js";

const startServer = async () => {
  try {
    await connectDB();
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`server running on port: ${process.env.PORT} `);
    });
  } catch (error) {
    console.log("MongoDB connection failed!!", error);
  }
};

startServer();
