function showTexts(...args: string[]): void {
  console.log(args.join(' '));
}

showTexts('Hello', '', 'world');

export default showTexts;
