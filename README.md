# Inteli - Instituto de Tecnologia e Liderança

# PanPedia
## WiseMeta
### Integrantes:

👤 [Lauro Emmanuel Rafael](https://www.linkedin.com/in/lauroemmanuelrafael/)

👤 [Rafaella Bianca Cavalcante](https://www.linkedin.com/in/rafaella-bianca-cavalcante/)

👤 [Beatriz Amorim Monsanto](https://www.linkedin.com/in/beatriz-monsanto-5a3a83267/)

👤 [Heitor Elias Prudente](https://www.linkedin.com/in/heitorprudente/)

👤 [Lucas da Silva Barbosa](https://www.linkedin.com/in/lucasdasilvabarbosa/)

👤 [Michel Menahem Khafif](https://www.linkedin.com/in/michel-menahem-khafif-512791201/)

👤 [Gustavo Machado Esteves](https://www.linkedin.com/in/gustavo-machado-esteves-453b81248 )

# 📝 Descrição
O grupo WiseMeta está desenvolvendo uma aplicação web inovadora, uma ferramenta de busca em banco de metadados robusta e multifuncional. Esta ferramenta foi concebida para melhorar a usabilidade e eficiência do site de ferramenta de pesquisa de metadados atualmente utilizado pelo Banco Pan.

 **Principais funcionalidades:**

➡️ Filtros avançados

➡️ Ordenação de dados

➡️ Criação de pastas para organização

➡️ Capacidade de favoritar tabelas

➡️ Gerenciamento de alterações sugeridas (para perfis administrativos)

➡️ Solicitação de acesso a tabelas privadas

➡️ Sugerir alterações de tabelas

Nosso objetivo é aumentar a produtividade dos colaboradores do Banco Pan, disponibilizando duas versões do sistema. Uma com funções administrativas ampliadas e a outra, com funcionalidades básicas para os demais colaboradores.

# 📁 Estrutura de pastas
```
|--> data
  |--> Tabela_Pan_Pedia.db
  |--> Tabela_Pan_Pedia.sql
|--> documentos
 | T9_G1_Web_application_document.pdf
 | T9_G1_Web_application_document.docx
|--> node_modules
|--> public
  |--> css
  |--> images
|--> src
 |--> backend
 |--> utils
 | app.js 
|--> views
 |--> frontend
| env.txt
| LICENCE.txt
| package.json
| package-lock.json
| README.md
```
Dentre os arquivos presentes na raiz do projeto, definem-se:

**data:** pasta que armazena o banco de dados em dois formatos: .db e .sql)

**documentos:** aqui estarão todos os documentos do projeto. Há também uma pasta denominada outros onde estão presentes aqueles documentos complementares ao web application document.

**public:** contém todas as imagens relacionadas ao projeto como um todo (por exemplo imagens do sistema, do grupo, logotipos e afins) e uma pasta com todos os arquivos  de estilos css.

**src:** nesta pasta encontra-se todo o código fonte do sistema do lado do servidor (existem duas subpastas backend e utils que contêm, respectivamente, o código do servidor e o código que encontra o banco de dados utilizado).

**views:** nesta pasta encontra-se todo o código fonte do sistema do lado do cliente (todos os aquivos referentes à página web se encontram na subpasta frontend).

**README.md:** arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

# 💻 Configuração para desenvolvimento
Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.
<br>
Baixar e instalar o node.js: https://nodejs.org/pt-br/ (versão 16.15.1 LTS)
Clone o repositório em questão.
No modo administrador, abra o "prompt de comando" ou o "terminal" e, após, abra a pasta "src/backend" no diretório raiz do repositório clonado e digite o segundo comando:
```
npm install
```
Isso instalará todas as dependências definidas no arquivo package.json que são necessárias para rodar o projeto. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:
```
npm start
```
Agora você pode acessar a aplicação através do link http://localhost:1234/
O servidor está online.



# 🗃 Histórico de lançamentos
0.2.1 - 25/01/2022 <br>
Atualização de documentos (código do módulo permanece inalterado). <br>
0.2.0 - 15/01/2022 <br>
Remove setDefaultXYZ() <br>
Adiciona init() <br>
0.1.1 - 11/01/2022 <br>
Crash quando chama baz() <br>
0.1.0 - 10/01/2022 <br>
O primeiro lançamento adequado <br>
Renomeia foo() para bar() <br>
0.0.1 - 01/01/2022 <br>
Trabalho em andamento <br>

# 📋 Licença/License

MODELO GIT INTELI by Inteli, Beatriz Amorim Monsanto, Gustavo Machado Esteves, Heitor Elias Prudente, Lauro Emmanuel Assunção Rafael, Lucas da Silva Barbosa, Michel Khafif, Rafaella Bianca Cavalcante is licensed under Attribution 4.0 International.

# 🎓 Referências
Aqui estão as referências usadas no projeto:

https://creativecommons.org/share-your-work/

