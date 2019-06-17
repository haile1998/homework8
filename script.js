function getHistory() {
	return document.getElementById("history").innerText;
}
function printHistory(num){
	document.getElementById("history").innerText = num;
}
function getOutput() {
	return document.getElementById("result").innerText;
}
function printOutput(num) {
	document.getElementById("result").innerText = formattedNumber(num);
}
function formattedNumber(num) {
	if(num=="-") {
		return '';
	}
	let n = Number(num);
	return n.toLocaleString("en");
}
function reverseFormattedNumber(num) {
	return Number(num.replace(/,/g,''));
}
let operator = document.getElementsByClassName("operator");
for(let i=0; i<operator.length; i++) {
	operator[i].addEventListener('click',function(){
		if(this.id == 'clear') {
			printHistory("");
			printOutput(0);
		} else if(this.id == 'backspace') {
			let output = reverseFormattedNumber(getOutput()).toString();
			output = output.substr(0,output.length-1);
			printOutput(output);
		} else if(this.id == ',') {
			let output=reverseFormattedNumber(getOutput());
			if(!output.includes('.')) {
				output += '.';
			}
			printOutput(output);
		} else {
			let output = getOutput();
			let history = getHistory();
			if(output!="") {
				output = reverseFormattedNumber(output);
				history += output;
				if(this.id == '=') {
					let result = eval(history);
					printOutput(result);
					printHistory("");
				} else {
					history += this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
	});
}
let numbers = document.getElementsByClassName("number");
for(let i=0; i<numbers.length; i++) {
	numbers[i].addEventListener('click',function(){
		let output=reverseFormattedNumber(getOutput());
			output += this.id;
			printOutput(output);
	});
}
