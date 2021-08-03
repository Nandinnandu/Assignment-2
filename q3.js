var text, array, i;
var Name_array = ["Amar", "Raja", "Rani"];
var Place_array = ["Chennai", "Delhi", "Banglore"];
array = Name_array.length;
text = '<table border="1" cellspacing="0" cellpadding="5">';
text += "<tr><th>Name</th><th>Place</th></tr>";
for (i = 0; i < array; i++) {
    text += "<tr><td>" + Name_array[i] + "</td><td>" + Place_array[i] + "</td></tr>";
}
text += "</table>";
document.getElementById("id1").innerHTML = text;
