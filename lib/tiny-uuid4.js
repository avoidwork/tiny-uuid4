"use strict";

/**
 * Tiny UUID version 4 for Client and Server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2015
 * @license BSD-3-Clause
 * @link http://avoidwork.github.io/tiny-uuid4
 * @version 1.0.1
 */
(function (global) {

  var r = [8, 9, "a", "b"];

  function s() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }

  function uuid() {
    return s() + s() + "-" + s() + "-4" + s().substr(0, 3) + "-" + r[Math.floor(Math.random() * 4)] + s().substr(0, 3) + "-" + s() + s() + s();
  }

  uuid.version = "1.0.1";

  // Node, AMD & window supported
  if (typeof exports !== "undefined") {
    module.exports = uuid;
  } else if (typeof define === "function" && define.amd) {
    define(function () {
      return uuid;
    });
  } else {
    global.uuid = uuid;
  }
})(typeof window !== "undefined" ? window : global);
