	var rows;
	var cols;

	var boardColors = []

;(function() {
    function play(e) {
    	e.preventDefault();
    	rows = $('#rows').val();
    	cols = $('#cols').val();

    	$('#submit').detach();

    	alert(rows*cols);

    	for (var i=0; i<rows; i++) 
    	{
    		var curTileRow = $('<div class="tile-row"></div>');
	        $('#tile-wrapper').append(curTileRow);

	        boardColors[i] = [];

    		for (var j=0; j<cols; j++)
    		{
    			var curTileCol = $('<div class="tile"></div>');
    			setColor(i, j, 'blue');	
    		}

    		getTile(i, j).click((function(r, c) {
            return function(e) {
              move(e, r, c);
            }
          })(i, j));

    	}

    }

    $(document).ready(function() {
      $('#submit').click(play);
    });
})();