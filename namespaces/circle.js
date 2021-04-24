"use strict";
var Geometry;
(function (Geometry) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        Area.getCircleCircumferenceByRadius = (radius) => {
            return PI * Math.pow(radius, 2);
        };
    })(Area = Geometry.Area || (Geometry.Area = {}));
})(Geometry || (Geometry = {}));
//# sourceMappingURL=circle.js.map