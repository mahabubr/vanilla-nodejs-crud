export default async (req) => {
  return new Promise((resolved, rejected) => {
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        resolved(JSON.parse(body));
      });
    } catch (error) {
      console.log(error);
      rejected(error);
    }
  });
};
