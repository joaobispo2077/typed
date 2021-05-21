/* eslint-disable @typescript-eslint/no-namespace*/
var Space;
(function (Space) {
    Space.name = 'Joao';
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    Space.Person = Person;
    var person = new Person(Space.name);
    console.log(person);
    var OtherSpace;
    (function (OtherSpace) {
        OtherSpace.lastname = 'Bispo';
    })(OtherSpace = Space.OtherSpace || (Space.OtherSpace = {}));
})(Space || (Space = {}));
var person2 = new Space.Person('Batatinha');
console.log(person2);
console.log(Space.OtherSpace.lastname);
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="module/index.ts" />
console.log(Space.OtherSpace.lastname);
