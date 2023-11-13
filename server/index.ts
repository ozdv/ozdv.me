const express = require("express");
const cors = require("cors");
const port = 3200;
const app = express();
app.use(cors());

app.get("api/test", (req: any, res: any) => {
  res.send({ data: "Hello from server" });
  console.log("apitest");
});

app.get("/api/home", (req: any, res: any) => {
  res.json({ message: "Hello world!" });
  console.log("apihome");
});

app.listen(port, () => {
  console.log(`Sever running on ${port}`);
});
