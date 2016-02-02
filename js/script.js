// Background
var pattern = Trianglify({
  variance: 0.8,
  cell_size: 30,
  x_colors: "GnBu"
});
pattern.canvas(document.getElementById('background'));

// Translate functions

function human2cat() {
  var humanSentence = document.getElementById("human").value;
  var catWord = "";
  var catSentence= "";
  for (var i = 0; i < humanSentence.length; i++) {
    var letterCode = humanSentence.charCodeAt(i);
    letterBinary= ("00000000" + letterCode.toString(2)).slice(-8);
    if (letterBinary.charAt(2)==1)
      catWord = "Mi";
    else
      catWord = "Gr";
    if (letterBinary.charAt(3)==1)
      catWord += "a";
    if (letterBinary.charAt(4)==1)
      catWord += "o";
    if (letterBinary.charAt(5)==1)
      catWord += "u";
    if (letterBinary.charAt(6)==1)
      catWord += catWord.slice(-1);
    if (letterBinary.charAt(7)==0)
      catWord = catWord.toLowerCase();
    if (letterBinary.charAt(0)==1)
      catWord += "...";
    if (letterBinary.charAt(1)==1)
      catWord += ",";
    catSentence+=catWord + " ";
  }
  document.getElementById("cat").value = catSentence;
}

function cat2human() {
  var catSentence = document.getElementById("cat").value.trim();
  var catWord = "";
  var humanBinary = "";
  var humanSentence= "";
  catSentence = catSentence.split(" ");
  for (var i = 0; i < catSentence.length; i++) {
    catWord = catSentence[i];
    if (catWord.indexOf('...') > -1)
      humanBinary = "1";
    else
      humanBinary = "0";
    if (catWord.indexOf(',') > -1)
      humanBinary += "1";
    else
      humanBinary += "0";
    if (catWord.charAt(1) == "i")
      humanBinary += "1";
    else
      humanBinary += "0";
    if (catWord.indexOf('a') > -1)
      humanBinary += "1";
    else
      humanBinary += "0";
    if (catWord.indexOf('o') > -1)
      humanBinary += "1";
    else
      humanBinary += "0";
    if (catWord.indexOf('u') > -1)
      humanBinary += "1";
    else
      humanBinary += "0";
    if (catWord.replace(/\W/g, '').slice(-2,-1)==catWord.replace(/\W/g, '').slice(-1))
      humanBinary += "1";
    else
      humanBinary += "0";
    if (catWord.charAt(0)==catWord.charAt(0).toUpperCase())
      humanBinary += "1";
    else
      humanBinary += "0";
    humanSentence+=String.fromCharCode(parseInt(humanBinary, 2));
  }
  document.getElementById("human").value = humanSentence;
}
