import { CountUp } from "./countUpScript.min.js";

function isElementInViewport(el) {
  //special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener(
  "load",
  function() {
    console.log("vars instantiated");
    var countUpfintechs = new CountUp("numfintechs", 975, {
      duration: 2
    });
    var countUpmarketcp = new CountUp("fintechmktcp", 4.7, {
      duration: 2,
      decimalPlaces: 1,
      prefix: "$",
      suffix: " T"
    });
    var countUpgrowth = new CountUp("fintechgrowth", 50, {
      duration: 2,
      decimalPlaces: 0,
      suffix: "%"
    });
    var countUpmembers = new CountUp("numMembers", 230, {
      duration: 2
    });
    var countUppartners = new CountUp("numPartners", 23, {
      duration: 2
    });
    $(function() {
      var industryIsStarted = false;
      var missionIsStarted = false;
      var $countUpScrolledIndustry = $("#industry-counter-holder")[0];
      var $countUpScrolledMission = $("#mission-stats-holder")[0];
      if (isElementInViewport($countUpScrolledIndustry)) {
        countUpfintechs.start();
        countUpmarketcp.start();
        countUpgrowth.start();
        industryIsStarted = true;
      }
      if (isElementInViewport($countUpScrolledMission)) {
        countUpmembers.start();
        countUppartners.start();
        missionIsStarted = true;
      }

      $(window).on("resize scroll", function() {
        if (
          isElementInViewport($countUpScrolledIndustry) &&
          !industryIsStarted
        ) {
          countUpfintechs.start();
          countUpmarketcp.start();
          countUpgrowth.start();
          industryIsStarted = true;
        }
        if (isElementInViewport($countUpScrolledMission) && !missionIsStarted) {
          countUpmembers.start();
          countUppartners.start();
          missionIsStarted = true;
        }
      });
    });
  },
  false
);
