/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var Queue = function() {
  // this._storage =
  this.storage = [];
  this.pointTarget = -1;
  this.cntData = 0;
};

Queue.prototype.add = function(data) {
  this.storage.unshift(data);
  this.cnt++;
};

Queue.prototype.remove = function() {
  if (this.cnt <= 0) {
    console.log("error");
  } else {
    return this.storage.pop();
    this.cntData--;
  }
};

module.exports = Queue;
