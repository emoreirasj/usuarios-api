//Grupo 8
let usuarios = require('./database/users.json');

//Edson - emoreirasj - Aluno 1- Responsável por criar o projeto no git e dar acesso aos outros
//Responsável por criar a função de listar todos os usuários acima de 18 anos.

console.log('Usuários acima de 18')
console.log()

const maiores = () => console.log(usuarios.filter((usuario) => usuario.idade > 18))

maiores()   

//Rubio - Rubio01 - Aluno 3 - Responsável por criar a função de listar todos os usuários inserindo mais uma informação para cada de ativo: true


console.log('Lista com ativo')

const listaAtivo = () => { 
    usuarios.map((usuario) => ({...usuario, ativo: 'true'}))
return listaAtivo
}

console.log(listaAtivo)

//Luiz - luizngustavo -  Aluno 4 - Responsável por criar a função de adicionar um usuário

console.log('Usuário adicionado')

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

const removerUsuario = (idUsuario) => { 
    const usuario = usuarios.findIndex((usuario) => usuario.id ==idUsuario)

    if(usuario.index < 0){
        console.log("Usuário não encontrado")
        return;
    } 

    usuarios.splice(usuarioIndex, 1)

}

removerUsuario(1)
console.log("Usuário removido: ", usuarios);
