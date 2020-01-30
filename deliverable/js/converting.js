var c1 = '';
var c2 = '';

function reverse(text){
	let rev = "";    
	for (var i = text.length-1; i >= 0; i--) { rev += text[i]; }    
	return rev;
}

function fromUnit(text) {
	let elements = text.split(/[^a-zA-Z/-]+/).filter(function(el){return el!='';});
	return elements[0];
}

function toUnit(text) {
	let elements = text.split(/[^a-zA-Z/-]+/).filter(function(el){return el!='';});
	if (elements.length == 2) {
		return undefined;
	}
	return elements[elements.length-1];
}

function fromValue(text) {
	let r  = text.split(' ');
	if(isNaN(r[0])) { return 1; }
	return r[0];
}

function update(text) {
	let val = fromValue(text);
	let from = fromUnit(text);
	var to = toUnit(text);
	
	var possible;
	
	try {
		possible = convert(val).from(from).possibilities();
	} catch {
		if(from == undefined){
			c2.value = 'No unit found.';
			return;
		}
		window.c2.value = '"'+from+'" not recognized.';
		return;
	}
	
	if(to == undefined) {
		window.c2.value = 'Maybe '+possible.slice(1,5).join(', ')+'?';
		return;
	}
	
	if(possible.indexOf(to) <= -1) {
		window.c2.value = '"'+to+'" not recognized.';
		return;
	}
	
	var val2;
	try{
		val2 = Number.parseFloat(convert(val).from(from).to(to));
	} catch {
		val2 = '--';
		to = '-';
	}
	window.c2.value =  '= '+val2 + ' ' + to;
}

function main() {
	convertContainers = document.querySelectorAll('div.convert-container>input');
	window.c1 = convertContainers[0];
	window.c2 = convertContainers[1];
	
	update(window.c1.value);
	
	c1.addEventListener('input', function() {
		let text = this.value;
		clearTimeout();
		setTimeout(function() {
			update(text);
		}, 300);
	});
	
	sushow = document.querySelectorAll('#supported-units-show')[0];
	sushow.addEventListener('click', function() {
		$(document.querySelectorAll('#supported-units')[0]).slideDown(1000);
		document.querySelectorAll('#showbutton')[0].setAttribute('hidden',true);
	});
}

window.onload = main;
