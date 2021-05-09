let test: unknown;
test = 100;
test = [100];
test = { number: 10 };
test = '100';

if (typeof test === 'number') console.log(test + 10);
// unknown é mais seguro que any pois ele não te permite fazer operações com um dado sem checagem
