function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  // Challenge 1 :
  let BMI = weight/(height/100*height/100);
  window.alert(BMI);
  
  // Challenge 2 :
    if(BMI<18.5){
      window.alert("Underweight")} 
      else if(BMI >= 18.5 && BMI <=24.9){
      window.alert("Healthy Weight")}
      else if (BMI >= 25.0 && BMI <=29.9){
      window.alert("Overweight")}
      else if (BMI >= 30.0){
      window.alert("Above Obesity")}

 // Challenge 3 :
      if(BMI >= 19 && BMI <=24 && age >= 19 && age <=24){
        window.alert("Healthy");} 
      else if(BMI >= 20 && BMI <=25 && age >= 25 && age <=34){
        window.alert("Healthy");}
      else if(BMI >= 21 && BMI <=26 && age >= 35 && age <=44){
        window.alert("Healthy");}  
      else if(BMI >= 22 && BMI <=27 && age >= 45 && age <=54){
        window.alert("Healthy");}  
      else if(BMI >= 23 && BMI <=28 && age >= 55 && age <=64){
        window.alert("Healthy");}  
      else if(BMI >= 24 && BMI <=29 && age >= 65){
        window.alert("Healthy");}  
      else {window.alert("Not Healthy");}
      
   }
    