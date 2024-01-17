 function calculateBMI() {
      const units = document.getElementById('units').value;
      const height = parseFloat(document.getElementById('height').value);
      const weight = parseFloat(document.getElementById('weight').value);

      if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid numbers for height and weight.');
        return;
      }

      let bmi;

      if (units === 'imperial') {
        bmi = (weight / (height * height)) * 703;
      } else {
        bmi = weight / (height * height);
      }

      displayResult(bmi);
    }

    function displayResult(bmi) {
      const resultElement = document.getElementById('result');
      let level;

      if (bmi < 18.5) {
        level = 'Underweight';
        resultElement.className = 'underweight';
      } else if (bmi < 25) {
        level = 'Normal Weight';
        resultElement.className = 'normal-weight';
      } else if (bmi < 30) {
        level = 'Overweight';
        resultElement.className = 'overweight';
      } else {
        level = 'Obese';
        resultElement.className = 'obese';
      }

      resultElement.textContent = `BMI: ${bmi.toFixed(2)} - ${level}`;
    }
