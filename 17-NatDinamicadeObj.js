//02:41:09 - Natureza Dinâmica de Objetos

const mouse = {
    cor: 'red',
    marca: 'dazz'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function () {
    console.log('mudando DPI');
}
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);



// é totalmente dinâmico o objeto sendo possível adicionar ou tirar propriedades dentro dele   