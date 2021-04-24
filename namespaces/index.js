"use strict";
var Areas;
(function (Areas) {
    const PI = 3.14;
    Areas.getCircleCircumferenceByRadius = (radius) => {
        return PI * Math.pow(radius, 2);
    };
    Areas.getRectangleBySides = (base, height) => {
        return base * height;
    };
})(Areas || (Areas = {}));
console.log(Areas.getCircleCircumferenceByRadius(10));
console.log(Areas.getRectangleBySides(10, 20));
//# sourceMappingURL=index.js.map