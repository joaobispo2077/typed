"use strict";
var Geometry;
(function (Geometry) {
    let Area;
    (function (Area) {
        Area.getRectangleBySides = (base, height) => {
            return base * height;
        };
    })(Area = Geometry.Area || (Geometry.Area = {}));
})(Geometry || (Geometry = {}));
//# sourceMappingURL=rectangle.js.map