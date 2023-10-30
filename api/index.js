// "type": "module", this is added to package.json to use module using import instead of require

import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
