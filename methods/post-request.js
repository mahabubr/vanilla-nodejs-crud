import requestBodyParser from "../utils/requestBodyParser.js";
import crypto from "crypto";
import writeToFile from "../utils/writeToFile.js";

export default (req, res) => {
  console.log(req.url);
  if (req.url === "/movies") {
    try {
      let body = requestBodyParser(req);
      body.id = crypto.randomUUID();
      req.movies.push(body);
      writeToFile(req.movies);
      res.statusCode = 200;
      res.setHeader("content-type", "application/json");
      res.end();
    } catch (error) {
      console.log(error);
      res.statusCode = 400;
      res.setHeader("Content-type", "application/json");
      res.write(
        JSON.stringify({
          name: "Validation Field",
          message: "Request Body is Not Valid",
        })
      );
      res.end();
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-type", "application/json");
    res.write(
      JSON.stringify({ name: "Not Found", message: "Route Not found" })
    );
    res.end();
  }
};
