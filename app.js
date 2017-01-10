var questions = [{
	question: 'Who is the Panthers\' all time rushing touchdown leader?',
	answers: ['Deangelo Williams', 'Cam Newton', 'Jonathan Stewart', 'Tim Biakabutuka'],
	correct: 'Cam Newton'
}, {
	question: 'Who is the Panthers\' all time receiving yards leader?',
	answers: ['Muhsin Muhammad', 'Greg Olsen', 'Steve Smith', 'Wesley Walls'],
	correct: 'Steve Smith'
}, {
	question: 'What former Panther wore #2 when Cam Newton was drafted, causing him to take #1?',
	answers: ['Matt Moore', 'Jimmy Clausen', 'David Carr', 'Josh McCown'],
	correct: 'Jimmy Clausen'
}, {
	question: 'Where did the Panthers play during their first season?',
	answers: ['UNC Charlotte', 'Clemson University', 'University of South Carolina', 'Wake Forest University'],
	correct: 'Clemson University'
}, {
	question: 'Who holds the Panthers\' record for most receiving touchdowns in a single season?',
	answers: ['Muhsin Muhammad', 'Steve Smith', 'Ted Ginn Jr.', 'Greg Olsen'],
	correct: 'Muhsin Muhammad'
}, {
	question: 'Who is the lone Panther to win the Associated Press NFL Defensive Player of the Year Award?',
	answers: ['Luke Kuechly', 'Kevin Greene', 'Julius Peppers', 'Mike Minter'],
	correct: 'Luke Kuechly'
}, {
	question: 'Who is the Panthers\' all time leading scorer?',
	answers: ['Cam Newton', 'Steve Smith', 'John Kasay', 'Deangelo Williams'],
	correct: 'John Kasay'
}, {
	question: 'Who is the Panthers\' all-time leader in QB sacks?',
	answers: ['Julius Peppers', 'Charles Johnson', 'Kevin Greene', 'Thomas Davis'],
	correct: 'Julius Peppers'
}, {
	question: 'Who is the Panthers\' all-time leader in tackles?',
	answers: ['Luke Kuechly', 'Mike Minter', 'Thomas Davis', 'Jon Beason'],
	correct: 'Thomas Davis'
}, {
	question: 'Who is the Panthers\' all-time leader in interceptions?',
	answers: ['Luke Kuechly', 'Thomas Davis', 'Mike Minter', 'Chris Gamble'],
	correct: 'Chris Gamble'
}];

//end of questions object
//start of functions and variables

var currentQuestion = 0;
var currentQuestionNum = 1;
var correctAnswer = 0;
var nextButton = $('<button>Next Question</button>');
var openButton = $('<button>Start Quiz</button>');

function hide() {
	$('h2').show();
	setTimeout(function() {
		$('h2').hide();
	}, 1500);
}

function uncheck() {
	$('<input type="checkbox" value="' + questions[currentQuestion].answers[i] + '">').on('change', function() {
		$('<input type="checkbox" value="' + questions[currentQuestion].answers[i] + '">').not(this).prop('checked', false);
	});
}

function currentQ() {
	$('.bottom1').text("Question " + currentQuestionNum + " of 10");
	if (currentQuestion === 10) {
		$(this).empty();
	};
}

function correctQ() {
	$('.bottom2').text(correctAnswer + " of 10 answered correctly");
}

function open() {
	$('.open').append(openButton);
	$('.open h1').append("Carolina Panthers Quiz");
	$(openButton).on('click', function() {
		render();
		clickNext();
	})
}
open();
// render the answers and their corresponding checkboxes
function render() {
	$('.open').hide();
	for (var i = 0; i < questions[currentQuestion].question.length; i++) {
		$('.button').append(nextButton)[i]
	}
	$('h1').text(questions[currentQuestion].question);
	for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
		$('.choices').append('<input type="checkbox" value="' + questions[currentQuestion].answers[i] + '" name="checkAnswers" />' + questions[currentQuestion].answers[i] + '</br>');
	}
	nextButton.show();
	currentQ();
}

function clickNext() {
	$(nextButton).click(function() {
		if ($('input:checked').val() === questions[currentQuestion].correct) {
			$('h2').text("That's correct!");
			$('.choices').empty();
			correctAnswer += 1;
			currentQuestion += 1;
			currentQuestionNum += 1;
			setTimeout(render, 1500);
			hide();
			nextButton.hide();
			setTimeout(currentQ, 1500);
			setTimeout(correctQ, 1500);
			if (currentQuestion === 10) {
				setTimeout($('.main').empty(), 1500);
			}
		} else {
			$('h2').text("That's incorrect!")
			$('.choices').empty();
			currentQuestion += 1;
			currentQuestionNum += 1;
			if (currentQuestion === 10) {
				setTimeout($('.main').empty(), 1500);
			}
			setTimeout(render, 1500);
			hide();
			setTimeout(currentQ, 1500);
			setTimeout(correctQ, 1500);
		}
	})
}