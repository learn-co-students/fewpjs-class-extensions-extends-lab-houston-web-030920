// Your code here
class Polygon{

    constructor(integers){
        this.integers = integers
    }

    // Use the get keyword to make a 
    // getter method countSides that 
    // counts the number of sides 
    // (each index in the array)
    get countSides(){
        return this.integers.length
    }

    // Use the get keyword to make a getter 
    // method perimeter that calculates the 
    // sum of each side (each index in the array) 
    // of the polygon. This method will become 
    // accessible to its child classes
    get perimeter(){
        return this.integers.reduce( function(total, num){return total + num})
    }
}

class Triangle extends Polygon{

    // Use the get keyword to make a 
    // getter method isValid that 
    // checks if the given 3 sides 
    // for a triangle is valid
    get isValid(){
        if(this.countSides == 3){
            let a = this.integers[0]
            let b = this.integers[1]
            let c = this.integers[2]
            return((a + b > c) && (b + c > a) && (c + a > b))
        }else{
            return false
        }
    }
}

class Square extends Polygon{
    // Use the get keyword to make a 
    // getter method isValid that checks 
    // if the given 4 sides for a square 
    // is valid. A square is valid when 
    // the lengths of all sides are equal
    get isValid(){
        if(this.countSides == 4){
            let a = this.integers[0]
            let b = this.integers[1]
            let c = this.integers[2]
            let d = this.integers[3]
            return ((a === b) && (a === c) && (a == d))
        }
    }

    get area(){
        return Math.pow(this.integers[0], 2)
    }

}
