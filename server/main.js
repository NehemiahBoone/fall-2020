import express from "express";
import DbContext from "./db/DbConfig";
import Startup from "./Startup";

//create server
const app = express();
const port = process.env.PORT || 3000;

Startup.ConfigureGlobalMiddleware(app);
Startup.ConfigureRoutes(app);

//Connect to AtlasDB
DbContext.connect();

//Start Server
app.listen(port, () => {
  console.log("Server running on port:", port);
});