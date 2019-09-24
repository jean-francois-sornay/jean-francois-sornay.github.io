/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
particlesJS(
  "particles-js",
  {"particles":
    {"number":
      {"value":100,
      "density":
        {"enable":false,"value_area":0}
      },
      "color":
        {"value":"#FFFFFF"},
        "shape":
          {"type":"circle"},
          "opacity":{"value":1,"random":true,
          "anim":{"enable":false,"speed":5,"opacity_min":0.5,"sync":false}},
          "size":{"value":3,"random":true,
          "anim":{"enable":true,"speed":10,"size_min":0.5,"sync":false}},
          "move":{"enable":true,"speed":1,"direction":"none","random":false,
          "straight":false}},
          "interactivity":{"detect_on":"none",
          "events":{"resize":false}},"retina_detect":false});
