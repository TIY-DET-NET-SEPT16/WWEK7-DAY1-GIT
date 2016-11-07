/*
document.write('Inside my .js file');

for(var i = 0; i < 3; i++)
{
	document.write('<br/>');
}

var numberOfThings;

numberOfThings = 'five';
document.write(numberOfThings);
document.write('<br/>');
document.write(typeof numberOfThings);

document.write('<br/>');

numberOfThings = 5;
document.write(numberOfThings);
document.write('<br/>');
document.write(typeof numberOfThings);

document.write('<br/>');

numberOfThings = 5 + '10';
document.write(numberOfThings);
document.write('<br/>');
document.write(typeof numberOfThings);

var elem = document.getElementById('demo');
elem.innerHTML = 'Some new text';
elem.style.color = 'red';

var numDogs = 2;
var numCats = 2;

var numAnimals = numDogs + numCats;
var elem = document.getElementById('demo2');
elem.innerHTML = 'I have ' + numAnimals + ' animals at home';

var cat1Name = 'Saxon';
var cat2Name = 'Balt';
var dog1Name = 'Kaylee';
var dog2Name = 'Cashew';

var elem2 = document.getElementById('demo3');

var petNames = cat1Name + ', ' + cat2Name + 
	', ' + dog1Name + ' &amp; ' + dog2Name;

elem2.innerHTML = 'Ronda&#39;s pets names are ' + petNames;
*/
var x = 5;
var elem1 = document.getElementById('demo2');
elem1.innerHTML = x;

function myFunction() {
	var elem2 = document.getElementById('demo3');
	elem2.innerHTML = 'Inside my &#36; funtion';
}

myFunction();

function mySquare (someNum) {
	return someNum * someNum;
}
