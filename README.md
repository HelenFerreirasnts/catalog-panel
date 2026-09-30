# Catálogo

Painel interativo em React + Vite que consulta séries na API pública do [TVMaze](https://www.tvmaze.com/api). A API não pede chave.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que o Vite mostrar, em geral `http://localhost:5173`.

## O que a aplicação faz

- Carrega uma seleção de séries.
- Permite buscar pelo nome.
- Filtra por gênero e status.
- Ordena por nota ou nome.
- Salva favoritos neste navegador.
- Abre os detalhes de uma série.
- Mostra carregamento, erro e lista vazia.

## Organização


```text
src/
├── services/          chamada axios e mapeamento da API
├── hooks/             React Query e favoritos
├── components/
│   ├── ui/            componentes do shadcn
│   └── templates/     header, footer e painel
└── util/              formatação
```
