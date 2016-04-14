/**
 * Created by nhancao on 3/20/16.
 */

var Person = function () {
    //private properties
    var _hair = "black";

    //public method;
    this.setHair = function setHair(value) {
        _hair = value;
    };
    this.getHair = function getHair() {
        return _hair;
    };
    //get arguments inject to constructor
    var params = Array.prototype.slice.call(arguments);
    var _constructor = function(hair){
        _hair = hair;
    }
    switch (params.length){
        case 1:
            _constructor(params[0]);
            break;
    }

    Person.prototype.init = function (hair) {
        this.setHair(hair);
        return this;
    };
};

console.log(new Person());
console.log(new Person().getHair());
console.log(new Person("yellow").getHair());
console.log(new Person().init("blue").getHair());
console.log(new Person("yellow").init("red").getHair());

