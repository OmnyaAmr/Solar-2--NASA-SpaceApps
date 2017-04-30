function workout (radiance){
	var totalenergy = radiance *320/1000
	var rep = [];
	var energyminute = totalenergy/(8*60*4);
	var weight = document.getElementById("weight").value;
	// number of miles to run
	var miles = (energyminute*860421) /( 0.72*weight*2);
	rep.push(Math.round(miles));

	// Duration of Burpees in minutes
	Burpees = energyminute * 860421 / (10*12);
	rep.push(Math.round(Burpees));

	//duration of squats in minutes
	squats = energyminute *860421 / (0.78*weight*3);
	rep.push(Math.round(squats));

	//Duration of Tabata in minutes
	Tabata = energyminute*860421 / (15*12);
	rep.push(Math.round(Tabata));

	return (rep);

}
