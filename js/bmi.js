function calculateBMI() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = document.getElementById("result");

    if (height === "" || weight === "") {
        result.innerHTML = "Please enter height and weight.";
        result.style.color = "red";
        return;
    }

    let h = height / 100;
    let bmi = weight / (h * h);

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi < 25) {
        status = "Normal Weight";
    } else if (bmi < 30) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    result.innerHTML =
        "Your BMI is <b>" +
        bmi.toFixed(2) +
        "</b><br>Status: <b>" +
        status +
        "</b>";

    result.style.color = "green";
}