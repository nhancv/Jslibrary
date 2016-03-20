/**
 * Created by nhancao on 3/20/16.
 */

var Person = function(){
    //private properties
    var hair;

    //public method
    this.getHair=function(){
        return hair;
    };
    this.setHair=function(value){
        hair = value;
    };

    Person.prototype.init = function(hair){
        this.setHair(hair);
        return this;
    }

};


var person = new Person().init("black");
console.log(person.getHair());

