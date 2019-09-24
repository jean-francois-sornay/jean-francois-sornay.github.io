
(function() {
  var $animate, $container, $message, $paragraph, MESSAGES, MESSAGESTWO, MESSAGESTHREE, animate,animated, animateded, initialise, scramble;

  MESSAGES = [];

  MESSAGES.push({
    delay: 2500,
    text: "Incoming transmission ..."
  });

  MESSAGES.push({
    delay: 3500,
    text: "Programmer permet de penser à la réflexion "
  });

  MESSAGES.push({
    delay: 4500,
    text: "Tandis que, pendant le débogage,"
  });

  MESSAGES.push({
    delay: 5800,
    text: "vous apprenez à apprendre  ! "
  });

  MESSAGES.push({
    delay: 7000,
    text: "... ！(@＾▽＾@）! ..."
  });


  MESSAGESTHREE = [];

  MESSAGESTHREE.push({
    delay: 1200,
    text: "Incoming transmission ..."
  });

  MESSAGESTHREE.push({
    delay: 2800,
    text: "  ERROR 404  "
  });

  MESSAGESTHREE.push({
    delay: 3800,
    text: "Transmission incorrecte "
  });

  MESSAGESTHREE.push({
    delay: 5200,
    text: "Redirection en cours "
  });

  MESSAGESTHREE.push({
    delay: 6200,
    text: " Vers [ Qui suis-je ? ]"
  });

  $container = $("#container");

  $message = $("#message");



  $paragraph = null;

  scramble = function(element, text, options) {
    var $element, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts, glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches, i, j, letter, object, order, output, parameters, ref, settings, shuffle, target, textCharacters, textLength, wrap;
    // Default properties.
    defaults = {
      probability: 0.2,
      glitches: '-|/\\',
      blank: '',
      duration: text.length * 80,
      ease: 'easeInOutQuad',
      delay: 0.0
    };
    // Convert the element to a jQuery object and build the settings object.
    $element = $(element);
    settings = $.extend(defaults, options);
    // Convenience methods.
    shuffle = function() {
      if (Math.random() < 0.5) {
        return 1;
      } else {
        return -1;
      }
    };
    wrap = function(text, classes) {
      return `<span class="${classes}">${text}</span>`;
    };
    // Glitch values.
    glitchText = settings.glitches;
    glitchCharacters = glitchText.split('');
    glitchLength = glitchCharacters.length;
    glitchProbability = settings.probability;
    glitches = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = glitchCharacters.length; j < len; j++) {
        letter = glitchCharacters[j];
        results.push(wrap(letter, 'glitch'));
      }
      return results;
    })();
    // Ghost values.
    ghostText = $element.text();
    ghostCharacters = ghostText.split('');
    ghostLength = ghostCharacters.length;
    ghosts = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = ghostCharacters.length; j < len; j++) {
        letter = ghostCharacters[j];
        results.push(wrap(letter, 'ghost'));
      }
      return results;
    })();
    // Text values.
    textCharacters = text.split('');
    textLength = textCharacters.length;
    // Order and output arrays.
    order = (function() {
      var results = [];
      for (var j = 0; 0 <= textLength ? j < textLength : j > textLength; 0 <= textLength ? j++ : j--){ results.push(j); }
      return results;
    }).apply(this).sort(this.shuffle);
    output = [];
// Build the output array.
    for (i = j = 0, ref = textLength; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
      glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
      glitchCharacter = glitches[glitchIndex];
      ghostCharacter = ghosts[i] || settings.blank;
      addGlitch = Math.random() < glitchProbability;
      character = addGlitch ? glitchCharacter : ghostCharacter;
      output.push(character);
    }
    // Animate the text.
    object = {
      value: 0
    };
    target = {
      value: 1
    };
    parameters = {
      duration: settings.duration,
      ease: settings.ease,
      step: function() {
        var index, k, progress, ref1;
        progress = Math.floor(object.value * (textLength - 1));
        for (i = k = 0, ref1 = progress; (0 <= ref1 ? k <= ref1 : k >= ref1); i = 0 <= ref1 ? ++k : --k) {
          index = order[i];
          output[index] = textCharacters[index];
        }
        return $element.html(output.join(''));
      },
      complete: function() {
        return $element.html(text);
      }
    };
    // Animate the text.
    return $(object).delay(settings.delay).animate(target, parameters);
  };

  animate = function() {
    var data, element, index, j, len, options;

      for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
        data = MESSAGES[index];
        element = $paragraph.get(index);
        element.innerText = '';
        options = {
          delay: data.delay
        };
      scramble(element, data.text, options);
    }
    setTimeout(function() { $message.append("<a id=\"animate\" href=\"#\">Qui-est là ?</a>");
        $animate = $("#animate");
        $animate.click(animateded);}, 9000);
  };

 testing = function(){ var $test = $("#animate");
 $test.html("");};

  animateded = function() {
    var data, element, index, j, len, options;
    testing();

      for (index = j = 0, len = MESSAGESTHREE.length; j < len; index = ++j) {
        data = MESSAGESTHREE[index];
        element = $paragraph.get(index);
        element.innerText = '';
        options = {
          delay: data.delay
        };
      scramble(element, data.text, options);
    }
    setTimeout(function() { window.location.replace("./QuiSuisJe.html") }, 9500);
  };

  initialise = function() {
    var index, j, len, text;
    for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {
      text = MESSAGES[index];
      $message.append("<p>");
    }
    $paragraph = $container.find("p");
    animate();
  };

  initialise();

}).call(this);
