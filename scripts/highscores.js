LunarLander.screens['high-scores'] = (function(game) {
    'use strict';
    
    function initialize() {
        document.getElementById('id-high-scores-back').addEventListener(
            'click',
            function() { game.showScreen('main-menu'); });
    }

    function displayScores() {
		var highScores = LunarLander.HighScores.get(),
			highScoresHTML = document.getElementById('high-scores-list');

		//
		// Clear whatever was already in the display
		highScoresHTML.innerHTML = '';
		//
		// Grab the previously saved high scores and get them displayed
		highScores.forEach(function (score) {
			highScoresHTML.innerHTML += (score + '<br/>');
		});
	}
    
    function run() {
        //
        // I know this is empty, there isn't anything to do.
        displayScores();
    }
    
    return {
        initialize : initialize,
        run : run
    };
}(LunarLander.game));
