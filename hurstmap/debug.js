const urlParams = new URLSearchParams(window.location.search);

const DEBUG = urlParams.get("debug") === "1";

const MAP = urlParams.get("map");

/*
 * outside=1 : allows display of location when outside map
 * debug=1 : additional debug information
 * map=cumnor3 : map of cumnor rather than hurst
 */
