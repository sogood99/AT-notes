const fs = require("fs");
const { argv } = require("process");

function toJson(dirName, toDirName) {
  fs.readdir(dirName, (err, files) => {
    if (err) {
      console.log(err);
      return;
    }
    files.forEach((file) => {
      fs.readFile(dirName + "/" + file, "utf-8", (err, content) => {
        if (err) {
          console.log(err);
          return;
        }
        fs.writeFile(
          (toDirName + "/" + file).replace(/\.[^/.]+$/, "") + ".json",
          JSON.stringify({ tex: content }),
          (err) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log(`Tex File ${dirName + file} was converted to json!`);
          }
        );
      });
    });
  });
}

const argvLen = argv.length;
if (argvLen < 4) {
  console.log("Specify to and from dir");
} else {
  toJson(argv[argvLen - 2], argv[argvLen - 1]);
}
