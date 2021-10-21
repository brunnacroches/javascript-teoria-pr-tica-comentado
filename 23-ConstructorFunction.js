//03:23:48 - Constructor Function

//Criar um objeto postagem
// titulo, mensagem, autor, vizualizações, comentários, estaaovivo

function Postagem(titulo,mensage,autor) { // vizualizacao tem que ser algo dinamico e para notar os parametro => 3 é o máximo
  this.titulo = titulo,
  this.mensagem = mensagem,
  this.autor = autor,
  this.visualizacoes= 0,
  this.comentarios = [],
  this.estaAoVivo = false
}

let postagem = new Postagem('a', 'b', 'c');
console.log(postagem);

// ==> this  <== > serve para poder referenciar aquele objeto (o objt atual que estou manipulando)
