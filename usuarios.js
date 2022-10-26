//Grupo 8
let usuários = require('./database/users.json');

//Edson - emoreirasj - Aluno 1- Responsável por criar o projeto no git e dar acesso aos outros



//Sergio - SergioRibeiro8 - Aluno 2 - Responsável por criar a função de listar todos os usuários acima de 18 anos.



//Rubio - Rubio01 - Aluno 3 - Responsável por criar a função de listar todos os usuários inserindo mais uma informação para cada de ativo: true
AdicionarPropriedade =(usuarios)=> console.log(usuarios.map((usuario)=>({...usuario, ativo:'true'})))
AdicionarPropriedade(usuários)

//Luiz - luizngustavo -  Aluno 4 - Responsável por criar a função de adicionar um usuário




//Aluno 5- Responsável por criar a função de remover um usuário

const removerUsuario = () =>{}