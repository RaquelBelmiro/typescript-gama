interface Usuario {
  nome: string;
  email: string;
  address?: string;
}

function getUser(){
  return {
    nome: 'vitor',
    email: 'vitor@vitor.com'
  }
}

function setUser(usuario: Usuario){
  //...
}