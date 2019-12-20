var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

// const USERNAME = "rasbrujn";
// const PASSWORD = "lm!x]ljJ5W-i";
// const ADDRESS = "154.0.172.157";
// const PORT = 21;

const USERNAME = "";
const PASSWORD = "";
const ADDRESS = "";
const PORT = 21;

var config = {
  user: USERNAME,
  password: PASSWORD,
  host: ADDRESS,
  port: PORT,
  localRoot: __dirname + "/build",
  remoteRoot: "/public_html/",
  include: ["*", "**/*"],
  exclude: [
    "dist/**/*.map",
    "node_modules/**",
    "node_modules/**/.*",
    ".git/**"
  ],
  deleteRemote: true,
  forcePasv: true
};

console.log(`Deploying to ${ADDRESS}:${PORT}`);
console.log(`Using username ${USERNAME} and password ${PASSWORD}`);
console.log("...");

ftpDeploy.on("uploading", function(data) {
  console.log(
    `------ ${data.transferredFileCount} of ${data.totalFilesCount} files transferred -------`
  );
  console.log("Current file: ", data.filename);
});

ftpDeploy
  .deploy(config)
  .then(res => {
    console.log("Deployment successful");
    console.log(res);
  })
  .catch(err => console.log(err));
