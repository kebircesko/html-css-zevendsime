 /* VARIABLES */
    // var
    var city = "Prizren";
    document.getElementById("varExample").innerText =
        "var city = " + city;
    // let
    let age = 14;
    age = 15;
    document.getElementById("letExample").innerText =
        "let age = " + age;
    // const
    const school = "Shkolla Digjitale";
    document.getElementById("constExample").innerText =
        "const school = " + school;

    /* OPERATORS */
    let a = 10;
    let b = 5;
    document.getElementById("operatorExample").innerHTML =
        "a + b = " + (a + b) + "<br>" +
        "a - b = " + (a - b) + "<br>" +
        "a * b = " + (a * b) + "<br>" +
        "a / b = " + (a / b) + "<br>";

    /* CONDITIONALS */
    // if / else
    if (age >= 15) {
        document.getElementById("ifElseExample").innerText =
            "Mosha është 15 ose më shumë";
    } else {
        document.getElementById("ifElseExample").innerText =
            "Mosha është nën 15";
    }
    // if / else if / else
    let grade = 4;
    if (grade === 5) {
        document.getElementById("elseIfExample").innerText =
            "Shkëlqyeshëm ";
    } else if (grade === 4) {
        document.getElementById("elseIfExample").innerText =
            "Shumë mirë ";
    }
    else if (grade === 3) {
        document.getElementById("elseIfExample").innerText =
            "Mirë ";
    } else {
        document.getElementById("elseIfExample").innerText =
            "Duhet më shumë ushtrime";
    }

    let nota = prompt("Shkruani notën tuaj (1-5):");// prompt() hap një dritare për të marrë input nga përdoruesi
    if (nota == 5) {
        alert("Shkëlqyeshëm");
    } else if (nota == 4) {
        alert("Shumë mirë");
    }
    else if (nota == 3) {
        alert("Mirë");
    } else {
        alert("Duhet më shumë ushtrime");
    }

    /* LOOPS */
    // for
    let forText = "";
    for (let i = 1; i <= 5; i++) {
        forText += i + " "; //forText = forText + i + " ";
        //+= → shton mbi vlerën ekzistuese
        //+ → bashkon (concatenate) string + number
        // i++ → i = i + 1
        //" " → shton një hapësirë pas numrit për t'i ndarë në tekst
    }
    document.getElementById("forLoop").innerText =
        "for: " + forText;

    // while
    let w = 4;
    let whileText = "";
    while (w <= 3) {
        whileText += w + " ";
        w++;
    }
    document.getElementById("whileLoop").innerText =
        "while: " + whileText;

    // do...while
    let d = 4;
    let doWhileText = "";
    do {
        doWhileText += d + " ";
        d++;
    } while (d <= 3);
    document.getElementById("doWhileLoop").innerText =
        "do...while: " + doWhileText;

    // for...of
    let colors = ["red", "green", "blue"];// array me tre vlera
    let colorText = "";
    for (let color of colors) { //me kalu nëpër vlerat e një array
        colorText += color + " ";
    }
    document.getElementById("forOfLoop").innerText =
        "for...of: " + colorText;