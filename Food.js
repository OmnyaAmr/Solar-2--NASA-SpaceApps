function Food (){

    var userInput = document.getElementById("Solar").value;

	var food;
	var energyCalories = userInput*860421/(8*60*4);
	var waffle = energyCalories/ (218*4);
	food.push(Math.round(waffle));

	var burger = energyCalories/(295*6); 
	food.push(Math.round(burger));

	var fries =energyCalories/(340*6);
	food.push(Math.round(fries));

	var coke = energyCalories/(150 *6);
	food.push(Math.round(coke));

	var icecream =energyCalories/(137*8 );
	food.push(Math.round(icecream));

	var donut =energyCalories*3/(460*8);
	food.push(Math.round(donut));



   return food;
}

console.log(Food(6.5));