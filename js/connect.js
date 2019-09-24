$(document).ready(function() {
        "use strict";

        // UTILITY
        function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
        }

		function movePage(page) {
			document.location.href=page;
		}
        // END UTILITY

        // COMMANDS
        function clear() {
                terminal.text("");
        }

        function help() {
				if (logged) {
					terminal.append("COMMANDS: clear, help, connect [password], echo, fortune, whoIam, pvt\n");
				}else{
					terminal.append("COMMANDS: clear, help, connect [password], echo, fortune\n");
				}
        }

		function whoIam() {
				if (logged) {
					terminal.append("Redirecting in 3 seconds\n");
					setTimeout(movePage, 3000, "./brainfuck.html");
				}else{
					terminal.append(hintMessage + "\n");
				}
        }

		function pvt() {
				if (logged) {
					terminal.append("WIP\n");
				}else{
					terminal.append(hintMessage + "\n");
				}
        }


        function echo(args) {
                var str = args.join(" ");
                terminal.append(str + "\n");
        }

		function connect(args) {
                var str = args.join(" ");
				var pass = "toto.txt";
				if (str === pass) {
					logged = true;
          setTimeout(function() { var complet = '<!DOCTYPE html> <html lang="fr" dir="ltr"> <head> <link rel="icon" type="image/png" href="./image/icon.png" /> <meta charset="utf-8"> <title>J-François Sornay</title> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" type="text/css" href="./css/preLoader.css"> <link rel="stylesheet" type="text/css" href="./css/style.css"> <link rel="stylesheet" type="text/css" href="./css/connect.css"> <link rel="stylesheet" href="https://d1azc1qln24ryf.cloudfront.net/114779/Socicon/style-cf.css?9ukd8d"> <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <link rel="stylesheet" type="text/css" href="css/component.css" /> <link rel="stylesheet" type="text/css" href="./css/test.css"> <script type="text/javascript" src="js/classie.js"></script> <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script> <script type="text/javascript" src="./js/initscript.js"></script> <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> <style>@media print {#ghostery-purple-box {display:none !important}}</style> </head> <body data-spy="scroll" data-target=".nav-wrapper" style> <div class="page"> <header class="site-header"> <nav class="nav-wraper transparent" data-spy="affix" data-offset-bottom="0"> <div class="container"> <a href="./index.html" class="brand-logo hide-on-med-and-down">Jean-François Sornay</a> <a href="./index.html" class="brand-logo hide-on-large-only">JF Sornay</a> </div> <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a> <ul class="right hide-on-med-and-down"> <li> <div class="flip-card connection"> <div class="flip-card-inner"> <div class="flip-card-front"> <i class="material-icons">vpn_key</i> </div> <div class="flip-card-back"> <a href="./connection.html">Connection</a> </div> </div> </div> </li> <li> <div class="flip-card competences"> <div class="flip-card-inner"> <div class="flip-card-front"> <i class="material-icons">developer_mode</i> </div> <div class="flip-card-back"> <a class="" href="./projets.html">Compétences</a> </div> </div> </div> </li> <li> <div class="flip-card contact"> <div class="flip-card-inner"> <div class="flip-card-front"> <i class="material-icons">contacts</i> </div> <div class="flip-card-back"> <a class="" href="./contact.html">Contact</a> </div> </div> </div> </li> <li> <div class="flip-card about-me"> <div class="flip-card-inner"> <div class="flip-card-front"> <i class="material-icons">person</i> </div> <div class="flip-card-back"> <a class="" href="./QuiSuisJe.html">Qui suis-je ?</a> </div> </div> </div> </li> </ul> </nav> <ul class="sidenav white" id="mobile-demo" style="transform: translateX(-105%);z-index:3;color:black!important;"> <li><a class=" lienmenu" href="./connection.html">Connection</a></li> <li><a class=" lienmenu" href="./projets.html">Compétences</a></li> <li><a class=" lienmenu" href="./contact.html">Contact</a></li> <li><a class=" lienmenu" href="./QuiSuisJe.html">Qui suis-je ?</a></li> </ul> </header> <div id="containered" class="containered"> <p style="top: 50%;left: 50%; transform: translate(-50%,-50%);">TEST</p> <div id="cp_widget_81fd3319-ca8d-495a-b0b3-b2fa67770222">...</div><script type="text/javascript"> var cpo = []; cpo["_object"] ="cp_widget_81fd3319-ca8d-495a-b0b3-b2fa67770222"; cpo["_fid"] = "AgHA5iuQYUYT"; var _cpmp = _cpmp || []; _cpmp.push(cpo); (function() { var cp = document.createElement("script"); cp.type = "text/javascript"; cp.async = true; cp.src = "//www.cincopa.com/media-platform/runtime/libasync.js"; var c = document.getElementsByTagName("script")[0]; c.parentNode.insertBefore(cp, c); })(); </script> </div> <footer class="site-footer"> <p> Copyright ©2019 Jean-François Sornay </p> <a href="https://www.linkedin.com/in/jean-fran%C3%A7ois-sornay-82757716b/" class="pure-button button-socicon"> <span class="socicon-linkedin"></span> </a> <a href="https://github.com/jean-francois-sornay" class="pure-button button-socicon"> <span class="socicon-github"></span> </a> <a href="https://www.facebook.com/jf.sornay" class="pure-button button-socicon"> <span class="socicon-facebook"></span> </a> </footer> <div class="sidenav-overlay" style="display: none; opacity: 0;"></div> <div class="drag-target"></div> </body> </html>';
          javascript:document.open('text/html');
          document.write(complet);
          document.close();}, 3000);
					terminal.append("Connecting...\nRedirecting in 3 seconds\n");
				} else {
					terminal.append("Bad Password\n")
				}
        }

        function fortune() {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'https://cdn.rawgit.com/bmc/fortunes/master/fortunes', false);
                xhr.send(null);

                if (xhr.status === 200) {
                        var fortunes = xhr.responseText.split("%");
                        var fortune = fortunes[getRandomInt(0, fortunes.length)].trim();
                        terminal.append(fortune + "\n");
                }
        }
        // END COMMANDS

        var title = $(".title");
        var terminal = $(".terminal");
        var prompt = "➜";
        var path = "~";

        var commandHistory = [];
        var historyIndex = 0;

        var command = "";
        var commands = [{
                        "name": "clear",
                        "function": clear
                },/* {
                        "name": "help",
                        "function": help
                }, {
                        "name": "fortune",
                        "function": fortune
                }, */{
                        "name": "connect",
                        "function": connect
                }, /*{
                        "name": "whoIam",
                        "function": whoIam
                }, {
                        "name": "pvt",
                        "function": pvt
                }, */{
                        "name": "echo",
                        "function": echo
                }];

        var hintMessage = "Pour vous connecter faites : connect [motDePasse]";

