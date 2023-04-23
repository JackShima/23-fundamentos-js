// https://www.alura.com.br/artigos/strings-com-javascript-o-que-sao-e-como-manipular
// Strings com JavaScript: o que são e como manipulá-las

/* const palavra="alura";
console.log(palavra.length) //5

console.log(palavra.charAt(3)) //r
console.log(palavra[0]) //A
console.log(palavra.indexOf("l")) //1
console.log(palavra.toUpperCase()) //ALURA
console.log(palavra.toLowerCase()) //alura */

/* let frase= "Mergulhando em tecnologia."
console.log(frase.substr(0,16)) // Mergulhando em t */

/* let frase= "Mergulhando em tecnologia."
console.log(frase.slice(0,11)) // Mergulhando */

/* let nome = "André";
let comunicacao = " Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusurario",nome)); */

/* let novaString = "Programe nas principais linguagens e plataformas. Explore linguagens como ";
console.log(novaString.concat("JavaScript,").concat(" Python,").concat(" e C#.")) */

/* let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens) */

let login = "   andre@emailteste.com      ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco); //andre@emailteste.com


//Neste artigo, vimos o que são strings e como podemos manipulá-las usando métodos do Javascript.
//Lembre-se que trabalhar com texto é uma atividade que todas as pessoas que desenvolvem farão em seus códigos em algum momento. Por isso é tão importante conhecer as strings e suas particularidades. E aí, curtiu? Vamos programar!
