const HackerNewsAPI = require("./hackernews");
const NewYorkTimesAPI = require("./newyorktimes");

module.exports = {
  hackernews: new HackerNewsAPI(),
  newyorktimes: new NewYorkTimesAPI(),
};
