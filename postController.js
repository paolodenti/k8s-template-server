Post = require("./postModel");

exports.index = (_req, res) => {
    Post.get((err, posts) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        res.json(posts);
    });
};

exports.new = (req, res) => {
    const post = new Post(req.body);

    post.save(err => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        res.json(post);
    });
};

exports.view = (req, res) => {
    Post.findById(req.params.post_id, (err, post) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        if (!post) {
            res.sendStatus(404);
            return;
        }
        res.json(post);
    });
};

exports.update = (req, res) => {
    Post.findById(req.params.post_id, (err, post) => {
        if (err) res.send(err);
        post.title = req.body.title ? req.body.title : post.title;
        post.content = req.body.content;

        post.save(err => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            res.json(post);
        });
    });
};

exports.delete = (req, res) => {
    Post.deleteMany(
        {
            _id: req.params.post_id
        },
        (err, _post) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            }
            res.sendStatus(200);
        }
    );
};
