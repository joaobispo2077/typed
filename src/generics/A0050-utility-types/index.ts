// Record -> Object Type with key-value type.
const person: Record<string, string> = {
  firstName: 'John',
  lastName: 'Bispo',
  age: '20000',
};

type PersonProtocol = {
  firstName?: string;
  lastName?: string;
  age?: number;
};

// Required -> Turn all optional values into required
type PersonRequired = Required<PersonProtocol>;

const personProtocol: PersonRequired = {
  firstName: 'John',
  lastName: 'Bispo',
  age: 22222,
};

// Partial -> Turn all required values into optional
type PersonPartial = Partial<PersonRequired>;

const personPartial: PersonPartial = {
  firstName: 'John',
};

// Readonly -> Turn all variable values into const
type PersonReadOnly = Readonly<PersonRequired>;

const personReadonly: PersonReadOnly = {
  firstName: 'John',
  lastName: 'Bispo',
  age: 22222,
};

// Pick -> Pick value of a type to a new type
type PersonPick = Pick<PersonProtocol, 'firstName' | 'lastName'>;

const personPick: PersonPick = {
  firstName: 'John',
  lastName: 'Bispo',
};

/*
 Extract and Exclude
 Exclude -> Computa todos os tipos que estão em ABC e que não estão em CDE.
 Extract -> Extrai a intersecção entre tipos.
*/

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

// const exclude: TypeExclude = '';
// const extract: TypeExtract = '';
//
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: AccountMongo['_id'];
};

const accountMongo: AccountMongo = {
  _id: 'sadufhasdkgshdg',
  name: 'joao',
  age: 6541654,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { id: _id, ...accountData };
}

const accountApi = mapAccount(accountMongo);
console.log('API: ', accountApi);

export default 1;
