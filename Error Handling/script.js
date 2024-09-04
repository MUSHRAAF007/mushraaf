function age() {
    let output = document.getElementById("output");  
   output.innerHTML = ""; 

    let userInput = document.getElementById("ageIp").value; 

    try {
        let age = parseInt(userInput); 

        if (isNaN(age) || age < 0) { 
            throw new Error("Please enter a valid age.");
        }

               if (age >= 0 && age <= 12) {
            output.innerHTML = "You are a child.";
        } else if (age >= 13 && age <= 19) {
            output.innerHTML = "You are a teenager.";
        } else if (age >= 20 && age <= 64) {
            output.innerHTML = "You are an adult.";
        } else if (age >= 65) 
{
            output.innerHTML = "You are a senior.";
        }

    } 
catch (error) {
        output.innerHTML = "An Error occurred: " + error.message; 
    } 
	finally {
        output.innerHTML += "<br>Created By Mushu!!!";
    }
}
