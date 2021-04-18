const router = require("express").Router();

const res404 = (_req, res) => {
    res.sendStatus(404);
};

router.route("*").get(res404).post(res404).patch(res404).put(res404).delete(res404);

module.exports = router;
