export default (req, res) => {
  if (req.url === "/movies/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.write(JSON.stringify(req.movies));
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-type", "application/json");
    res.write(
      JSON.stringify({ title: "Not Found", message: "Route not found" })
    );
    res.end();
  }
};
