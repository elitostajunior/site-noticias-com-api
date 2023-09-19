# Projeto "World News"

Fiz esse projeto para fixar meus conhecimentos em JavaScript Vanilla, React e sobre o consumo de API. Neste projeto, usei a API da "News API" (https://newsapi.org/) e fiz uma página dinâmica, onde a galeria de notícias muda de acordo com a categoria selecionada na mesma página HTML, além de pesquisar palavras e retornar resultados na caixa de busca.

E a estilização da página, eu usei o framework Bootstrap para fazer um design responsivo com todos os tipos de telas. Pra quem se aconstumou a utilizar o CSS puro, inicialmente foi um pouco difícil entender o uso das ferramentas, mas a medida que fui entendendo cada recurso e aplicando no projeto, pude ver que o resultado ficou muito bom.

**Atualização:** Diante do problema que tive para disponibilizar o projeto no ambiente de produção, eu acabei fazendo uma nova versão deste projeto em React, e acabou sendo interessante colocar as duas versões dentro do repositório para ver como foi feito o processo de programação em cada uma das tecnologias. Eu pessoalmente gostei da versão React, por ter um código script mais simples e de fácil compreensão (além de ter recursos que tornam a reutilização do código mais fácil), mas ambos produziram o mesmo resultado.

### Tecnologias utilizadas

#### Na versão Vanilla:

- HTML
- JavaScript 
- Bootstrap

#### Na versão React:

- React
- Axios
- Bootstrap

### Instruções de uso:

Infelizmente o "News API" não permite a reprodução dos seus dados em ambientes de produção de forma gratuita (fiz várias tentativas de deploy e nada estava dando certo). Então, a única forma de ver o projeto funcionando é rodando o projeto internamente no sistema.

Em ambos os métodos, faça o clone do repositório usando o seguinte comando no prompt de comando de sua preferência (ex: Git Bash):
```
git clone https://github.com/elitostajunior/site-noticias-com-api.git
```

#### Na versão do projeto em JavaScript Vanilla

1 - Acesse a pasta "Versão JavaScript Vanilla" no prompt:
```
cd Versão\ JavaScript\ Vanilla/
```

2 - Para ver a demonstração do projeto, acesse diretamente o arquivo "index.html" do navegador; ou pode acessar o projeto pelo VS Code no referido arquivo usando a extensão "Live Server". 

#### Na versão do projeto em React

1 - Acesse a pasta "Versão React" no prompt:
```
cd Versão\ React/
``` 

3 - Instale o npm com o seguinte comando, para instalar a pasta "Node Modules":
```
npm install
```

4 - Para ver a demonstração do projeto, é só executar seguinte comando e clicar no link gerado para visualização no terminal do prompt de comando (exemplo: `Local: http://localhost:{numeroDaPorta}/`):
```
npm run dev
```

### Imagens do projeto:

![view-desktop](https://github.com/elitostajunior/site-noticias-com-api/assets/89365251/7b90c25c-d7b8-4c1c-bc8a-06250ea5d07e)
![view-mobile](https://github.com/elitostajunior/site-noticias-com-api/assets/89365251/142d8128-649b-4ab5-9725-d8b7b4b0fd19)

