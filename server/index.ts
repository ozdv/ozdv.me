import cors = require("cors");
import express = require("express");
// Could chck out:
// https://blog.logrocket.com/extend-express-request-object-typescript/

//   Currently trying out this one:
// https://plainenglish.io/blog/typed-express-request-and-response-with-typescript

export interface TypedRequestBody<T> extends express.Request {
  body: T;
}

const port = 3200;
const app: express.Application = express();

app.use(cors());

app.get("api/test", (req: express.Request, res: express.Response) => {
  res.send({ data: "Hello from server" });
  console.log("apitest");
});

app.listen(port, () => {
  console.log(`Sever running on ${port}`);
});

app.post(
  "/login",
  (
    req: TypedRequestBody<{ username: string; password: string }>,
    res: express.Response
  ) => {
    const success = req.body.username === "foo" && req.body.password === "bar";

    res.status(200).json({ Success: success });
  }
);
