const express = require("express");

const app = express();

// http://localhost:5001/server
app.use("/apples", express.static("apples"));
app.use("/oranges", express.static("oranges"));

app.listen(5001, () => {
    console.log("Server is listening on port 5001");
});