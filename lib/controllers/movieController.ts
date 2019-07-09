import * as mongoose from "mongoose";
import { MovieSchema } from "../models/movieModel";
import { Request, Response } from "express";

const Movie = mongoose.model("Movie", MovieSchema);

export class MovieController {
  // Post: Add a new movie to DB
  public addNewMovie(req: Request, res: Response) {
    const newMovie = new Movie(req.body);
    req.app.locals.db
      .collection("movies")
      .insertOne({ newMovie }, (err, result) => {
        if (err) {
          res.status(400).send({ error: err });
        }
        res.status(200).send(result);
      });
  }

  // Get all movies
  public getMovies(req: Request, res: Response) {
    Movie.find({}, (err, movie) => {
      if (err) {
        res.send(err);
      }
      res.json(movie);
    });
  }

  // Update a single movie
  public updateMovie(req: Request, res: Response) {
    Movie.findOneAndUpdate(
      { _id: req.params.movieId },
      req.body,
      { new: true },
      (err, movie) => {
        if (err) {
          res.send(err);
        }
        res.json(movie);
      }
    );
  }

  // Delete a single contact
  public deleteMovie(req: Request, res: Response) {
    Movie.remove({ _id: req.params.movieId }, err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted movie!" });
    });
  }

  // View a single movie
  public getMovieWithID(req: Request, res: Response) {
    Movie.findById(req.params.contactId, (err, movie) => {
      if (err) {
        res.send(err);
      }
      res.json(movie);
    });
  }
}
