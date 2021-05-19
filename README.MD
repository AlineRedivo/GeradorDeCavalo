Inicialmente foi criado o arquivo index.js, para depois a criação dos pacotes.

Foi inslada as biblioteca "express", "axios" e "node-html-parser",
através de comandos pelo terminal, como  também foi instalado o pacote
"package.json" atravez do comedando "npm init".

foi inicializado as bibliotecas e instaciadas em uma variavel.

Também foi criados 2 rotas "/cavalo" e "/busca".

Rota "/cavalo": nessa rota foi iniciado um vetor vazio para sua população,
uma variavel para guarda o endereço do site e mais outra para fazer
a requizição da url, fazendo o uso da primeira biblioteca instalada (axios).

usando o comando "axios.get" na url para fazer a requisição, entao guardamos
a requisição em uma variavel, após isso chamamos a requisição utilizando ".then",
visando que é uma promessa, passamos uma function como parametro e uma resposta
como parametro da function.

dentro da requisição iniciamos a variavel "root" com a função "parse"(função da biblioteca "node-html-parser"),
onde conseguimos extrair toda parte HTML do site, após isso buscamos
a classe ".menulink" onde contém os dados que necessito, guardamos em uma variavel
e utilizamos o "map" para percorrer esse elemento e extrair os dados necessários.
foi montado um objeto json retornando para uma váriavel (cavalos)
e então enviado como resposta para o cliente.

Rota "'/busca'": utilizamos o mesmo conceito de requisição e população da rota anterior, porém
utilizamos uma estrutura de repetição para percorrer todos os dados, onde dentro da estrutura foi feito
uma estrutura de decição, onde com a query capturada no inicio da rota, comparamos com o dado 
populado, se for igual a query então é enviada como resposta ao cliente, caso contrario irá mostrar
um vetor vazio.

Temos também uma rota de escuta, para verificação do servidor.