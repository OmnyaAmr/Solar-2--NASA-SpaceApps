function SelectNoneCheckboxes(in) {
        var elm = document.getElementById(in);
        var checkBoxes = elm.getElementsByTagName("input");
        for (i = 0; i < checkBoxes.length; i++) {
            if (checkBoxes[i].checked) {
                return true;
            }
        }
    }


function calculatePanelPower(){
	 
let listOfActivities = []



	if (SelectNoneCheckboxes("car")) {
		listOfActivities.push("car");
	}
	 var totalEnergy =0;
	//Calculate Approximate Solar Panel Needed
	if (listOfActivities.indexOf("Fridge") > -1)
	{
		
		var hours = document.getElementById("fridge").value;
		totalEnergy += 150*hours;
	}


	if (listOfActivities.indexOf("LED Light Bulb") > -1)
	{   var hours = document.getElementById("LED").value;
		var number = document.getElementById("Nled").value;
		totalEnergy += 10*hours*number;
	}	


	if (listOfActivities.indexOf("TV") > -1)
	{
		
		var hours = document.getElementById("tv").value;
		totalEnergy += 150*hours;
	}	


	if (listOfActivities.indexOf("Laptop Computer") > -1)
	{
		
		var hours = document.getElementById("laptop").value;
		totalEnergy += 50* 6;
	}


	if (listOfActivities.indexOf("Microwave") > -1)
	{	
		var hours = document.getElementById("microwave").value;
		totalEnergy +=600*hours;
	}	

	 var SolPower = totalEnergy/8
	 return (Math.round(SolPower));



}
//console.log(calculatePanelPower(["Fridge","Microwave","Laptop Computer","TV","LED Light Bulb"]));