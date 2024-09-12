const form =  document.querySelector(`form`);

form.addEventListener(`submit`,function (e){
e.preventDefault();

// const height = parseInt(document.querySelector<HTMLInputElement>('#height').value)
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt (document.querySelector('#weight').value);
const result = document.querySelector('#result');

if(height === `` || height < 0 || isNaN(height)){

   result.innerHTML = `pleas give a valid height ${height}`// if we add this then show extra (NaN)
}

 if( weight === `` || weight < 0 || isNaN(weight)){

    result.innerHTML = `pleas give a valid weight ${weight}`
}
 
 const bmi  = (weight/((height*height/10000))).toFixed(2);

   // Determine BMI category
   let category = '';
   if (bmi < 18.6) {
       category = 'Under weight';
   } else if (bmi >= 18.6 && bmi < 24.9) {
       category = 'Normal weight';
   } else if (bmi >= 25 && bmi < 29.9) {
       category = 'Over weight';
   } else {
       category = 'Obesity';
   }
   // Display the result
   result.innerHTML = `<span>BMI: ${bmi}</span><br><span>Category: ${category}</span>`

     //result.innerHTML =  `<span>${bmi}</span`

} 

)
