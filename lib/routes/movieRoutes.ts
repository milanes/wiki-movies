import { Request, Response, NextFunction } from "express";
import { MovieController } from "../controllers/movieController";

export class Routes {
  public MovieController: MovieController = new MovieController();

  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfulll!!!!"
      });
    });

    // Create a new Movie
    app.route("/newMovie").post(this.MovieController.addNewMovie);

    // Get all Movies
    app.route("/allMovie").get(this.MovieController.getMovies);

    // Get a specific Movie
    app.route("/Movie/:MovieId").get(this.MovieController.getMovieWithID);

    // Update a specific Movie
    app.route("/Movie/:MovieId").put(this.MovieController.updateMovie);

    // Delete a specific Movie
    app.route("/Movie/:MovieId").delete(this.MovieController.deleteMovie);
  }
}
