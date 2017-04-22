const pointbreak = require('./pointbreak.js');
const { send } = require('micro');

module.exports = async (req, res) => {
  if (req.url && req.url.length > 1) {
    const index = req.url.substring(1);
    const max = pointbreak.length - 1;
    if (index > max) {
      send(res, 400, `Max value is ${max}`);
    } else {
      res.end(pointbreak[index]);
    }
  } else {
    res.end(
      `<html>Point Break as a service. <p><a href="https://${req.headers.host}/0">https://${req.headers.host}/0</a></html>`
    );
  }
};
