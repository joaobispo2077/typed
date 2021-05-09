import './form-control';

export function fn(this: Date, argument: string, day: number): void {
  console.log(this);
  console.log(argument);
  console.log(day);
}

fn.call(new Date(), 'batata', 25);
fn.apply(new Date(), ['batata', 25]);
