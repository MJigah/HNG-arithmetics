const express = require("express");
const cors = require("cors");
require("dotenv").config();
const arithRoutes = require("./routes/arithmeticRoutes");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const app = express();
const PORT = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Auth API",
      version: "1.0.0",
      description: "Simple Calculation API",
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(
    cors({
      origin: "*",
    })
  );
  app.use(express.json());
app.use("/api", arithRoutes);

app.get("/favicon.ico", function (req, res) {
  res.status(204);
  res.end();
});

app.get("/", (req, res) => {
  res.json(getData);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
