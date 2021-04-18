const express = require("express");
const mongoose = require("mongoose");

const apiRoutes = require("./api-routes");
const defaultRoute = require("./default-route");

const app = express();

const port = process.env.PORT || 8080;
const mongoHost = process.env.MONGO_HOST || "localhost";
const mongoDb = process.env.MONGO_DB || "test";

const main = async () => {
    return new Promise((_resolve, reject) => {
        app.use(express.json());

        const dbURI = `mongodb://${mongoHost}/${mongoDb}`;

        mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.on("connected", function () {
            console.log("Mongoose default connection open to " + dbURI);
        });

        // If the connection throws an error
        mongoose.connection.on("error", function (err) {
            console.log("Mongoose default connection error: " + err);
            return reject(new Error("Error connecting to db"));
        });

        // When the connection is disconnected
        mongoose.connection.on("disconnected", function () {
            console.log("Mongoose default connection disconnected");
        });

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
