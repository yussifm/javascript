function chartApp(words){
	switch(words){
		case ("hello"):
			console.log("<em>from </em> <br>" + words + "<br>");
			console.log("<center><i>To</i> <br> HI 🖐 <br>");
			break;
		case ("hw bi" || "how be"):
			console.log("<em>from </em> <br>" + words +"<br>");
			 
			console.log("<center><i>To</i> <br> Am cool 😎 <br>");
			console.log("N U 😊 </center>");
			
			break;
		default:
			console.log("Who is it");
			break;
	}
} 


//object literals
/* const circle = {
	radius: 1,
	location: {
		x: 1,
		y:1
	},
	draw: function () {
		console.log("draw");
		
	}
};
*/

//factories function
function createCircle(radius) {
	return{
		radius,
		draw: function() {
			console.log("draw");
		}
	};

}

const circle = createCircle(1);
//circle.draw();

//constructor function
function Circle(radius) {
	
	this.radius = radius;
	this.draw = function() {
		console.log('draw');
	}
}
const another = new Circle(1);

let arr1 =['f','g'];
let arr2 =['h','j'];
let arr3 =[...arr1, ...arr2];
console.log(arr3);






