import mongoose from "mongoose";

const techSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Tech = mongoose.model("Tech", techSchema);

export default Tech;
