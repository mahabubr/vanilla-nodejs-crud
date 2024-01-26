import http from "http";
import getReq from "./methods/get-request.js";
import postReq from "./methods/post-request.js";

import movies from "./data/movies.json" assert { type: "json" };

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  req.movies = movies;
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      //
      break;
    case "DELETE":
      //
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-type", "application/json");
      res.write(
        JSON.stringify({ title: "Not Found", message: "Routes not found" })
      );
      res.end();
  }
});

server.listen(PORT, () => {
  console.log("Server Running on port : ", PORT);
});
