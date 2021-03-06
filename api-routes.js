const router = require("express").Router();

const postController = require("./postController");

router.route("/posts").get(postController.index).post(postController.new);

router
    .route("/posts/:post_id")
    .get(postController.view)
    .patch(postController.update)
    .put(postController.update)
    .delete(postController.delete);

module.exports = router;
