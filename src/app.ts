import express from "express";
import notFoundMiddleware from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";
// import dbConnect from "./db/connect";
import router from "./routes/main";
const app = express();

// middleware
app.use(express.static("./src/public"));
app.use(express.json());
app.use("/api/v1", router);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = () => {
  try {
    // await dbConnect();
    console.log("CONNECTED TO THE DB...");
    app.listen(port, () => {
      console.log(`Server is listening on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

void start();
