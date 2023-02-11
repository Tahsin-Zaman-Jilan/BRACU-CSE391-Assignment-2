function generateQuote() {
    
    var quotes = [
        ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
        ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
        ["Argue with idiots, and you become an idiot.", "Paul Graham"],
        ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
        ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
      ];
    var length = quotes.length;
   
    var number=[Math.floor(Math.random()*quotes.length)]
    
    document.getElementById('quote').innerText = quotes[number];
}

function changeStyle(box) {

    if (box === 'box1') {
      
        document.getElementById('quote-container').style.backgroundColor = 'Blue';
        document.getElementById('quote-container').style.fontSize = '14px';
        
    }
    else if (box === 'box2') {
       
        document.getElementById('quote-container').style.backgroundColor = 'Red';
        document.getElementById('quote-container').style.fontSize = '16px';
      
    }
    else if (box === 'box3') {
     
        document.getElementById('quote-container').style.backgroundColor = 'Green';
        document.getElementById('quote-container').style.fontSize = '12px';
        
    }
    else {
      
        document.getElementById('quote-container').style.backgroundColor = 'Yellow';
        document.getElementById('quote-container').style.fontSize = '18px';
  
    }
}

function convert(converter, unit) {

    // convert kg to pound 
    if (converter == "kg_to_lb") {
        var kg = unit;
        var pound = kg * 2.20;

        document.getElementById("result").innerText = pound.toFixed(4) + " pound";
    }

    // convert pound to kg
    else {
        var pound = unit;
        var kg = pound / 2.2046;

        document.getElementById("result").innerText = kg.toFixed(4) + " kilograms";
    }
}

function calculate() {
    var values = document.getElementById('box1').value.split(/,/g);
    var sum = values.reduce(function (a, b) { return parseInt(a) + parseInt(b); });
    document.querySelector('#max').innerHTML = values.max();
    document.querySelector('#min').innerHTML = values.min();
    document.querySelector('#sum').innerHTML = sum;
    document.querySelector('#avg').innerHTML = (sum / values.length).toFixed(13);
    document.querySelector('#reverse').innerHTML = values.reverse().join(',');
}

Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

Array.prototype.min = function () {
    return Math.min.apply(null, this);
};

function deleteAll(){
    document.getElementById('text-area').value = '';
}

function capitalize() {
    //  Converts the text to upper/lower case. Button will work as toggle.
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].toUpperCase());
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function sort(){
    // rearranges the lines into sorted alphabetical order
    var text = document.getElementById('text-area').value;
    var lines = text.split('');
    var newLines = [];
    
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].toLowerCase());
        // let newLines = text.split('').sort().join('');
    //     document.getElementById('text-area').value = newLines;
    }
    newLines.sort();
    document.getElementById('text-area').value = newLines.join('');
    // document.getElementById('text-area').value = text.split('').sort().join('');
    
}

function reverse (){
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].split('').reverse().join(''));
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function addNumbers() {
    // Places a number in front of each line, such as "1. " (Ignore previous numbers in front of them.)
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push((i + 1) + '. ' + lines[i]);
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function stripBlank () {
    // removes any empty lines from the text area also remove empty space at beginning and end of each line
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].trim() != '') {
            newLines.push(lines[i].trim());
        }
    }
    document.getElementById('text-area').value = newLines.join('\n');
}

function shuffle(){
    // Rearranges the lines into a random order. Js do not have this built in, use Math.random().
    var text = document.getElementById('text-area').value;
    var lines = text.split('\n');
    var newLines = [];
    for (var i = 0; i < lines.length; i++) {
        newLines.push(lines[i].trim());
    }
    newLines.sort(function () {
        return 0.5 - Math.random();
    }
    );
    document.getElementById('text-area').value = newLines.join('\n');
}