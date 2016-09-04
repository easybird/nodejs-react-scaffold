/* eslint-disable */

module.exports = function () {
  console.log("Start transpiling back-end...");
  require("babel-register")({
    ignore: [/node_modules/, /server\/public\/javascripts/]
  });
};
