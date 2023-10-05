function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultDisplay = document.getElementById("result");

    if (isNaN(temperatureInput)) {
        resultDisplay.textContent = "Please enter a valid temperature.";
        return;
    }

    if (fromUnit === toUnit) {
        resultDisplay.textContent = "Conversion units are the same.";
        return;
    }

    let result;
    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (temperatureInput * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            result = temperatureInput + 273.15;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (temperatureInput - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            result = (temperatureInput - 32) * 5/9 + 273.15;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = temperatureInput - 273.15;
        } else if (toUnit === "fahrenheit") {
            result = (temperatureInput - 273.15) * 9/5 + 32;
        }
    }

    resultDisplay.textContent = `${temperatureInput} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
}
