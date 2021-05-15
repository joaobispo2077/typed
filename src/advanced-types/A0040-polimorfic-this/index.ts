export class Calculator {
  constructor(public firstnumber: number) {}

  add(n: number): this {
    this.firstnumber += n;
    return this;
  }
  subtract(n: number): this {
    this.firstnumber -= n;
    return this;
  }
  multiply(n: number): this {
    this.firstnumber *= n;
    return this;
  }
  divide(n: number): this {
    this.firstnumber /= n;
    return this;
  }
}

export class SubCalculator extends Calculator {
  pow(n: number): this {
    this.firstnumber **= n;
    return this;
  }
}

const calculator = new Calculator(2);
calculator.add(100).subtract(2).divide(3).multiply(2);
console.log(calculator);

const subCalculator = new SubCalculator(2);
subCalculator.add(100).subtract(2).divide(3).multiply(2).pow(2);
console.log(subCalculator);

// Builder - GoF

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setURL(url: string): this {
    this.url = url;
    return this;
  }

  send(): this {
    if (this.method && this.url)
      console.log(`Making ${this.method} to ${this.url}...`);
    return this;
  }
}

const request = new RequestBuilder();

request.setURL('https://www.google.com').setMethod('get').send();
