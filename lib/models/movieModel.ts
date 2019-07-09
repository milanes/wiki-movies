import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

// Models for create a movie
export const MovieSchema = new Schema({
  movieTitle: {
    type: String,
    required: "Enter a movie Title"
  },
  year: {
    type: Number
  },
  stars: {
    type: String
  },
  likes: {
    type: Number
  },
  dislike: {
    type: Number
  }
});
