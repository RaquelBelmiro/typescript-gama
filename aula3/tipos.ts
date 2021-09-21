// boolean 
const contaPaga: boolean = false;


// Number
const idade: number = 23;
const avaliacao: number = 4.5;


// string
const nome: string = 'Vitor Farias';

// array 
const idades :number[] = [23, 28, 45];
const idades2: Array<number> = [23, 28, 45];

// tuple
let jogadores: [string, string, string];
jogadores = ['Vitor', 'Fulano', 'Ciclano'];

// Enum
enum StatusAprovacao {
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoDaAPI: any[] = [123, 'vitor', false];
const retornoDaAPI2: any = {//...usado em situações especiais onde não se sabe o que vai retornar
};

//void 
function printarNaTela(msg:string): void {
  console.log(msg);
}

//Null e undefined
const u : undefined = undefined;
const n : null = null;

//object
function criar(objecto: object){
  // ...
}
criar({ //chamando a função
  propriedade: 1,
})
//criar('vitor') //dá erro

//never
function loopInfinito(): never {
  while (true) { }
}

// union types
const nota: string | number =5;

function exibirNota(nota: number | string){ //um tipo ou outro tipo
  console.log(`a nota é &{nota}`);
}
exibirNota('10');
exibirNota(10);

// Alias
//declaramos Funcionarios como um tipo e depois usamos uma variavel com esse tipo

type Funcionario = {
  nome: string; 
  sobrenome: string;
  dataNascimento: Date;
}

//type Funcionarios = Array<Funcionario>;

const funcionarios: Array<Funcionario> = [{
  nome: 'vitor',
  sobrenome: 'Farias',
  dataNascimento: new Date()
},{
nome: 'fulano',
  sobrenome: 'pedro',
  dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
  for(let funcionario of funcionarios){
    console.log("Nome do funcionario: ", funcionario.nome);
  }
}


// valores nulos ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
  nome: string;
  telefone1: string;
  telefone2?: string; //campo opcional
}
const contato: Contato = {
  nome: 'vitor', 
  telefone1: '9999',
}

//type Assertion
const minhaIdade : any = 23;//ainda que eu não tenha declarado um tipo específico depois eu falo o tipo na linha abaixo;
(minhaIdade as number).toString();
//ou //<number>minhaIdade.toString();

const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);