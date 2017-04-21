const pointbreak = require('./pointbreak.js');

console.log(``, pointbreak.length);

module.exports = (req, res) => {
  console.log(``, req.headers.host);
  if (req.url && req.url.length > 1) {
    const index = req.url.substring(1);
    if (index > pointbreak.length - 1) {
      res.end('The End');
    } else {
      res.end(pointbreak[index]);
    }
  } else {
    res.end(`Point Break as a service. ${req.headers.host}/0`);
  }
};
