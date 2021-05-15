export type Automobile = {
  brand: string;
  year: number;
};

export type Car = {
  brand: Automobile['brand'];
  year: Automobile['year'];
  name: string;
};

const car: Car = {
  brand: 'Tesla',
  year: 2020,
  name: 'Model 5',
};
