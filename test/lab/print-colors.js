"use strict";

var colors = require("colors/safe");

[
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "gray",
  "grey",
].forEach(function(color) {
  console.log(colors[color]("This is: %s", color));
});

console.log("=========================================================");

[
  "reset",
  "bold",
  "dim",
  "italic",
  "underline",
  "inverse",
  "hidden",
  "strikethrough"
].forEach(function(style) {
  console.log(colors[style]("This is: %s", style));
});

console.log("=========================================================");

console.log(colors.reset("Hello %s, I am IT"), colors.bold("world"));
