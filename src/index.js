const pointbreak = require('./pointbreak.js');
const { send } = require('micro');
const cors = require('micro-cors')();

module.exports = cors((req, res) => {
  const url = req.url;
  if (url && url.length > 1) {
    const index = url.substring(1);
    const max = pointbreak.length - 1;
    if (index > max) {
      send(res, 400, `Max value is ${max}`);
    } else {
      res.end(pointbreak[index]);
    }
  } else {
    const host = req.headers.host;
    res.end(`<html>Point Break as a service. <p><a href="https://${host}/0">https://${host}/0</a></html>`);
  }
});
