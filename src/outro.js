// Node, AMD & window supported
if (typeof exports !== "undefined") {
	module.exports = uuid;
} else if (typeof define === "function" && define.amd) {
	define(function () {
		return uuid;
	});
} else {
	global.uuid = uuid;
}}(typeof window !== "undefined" ? window : global));
