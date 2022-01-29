const ftp = require("basic-ftp");
const config = require("./config");

const { host, remoteDirectory, user, password } = config;
app();

async function app() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    await client.access({
      host,
      user,
      password,
      secure: true,
    });
    console.log(await client.list());
    await client.ensureDir(remoteDirectory);
    await client.clearWorkingDir();
    await client.uploadFromDir("deploy");
  } catch (err) {
    console.log(err);
  }
  client.close();
}
