var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

const displayResults =()=>{
	let total= 0;
	let high_index = 0;
	
	for(let i=0; i < scores.length; i++) {
		total += scores[i];
		if(scores[i]>scores[high_index]){
			high_index = i;
		}
	}
	
	let average = total/scores.length;
	let high_score = scores[high_index];

	const h2 = document.createElement('h2');
	const p = document.createElement('p');
	const p2 = document.createElement('p');

	$('results').innerHTML = "";//clear out the result on each click
	h2.innerHTML='Results';
	$('results').appendChild(h2);
	p.innerHTML = `Average score = ${average}`;
	$('results').appendChild(p);
	p2.innerHTML = `High score = ${names[high_index]} with a score of ${high_score}`;
	$('results').appendChild(p2);
}

const displayScores =()=>{
	$('scores_table').innerHTML='';
	const h2 = document.createElement('h2');
	h2.innerHTML = 'Scores'
	$('scores_table').appendChild(h2);
	
	$('scores_table').insertAdjacentHTML('beforeend','<tr><td><strong>Names</strong></td><td><strong>Scores</strong></td></tr>');
	for (let i=0; i < scores.length; i++) {
		$('scores_table').insertAdjacentHTML('beforeend',`<tr><td>${names[i]}</td><td>${scores[i]}</td></tr>`)
	}
};

const addScore =()=>{
	let new_name = $('name').value;
	let new_score = parseInt($('score').value);
	if((new_name=="") || new_score < 0 || new_score > 100) {
		alert('You must enter a name and a valid score');
	}else{
		names.push(new_name);
		scores.push(new_score);
		alert('Entered Entry');
	}
	$('name').focus();
	$('name').select();
};

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$('name').focus();
};


