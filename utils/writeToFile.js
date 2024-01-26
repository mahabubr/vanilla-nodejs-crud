import fs from "fs";
import path from "path";

export default (data) => {
  console.log("The data will be written", data);
  try {
    fs.writeFileSync(
      path.join(process.cwd(), "data", "movies.json"),
      JSON.stringify(data, null, 2),
      "utf-8"
    );
  } catch (error) {
    console.log(error);
  }
};
