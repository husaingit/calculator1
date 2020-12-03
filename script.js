var operator1 = '';
var operand = '+';
var operator2 = '';
var results;

function operation(a) {
    operator2 += a;
    document.getElementById("result").innerHTML = operator2;

}


function operator(b) {
    console.log(operator1, operator2, operand, b)
    if (b == "C") {
        operator1 = '';
        operand = '+';
        operator2 = '';
        results = '';
        document.getElementById('result').innerHTML = "0"
    } else {
        switch (operand) {
            case '+':
                results = Number(Number(operator1) + Number(operator2));
                document.getElementById('result').innerHTML = results;
                console.log("plus", results);

                break;

            case '-':
                results = Number(Number(operator1) - Number(operator2));
                document.getElementById('result').innerHTML = results;
                console.log("minus", results);
                break;

            case '*':
                results = parseFloat(parseFloat(operator1) * parseFloat(operator2));
                document.getElementById('result').innerHTML = results;
                console.log("mul", results);
                break;

            case '/':
                results = parseFloat(parseFloat(operator1) / parseFloat(operator2));
                document.getElementById('result').innerHTML = results;
                console.log("divide", results);
                break;
            case '=':
                results = operator1;
                document.getElementById('result').innerHTML = results.fixed(2);
                break;


        }
        operator2 = '0';
        operator1 = results;
        operand = b;

    }




}