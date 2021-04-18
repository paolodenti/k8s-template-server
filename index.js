const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const apiRoutes = require("./api-routes");
const defaultRoute = require("./default-route");

const app = express();

const port = process.env.PORT || 8080;
const mongoHost = process.env.MONGO_HOST || "localhost";
const mongoDb = process.env.MONGO_DB || "test";
const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;

const main = async () => {
    return new Promise((_resolve, reject) => {
        app.use(express.json());

        const dbURI =
            mongoUsername || mongoPassword
                ? `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}/${mongoDb}?authSource=admin`
                : `mongodb://${mongoHost}/${mongoDb}`;

        mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.on("connected", function () {
            console.log("Mongoose default connection open");
        });

        mongoose.connection.on("error", function (err) {
            console.log("Mongoose default connection error: " + err);
            return reject(new Error("Error connecting to db"));
        });

        // When the connection is disconnected
        mongoose.connection.on("disconnected", function () {
            console.log("Mongoose default connection disconnected");
        });

        if (process.env.CORS_ON === "true") {
            // exposed directly as rest api or development mode
            app.use(cors());
        }

        app.use("/api", apiRoutes);
        app.use("*", defaultRoute);

        app.listen(port, () => {
            console.log("Running on port " + port);
        });
    });
};

main()
    .then(() => {
        console.log("stopping app");
    })
    .catch(err => {
        console.log(err.message);
    });
