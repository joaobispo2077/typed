type ConstructorAdmin = { new(...args: any[]): {}  }



// Desafio Decorator adminProfile


const loggedUser = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: false
}

@adminProfile
class MudancaAdministrativa {
  critico() {
      console.log('Algo crítico foi alterado!')
  }
}

new MudancaAdministrativa().critico()


function adminProfile<T extends ConstructorAdmin>(constructor: T){

  console.log(constructor)
  return class extends constructor {

    constructor(...args: any[]){
      super(...args);
      if(!(loggedUser && loggedUser.admin)) throw new Error('not allowed');

    }
  }
}