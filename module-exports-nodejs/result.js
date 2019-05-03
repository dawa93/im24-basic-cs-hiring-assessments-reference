// TODO: import your variables here to give 'hello world !' as an output
var hello = require("./hello");
var worldandBang = require("./world");
var world = worldandBang.world;
var bang = worldandBang.bang;

var result = hello + " " + world + " " + bang;

//
// TODO: export your result so that test can run
module.exports = result;
