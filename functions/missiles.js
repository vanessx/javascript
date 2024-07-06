let launchMissiles = function () {
  misseleSystem.launch("now");
};

if (safeMode) {
  launchMissiles = function () {
    /* do nothing */
  };
}
