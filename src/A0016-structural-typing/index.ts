type User = { username: string; password: string };

type VerifyUser = (user: User, sentUser: User) => boolean;

const verifyUser: VerifyUser = (user, sentUser) => {
  return (
    user.username === sentUser.username && user.password === sentUser.password
  );
};

const user = {
  username: 'João',
  password: '6a4sf65sa4fsad65f4asd6f5as4f65sad4f',
  batata: true,
};

const sentUser = {
  balacobaco: false,
  username: 'João',
  password: '6a4sf65sa4fsad65f4asd6f5as4f65sad4f',
};

const authenticated = verifyUser(user, sentUser);
console.log(authenticated);
// TypeScript não checa a identidade e sim somente o nome dos tipos
