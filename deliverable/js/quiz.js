var submit;
var form;
var reset;

function calcResults(){
	var question1A = document.querySelector('input[name="q1"]:checked').value;
	var question2A = document.querySelector('input[name="q2"]:checked').value;
	var question3A = document.querySelector('input[name="q3"]:checked').value;
	var question4A = document.querySelector('select[name="q4"]').value;
	submit = document.getElementById("submit");
	form = document.getElementById('myform');

	var container = document.getElementById("quizDiv");
	
	var count = 0;
	
	if (question1A == "2.54"){
		count++;
	}
	if (question2A == "5280"){
		count++;
	}
	if (question3A == "3072"){
		count++;
	}
	if (question4A == "2") {
		count ++;
	}
	
	container.innerHTML = 'You got '+count+'/4';
}





window.onload = () => {
	submit = document.getElementById("submit");
	form = document.getElementById('myform');
	reset = document.getElementById('reset');
	
	form.addEventListener('submit', function(e){
		e.preventDefault();
		calcResults();
	});
	reset.addEventListener('click',function() {
		var container = document.getElementById("quizDiv");
		container.innerHTML = '';
	});
};