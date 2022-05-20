import fs from "fs";

fs.writeFileSync("./test.json", JSON.stringify({ foo: "bar" }, null, 2));
