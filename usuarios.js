//Grupo 8
let usuarios = require('./database/users.json');

//Edson - emoreirasj - Aluno 1- Responsável por criar o projeto no git e dar acesso aos outros
//Responsável por criar a função de listar todos os usuários acima de 18 anos.

const maiores = () => console.log(usuarios.filter(idade => idade.idade > 18))

maiores()
//Rubio - Rubio01 - Aluno 3 - Responsável por criar a função de listar todos os usuários inserindo mais uma informação para cada de ativo: true
AdicionarPropriedade =(usuarios)=> console.log(usuarios.map((usuario)=>({...usuario, ativo:'true'})))
AdicionarPropriedade(usuários)

//Luiz - luizngustavo -  Aluno 4 - Responsável por criar a função de adicionar um usuário

const adicionarUsuario = (usuario) => {
    
    const usuarioParaAdicionar ={
        ...usuario,
        ativo: true
    }

    usuarios.push(usuarioParaAdicionar)
    
    return usuarioParaAdicionar
}
let usuariosParaAdicionar ={
    "id": 7,
    "nome": "luiz gustavo",
    "idade": 22,
    "sexo": "M",
    "email": "luizgustavo@gmail.com",
    "telefone": "999999999"
  }

adicionarUsuario(usuariosParaAdicionar)
console.log(usuarios)

//Aluno 5- Responsável por criar a função de remover um usuário
