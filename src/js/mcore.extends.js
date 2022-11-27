(function (window, undefined) {
  var thisFileName = "mcore.extends.js",
    importFiles = ["jquery.min.js"];

  M.ScriptLoader.writeScript(
    importFiles,
    M.ScriptLoader.scriptPath(thisFileName)
  );
})(window);
