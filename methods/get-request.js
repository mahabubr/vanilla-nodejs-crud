export default (req, res) => {
  const baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  const id = req.url.split("/")[2];
  const regexV4 = new RegExp(
    /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  );

  if (req.url === "/movies/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.write(JSON.stringify(req.movies));
    res.end();
  } else if (!regexV4.test(id)) {
    res.setHeader("Content-type", "application/json");
    res.write(
      JSON.stringify({ title: "Validation Failed", message: "UUID Not valid" })
    );
    res.end();
  } else if (baseURL === "/movies/" && regexV4.test(id)) {
    res.setHeader("Content-type", "application/json");
    const filterMovies = req.movies.filter((movie) => movie.id === id);

    if (filterMovies.length > 0) {
      res.statusCode = 200;
      res.write(JSON.stringify(filterMovies));
      res.end();
    } else {
      res.statusCode = 400;
      res.write(
        JSON.stringify({ title: "Not found", message: "Movies not found" })
      );
      res.end();
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-type", "application/json");
    res.write(
      JSON.stringify({ title: "Not Found", message: "Route not found" })
    );
    res.end();
  }
};
