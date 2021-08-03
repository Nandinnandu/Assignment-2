var userinput: String = prompt(" enter your input between A to D : ");

let grade = ''

switch (userinput) {
    case 'A':
        grade = "Excellant";
        alert(grade)
        break;
    case 'B':
        grade = "Good";
        alert(grade)
        break;
    case 'C':
        grade = "Fair";
        alert(grade)
        break;
    case 'D':
        grade = "Poor";
        alert(grade)
        break;
    default: {
        alert("Invailid Input")
        break;
    }


}


