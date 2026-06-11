# Atividade-3

## Descrição do Desafio
Este projeto tem como objetivo de ensino pedagogico, a funcionalidade dele é adicionar, deletar e ver os usuario cadastrados.
Link do site é : <h3>Link do site: <a href="">Atividade 3</a></h3>

## Tecnologias utilizadas
O projeto tem como objetivo educacional e por isso não utiliza frameworks, as tecnologias utilizadas foram:
- **Front-end:** HTML5, CSS3 e JavaScript (Puro/Vanilla).
- **Back-end:** Node.js para exposição de APIs.
- **Banco de Dados:** PostgreSQL (Uso de DDL e DML explícitos).0
  
## 📂 Estrutura do Projeto

A organização segue o padrão de camadas para garantir separação de responsabilidades e facilitar a manutenção:

```bash
├── Public/
    ├── assets          #Fica os arquivos que compoem a pagina HTML
        ├── js/          #Fica os arquivos javascript
        ├── css/         #Fica os arquivos css
        ├── img/         #Fica as imagens
    ├── pages/           #Fica as paginas HTML
├── src/
│   ├── database/       # Configuração e conexão com PostgreSQL (db.js)
│   ├── infra/          # Automação de schema e carga inicial (scripts SQL)
│   ├── routes/         # Definição de rotas e exposição de endpoints
│   └── server.js       # Inicialização do servidor Express
├── .env.example        # Modelo de variáveis de ambiente
├── package-lock.json
├── package.json        #configuração para execultar o site e os nomes dos pacotes instalado
└── README.md

```
## Procedimento para a uso do site Mega Sena
### Instalação do softwares
- **Visual Code** Local que faz o programa.
- **Node.js**  Interpretador do algoritimos que le e execulta o site.
- **PostgresSQL** Banco  de dados que os dados do site esta.

### Obtendo o site atraves do git
```bash
git clone https://github.com/ThiagoDT/Atividade-3.git
cd Atividade-3
```

### Variavel de ambiente
```.env
PORT=3000
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=senha do banco
POSTGRES_DB=nome do banco de dados
POSTGRES_PORT=5432
```
### Instalação dos pacotes do sistema e inserção dos dados no banco de dados

```bash
npm i
npm run db:init
```
### Executando o site em  modo desenvolverdor
```bash
npm run dev
```
OU
### Executando o site em  mode finalizado
```bash
npm run start
```
## Imagens do Site em funcionamento
<h4><img src="https://github.com/ThiagoDT/Atividade-3/blob/main/Capturas-de-Telas/image.png](https://github.com/ThiagoDT/Atividade-3/blob/main/Capturas%20de%20Telas/image.png" alt="Imagem do site com a ultimo sorteio"><br>Imagem do site com usuarios cadastrado</h4>
<br>

