var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

const USERNAME = "audinrma";
const PASSWORD = "z6!nNShL9j9u";
const ADDRESS = "154.0.174.142";
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
