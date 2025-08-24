export interface Question {
  id: string;
  label: string;
  placeholder: string;
  answer?: string;
}

export const Question = [
  {
    id: 'title',
    label: 'Qual o nome do projeto?',
    placeholder: 'Ex: ReadGenerate',
  },
  {
    id: 'description',
    label: 'Faça uma breve descrição do projeto',
    placeholder:
      'Ex: Uma ferramenta para gerar arquivos README automaticamente...',
  },
  {
    id: 'link',
    label: 'Qual o link do seu repositório?',
    placeholder: 'Ex: https://github.com/seu-usuario/seu-repo',
  },
  {
    id: 'resources',
    label: 'Quais os principais recursos do projeto?',
    placeholder:
      'Separe por vírgulas. Ex: Geração instantânea, Sem login, Open Source',
  },
  {
    id: 'technologies',
    label: 'Quais tecnologias foram usadas?',
    placeholder: 'Separe por vírgulas. Ex: Angular, TypeScript, Tailwind',
  },
  {
    id: 'prerequisites',
    label: 'Quais são os pré-requisitos para rodar o projeto?',
    placeholder: 'Ex: Node.js, npm ou yarn',
  },
  {
    id: 'installation',
    label: 'Comando para instalar as dependências',
    placeholder: 'Ex: npm install ou yarn',
  },
  {
    id: 'start',
    label: 'Comando para iniciar o projeto',
    placeholder: 'Ex: npm run start ou yarn start',
  },
  {
    id: 'contributing',
    label: 'Como contribuir para o projeto?',
    placeholder: 'Ex: Abra uma issue ou envie um pull request...',
  },
  {
    id: 'license',
    label: 'Qual a licença do projeto?',
    placeholder: 'Ex: MIT',
  },
  {
    id: 'name',
    label: 'Qual o seu nome ou nome da equipe?',
    placeholder: 'Ex: Lucas Lima',
  },
  {
    id: 'contact',
    label: 'Deseja adicionar um link de contato (GitHub, LinkedIn, Email)?',
    placeholder: 'Ex: https://github.com/ilucaslima',
  },
];
