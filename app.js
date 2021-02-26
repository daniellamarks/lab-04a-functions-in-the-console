//make 5 objects that represent a thing in real life: hiking trails:  the wallowas, three sisters, mount hood, south coast trail, hoh rainforest. 

//choose 2-3 properties for each : terrain, length. wallowas - alpine mountains, 20 miles; three sisters - high desert, 30 miles; mount hood - single mountain, 40 miles; south coast trail - coastal, 18 miles, hoh rainforest - forest, 10 miles.

//Make one property something you can test and sort into 2 or more categories. Length - 20+ miles = difficult, 11=19 miles = moderate. 0-10 miles = easy.

//store objects in different const const wallowas = {name: , terrain: , length: , }

const wallowas = {
	name: "The Wallowas - Ice Lake", 
	terrain: "alpine mountains", 
	distanceInMiles: 20
};

const threeSisters = {
	name: "Three Sisters Loop", 
	terrain: "high desert", 
	distanceInMiles: 30
};

const timberline = {
	name: "Timberline Trail", 
	terrain: "single mountain", 
	distanceInMiles: 40
};

const southCoast = {
	name: "South Coast Trail", 
	terrain: "coastal", 
	distanceInMiles: 18};

const hohRainforest = {
	name: "Hoh Rainforest", 
	terrain: "rain forest", 
	distanceInMiles: 10
};

// store all objects in an array const hikingTrails = []

const hikingTrails = [wallowas, threeSisters, timberline, southCoast, hohRainforest]

// Loop through (iterate) this array and log out each object to the console. Serve your project in live server and open up the javascript console to check that it works.

for (i=0; i < hikingTrails.length; i++) {
	console.log(hikingTrails[i])
}


// ACP

// Write a function called logOutThings that:
// logs out the words "Here are your 5 things!", but using the array.length property to get the right number of things, don't "hard code" the number 5!

// Call your function with your array (logOutThings())

// Validate that it worked by looking at the output in the console.

// Add one more item and add to your array. Validate that the output changes to "Here are your 6 things!"

// ACP

// Move the looping code from earlier step into the function

// Validate that it logs the first message, then logs your array of things to the console

// ACP

// You'll need to use control flow to determine what message to log!
