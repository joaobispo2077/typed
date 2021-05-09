// casting, type coercion, type assertion

//- Recommended

// Conditional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Type Assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('[type=text]') as HTMLInputElement;
input.value = 'texto legal';
input.focus();

//- Not Recommended

// non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion using casting
const body4 = (document.querySelector('body') as unknown) as number;

//----------------------------------------------------------------

const message = 'EU AMO VOCÊ VIVIANE!!!<3';
