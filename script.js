
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}
	
	getArea(){
		return (this.width * this.height);
	}
}

class Square extends Rectangle {
	constructor(height){
	  super(height)
		this.height = height;
	}
	  getPerimeter(){
		return (4 * this.height);
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
