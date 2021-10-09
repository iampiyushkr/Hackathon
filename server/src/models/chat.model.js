const { model, Schema } = require("mongoose");

const blogSchema = new Schema(
  {
    body: { type: String, required: true },
    id: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Blog = model("blog", blogSchema);

module.exports = Blog;
