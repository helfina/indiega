N2R('documentReady', function ($) {

  nextend.fontsDeferred = $.Deferred();
  if (nextend.fontsLoaded) {
      nextend.fontsDeferred.resolve();
  } else {
      nextend.fontsLoadedActive = function () {
          nextend.fontsLoaded = true;
          nextend.fontsDeferred.resolve();
      };
      var intercalCounter = 0;
      nextend.fontInterval = setInterval(function () {
          if (intercalCounter > 3 || document.documentElement.className.indexOf('wf-active') !==
              -1) {
              nextend.fontsLoadedActive();
              clearInterval(nextend.fontInterval);
          }
          intercalCounter++;
      }, 1000);
  }
});