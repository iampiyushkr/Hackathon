const { model, Schema } = require("mongoose");

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    body: { type: String, required: true },
    imageUrl: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Blog = model("blog", blogSchema);

module.exports = Blog;
