import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/movieRoutes";
import * as mongoose from "mongoose";

class App {
  public app: express.Application = express();
  public routePrv: Routes = new Routes();
  //public mongoUrl: string = "mongodb://localhost:3000";

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.routePrv.routes(this.app);
  }

  private mongoSetup(): void {
    mongoose
      .connect("mongodb://root:example@localhost:27017/wiki-movies", {
        useNewUrlParser: true,
        useMongoClient: true
      })
      .then(() => {
        console.log(
          "La conexión a la base de datos wiki-movies se ha realizado correctamente"
        );
      });
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // serving static files
    this.app.use(express.static("public"));
  }
}

export default new App().app;
