const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

const Post = (module.exports = mongoose.model("post", postSchema));
module.exports.get = (callback, limit) => {
    Post.find(callback).limit(limit);
};
