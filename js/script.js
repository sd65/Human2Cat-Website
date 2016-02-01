var pattern = Trianglify({
  variance: 0.8,
  cell_size: 30,
  x_colors: "GnBu"
});

pattern.canvas(document.getElementById('background'));

/////


function human2cat() {
  var humanSentence = document.getElementById("human").value.toUpperCase();
  var catWord = "";
  var catSentence= "";
  for (var i = 0; i < humanSentence.length; i++) {
    var letterCode = humanSentence.charCodeAt(i);
    letterCode = letterCode - 32;
    letterBinary= ("0000000" + letterCode.toString(2)).slice(-6);
    if (letterBinary.charAt(0)==1)
      catWord = "Mi";
    else
      catWord = "Gr";
    if (letterBinary.charAt(1)==1)
      catWord += "a";
    if (letterBinary.charAt(2)==1)
      catWord += "o";
    if (letterBinary.charAt(3)==1)
      catWord += "u";
    if (letterBinary.charAt(4)==1)
      catWord += catWord.slice(-1);
    if (letterBinary.charAt(5)==0)
      catWord = catWord.toLowerCase();
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
  for (var i = 0; i < catSentence.length; i++) { //110011
    catWord = catSentence[i];
    if (catWord.charAt(1) == "i")
      humanBinary = "1";
    else
      humanBinary = "0";
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
    if (catWord.slice(-2,-1)==catWord.slice(-1))
      humanBinary += "1";
    else
      humanBinary += "0";
    if (catWord.charAt(0)==catWord.charAt(0).toUpperCase())
      humanBinary += "1";
    else
      humanBinary += "0";
    humanSentence+=String.fromCharCode(parseInt(humanBinary, 2) + 32);
  }
  document.getElementById("human").value = humanSentence;
}
