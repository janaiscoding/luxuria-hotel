import mongoose from "mongoose";
const Schema = mongoose.Schema;

const templateSchema = new Schema(
  {
    example: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", templateSchema);
