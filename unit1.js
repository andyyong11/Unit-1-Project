console.log("hello");

// Function to change color of entire page
function changeColors() {
    document.documentElement.style.backgroundColor = "#0A1828";
}

document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to change page color when button is clicked
    document.getElementById('changeColorButton').addEventListener('click', function() {
        changeColors();
    });
    
    // Array to hold car brand names
    const carBrands = ["Ford","ford", "Chevrolet","chevrolet", "Toyota", "toyota", "Honda","honda", "Nissan","nissan", 
    "Jeep","jeep", "Dodge","dodge", "Subaru","subaru", "BMW","bmw", "Mercedes-Benz","mercedes-benz"];
    
    // Function to check if you own one of the car brands
    function checkCarBrand() {
        var question = prompt("what car do you currently own?");
        // Create a loop and check over car brands
        if (question) {
            question = question.trim();
            var i = 0;
            var found = false;
            while (i < carBrands.length && !found) {
                if (carBrands[i] === question) {
                    found = true;
                }
                i++;
            }
            // If the loop is true it will change the color to green
            // else it will change the color to a different shade of red
            if (found) {
                document.documentElement.style.backgroundColor = "#00FF00";
                alert("you own one of the top 10 car brands");
            } else {
                document.documentElement.style.backgroundColor = "red";
                alert("you do not own one of the top 10 brands");
            }
        } else {
            alert("please enter a valid car brand");
        }
    }
    
    checkCarBrand();
});
ghggg
