import express, { Express } from "express";
import configExpress from "./config/express";
import routes from "./routes";
import { formData } from "./middlewares/formData";

const app: Express = express();

const port = 8080;

//config
configExpress(app);
app.post('/test-formdata', formData, (req, res)=> {
  console.log('this be da new body:', req);
  res.status(200).json({...req.body})
})

// routes config
routes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