function processCommand() {
        var isValid = false;

        // Create args list by splitting the command
        // by space characters and then shift off the
        // actual command.

        var args = command.split(" ");
        var cmd = args[0];
        args.shift();

        // Iterate through the available commands to find a match.
        // Then call that command and pass in any arguments.
        for (var i = 0; i < commands.length; i++) {
                if (cmd === commands[i].name) {
                        commands[i].function(args);
                        isValid = true;
                        break;
                }
        }

        // No match was found...
        if (!isValid) {
                terminal.append("zsh: command not found: " + command + "\n");
        }

        // Add to command history and clean up.
        commandHistory.push(command);
        historyIndex = commandHistory.length;
        command = "";
}

function displayPrompt() {
        terminal.append("<span class=\"prompt\">" + prompt + "</span> ");
        terminal.append("<span class=\"path\">" + path + "</span> ");
}

// Delete n number of characters from the end of our output
function erase(n) {
        command = command.slice(0, -n);
        terminal.html(terminal.html().slice(0, -n));
}

function clearCommand() {
        if (command.length > 0) {
                erase(command.length);
        }
}

function appendCommand(str) {
        terminal.append(str);
        command += str;
}

/*
    //  Keypress doesn't catch special keys,
    //  so we catch the backspace here and
    //  prevent it from navigating to the previous
    //  page. We also handle arrow keys for command history.
    */

$(document).keydown(function(e) {
        e = e || window.event;
        var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

        // BACKSPACE
        if (keyCode === 8 && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
                e.preventDefault();
                if (command !== "") {
                        erase(1);
                }
        }

        // UP or DOWN
        if (keyCode === 38 || keyCode === 40) {
                // Move up or down the history
                if (keyCode === 38) {
                        // UP
                        historyIndex--;
                        if (historyIndex < 0) {
                                historyIndex++;
                        }
                } else if (keyCode === 40) {
                        // DOWN
                        historyIndex++;
                        if (historyIndex > commandHistory.length - 1) {
                                historyIndex--;
                        }
                }

                // Get command
                var cmd = commandHistory[historyIndex];
                if (cmd !== undefined) {
                        clearCommand();
                        appendCommand(cmd);
                }
        }
});

$(document).keypress(function(e) {
        // Make sure we get the right event
        e = e || window.event;
        var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

        // Which key was pressed?
        switch (keyCode) {
                // ENTER
                case 13:
                        {
                                terminal.append("\n");

                                processCommand();
                                displayPrompt();
                                break;
                        }
                default:
                        {
                                appendCommand(String.fromCharCode(keyCode));
                        }
        }
});

// Set the window title
title.text("sornayj@terminal: ~");

//global var
var logged = false;

// Get the date for our fake last-login
var date = new Date().toString(); date = date.substr(0, date.indexOf("GMT") - 1);

// Display last-login and promt
terminal.append("Last login: " + date + "\n" + hintMessage + "\n"); displayPrompt();
});
