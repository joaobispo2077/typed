namespace Areas {
  const PI = 3.14;
  
  export const getCircleCircumferenceByRadius = (radius: number): number => {
    return PI * Math.pow(radius, 2);
  }
  
  export const getRectangleBySides = (base: number, height: number): number => {
    return base * height;
  }

}


console.log(Areas.getCircleCircumferenceByRadius(10));
console.log(Areas.getRectangleBySides(10, 20));
