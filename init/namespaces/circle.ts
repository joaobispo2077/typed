namespace Geometry {
  export namespace Area {
      const PI = 3.14;
      
      export const getCircleCircumferenceByRadius = (radius: number): number => {
        return PI * Math.pow(radius, 2);
      }
      
  }
}