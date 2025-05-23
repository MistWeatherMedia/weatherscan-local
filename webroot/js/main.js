var mainAspect = [4, 3];

function providerConfigUpdateMain(config) {
  console.log(config);
  mainAspect = config.appearance.aspectRatio;
}

$(function () {
  document.getElementById("problem").style.display = "block";
  document.getElementById("WScanWindow").style.display = "none";
  let $main = $("#WScanWindow"),
    $window = $(window),
    mainHeight = $main.outerHeight(),
    mainWidth = $main.outerWidth(),
    resizeTimer;

  if (mainAspect == [4, 3]) {
    $("body").css("transform", "scale(88.88%, 100%)");
  }

  //calls rescale when window resizes
  $(window).resize(function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(scaleWindow, 100);
  });

  function scaleWindow() {
    let scale, windowAspect, mainAspectConvert;

    windowAspect = $window.width() / $window.height();
    mainAspectConvert = mainAspect[0] / mainAspect[1];
    if (windowAspect >= mainAspectConvert) {
      scale = $window.height() / mainHeight;
    } else {
      scale = $window.width() / mainWidth;
    }

    $main.css({
      transform: "translate(-50%, -50%) " + "scale(" + scale + ")",
    });
  }
  scaleWindow(); // init
});
