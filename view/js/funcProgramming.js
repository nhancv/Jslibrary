/**
 * Created by nhancao on 3/20/16.
 */

var Person = (function(){
    //constructor
    var Person = function (){
        this.hair = "black";
    }

    Person.prototype.init = function(hair){
        this.hair = hair;
        return this;
    }

    return Person;
}());




var person = new Person();
console.log(person.init("black").hair);

