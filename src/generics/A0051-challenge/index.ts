type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];

  constructor(public details: string) {}

  addVotationOption(option: string): void {
    const votationOption: VotationOption = { option, numberOfVotes: 0 };
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  show(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
    }
  }
}

const votation1 = new Votation('Qual seu sabor de sorvete preferido? ');

votation1.addVotationOption('Chocolate');
votation1.addVotationOption('Morango');
votation1.addVotationOption('Baunilha');

votation1.vote(0);
votation1.vote(0);
votation1.vote(1);
votation1.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.show();
