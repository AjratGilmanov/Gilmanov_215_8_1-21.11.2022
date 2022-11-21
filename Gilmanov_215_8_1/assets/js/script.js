// // 1

// нахожу элемент по ID и ставлю прослушку функции go() с таймером в 3 секунды(3000 миллисекунд)
let br = document.getElementById('down');
br.addEventListener('click',setTimeout(go,3000));

// функция листающая на 500 пикселей вниз

function go() {
    window.scrollBy(0, 500)
}

// // // 2
let scroll = document.querySelector('#scroll');

function Inf(){
    alert('Вертикальная прокрутка составляет: ' + Math.round(window.pageYOffset) + 'px' )
}

scroll.addEventListener('click', Inf)

// // 3
// // нахожу элемент по ID
const getBtn1 = document.getElementById('summbtn')

getBtn1.addEventListener('click', () => {
    const getForm = document.getElementById('form')

    let sum = 0;
// считаю сумму перебирая все инпуты через цикл for
    for (let i = 0; i < getForm.elements.length; i += 1) {
        sum += Number(getForm.elements[i].value);
    }
    // вывод суммы чисел из инпутов
    console.log(sum);
});

// // 4
// Нахожу элементы по ID через querySelector
var countriesSelect = document.querySelector('#countries-select');
var citiesSelect = document.querySelector('#cities-select');
// Объявление Обьекта
var data = {
	Россия: ['1', '2', '3'],
	Беларусь: ['1', '2', '3'],
	Украина: ['1', '2', '3'],
}
// Страны
var countries = Object.keys(data);
// перебираю Страны через for
for (var i = 0; i < countries.length; i++) {
	countriesSelect.add(new Option(countries[i]));
}
// Города в переменную
var defaultCities = data[countries[0]];
// перебираю города через for
for (var i = 0; i < defaultCities.length; i++) {
	citiesSelect.add(new Option(defaultCities[i]));
}
// Добавление Функции в селект стран
countriesSelect.addEventListener('change', function() {
	var cities = data[this.value];
	citiesSelect.length = 0;

	for (var i = 0; i < cities.length; i++) {
		citiesSelect.add(new Option(cities[i]));
	}
});


// // 5
// Нахожу ol по ID
let four = document.getElementById('exfive')
// Создаю li в переменную li
let li = document.createElement('li')
// Добавляю li в конец ol
four.append(li)

// // 6

var elems = document.getElementsByTagName('a');
for (var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('mouseover', func);
}

function func() {
	this.innerHTML = this.innerHTML + ' (' + this.href + ')';
}

// // 7
var elems = document.getElementsByTagName('p');
for (var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', func);
}

function func() {
	this.innerHTML = this.innerHTML * this.innerHTML;
}

// // 8

var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function updateDisplay(val) {
    document.getElementById("num").innerHTML = val;
}

// // 9

const getUl1 = document.querySelector('.cho');
const getBtn1 = document.querySelector('.nichoblin');

getBtn1.addEventListener('click', funcsec);
getUl1.addEventListener('click',funcfirst);

function funcfirst(event) {
    event.target.innerHTML = `${event.target.innerHTML} !`;
};

function funcsec() {
    const createLi = document.createElement('li');
    createLi.innerHTML = 'Пункт';
    getUl1.appendChild(createLi);
};

// // 10

const getForm2 = document.querySelector('.form');
const getTable2 = document.querySelector('.task');


getForm2.addEventListener('click', funch);
getTable2.addEventListener('click', funcgg);

function funcgg(event) {
    const newValue = prompt("Исправить " + event.target.innerHTML, '');
    event.target.innerHTML = newValue;
};

function funch(event) {
    event.preventDefault();

    const createTdFirst = document.createElement('td');
    createTdFirst.innerHTML = getForm2.firstname.value;

    const createTdLast = document.createElement('td');
    createTdLast.innerHTML = getForm2.lastname.value;

    const createTr = document.createElement('tr');
    createTr.appendChild(createTdFirst);
    createTr.appendChild(createTdLast);

    getTable2.appendChild(createTr);
};

