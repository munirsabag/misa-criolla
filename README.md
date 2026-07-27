# Misa Criolla — Site

Site institucional do espetáculo Misa Criolla com Jean William.

## Como rodar localmente

Abra o Terminal nesta pasta e rode:

```bash
npm install
npm run dev
```

Depois abre o navegador em **http://localhost:4321**

## Como editar o conteúdo

Quase tudo no site é editável em **3 arquivos**:

### 1. Textos gerais — `src/data/site.js`

Edite este arquivo para mudar:
- Manifesto / textos do "sobre"
- Ficha técnica (nomes, funções, bios)
- Lista de parceiros e logos
- E-mail / telefone da assessoria

Basta abrir o arquivo num editor de texto qualquer, mudar o que precisa, salvar.

### 2. Agenda de shows — `src/content/agenda/`

Cada arquivo `.json` nessa pasta é um show. Pra adicionar um novo:

1. Duplique um dos existentes (ex: `belo-horizonte.json` → `rio-de-janeiro.json`)
2. Edite os campos:

```json
{
  "cidade": "Rio de Janeiro",
  "estado": "RJ",
  "data": "2026-07-15",
  "hora": "20h00",
  "local": "Teatro Municipal",
  "endereco": "Praça Floriano, s/n - Centro",
  "coro": "Coral X",
  "ingressos": "https://link-do-sympla",
  "ingressoTipo": "Gratuito",
  "ordem": 3
}
```

Os shows aparecem ordenados por data automaticamente.

### 3. Imagens — `public/images/`

- **`jean-william.jpg`** — foto principal da home (use a foto em alta resolução que aparece nas peças, recortada em retrato)
- **`galeria/`** — fotos da galeria, uma pasta por evento (veja abaixo)
- **`logos/`** — logos dos parceiros (PNG com fundo transparente é o ideal)
- **`og-image.jpg`** — imagem que aparece quando o site é compartilhado em redes sociais (1200x630px)

### 4. Galeria — `public/images/galeria/`

A galeria tem um carrossel por evento. Cada carrossel lê uma pasta:

```
public/images/galeria/
├── bh/                  ← Belo Horizonte (o vídeo do YouTube é sempre o 1º slide)
├── concerto-salvador/   ← Concerto em Salvador
└── workshop-salvador/   ← Workshop em Salvador
```

**Pra adicionar fotos:** jogue os arquivos na pasta do evento, nomeados
`foto-01.jpg`, `foto-02.jpg`, `foto-03.jpg`... nessa ordem de exibição.
O carrossel lê a pasta sozinho — não precisa mexer em código nenhum.

Se uma pasta estiver vazia ou não existir, o carrossel daquele evento
simplesmente não aparece (o de BH continua aparecendo por causa do vídeo).

**Antes de subir, redimensione as fotos** para no máximo 1800px no lado maior,
qualidade ~80%. Fotos direto da câmera (5–10 MB cada) deixam o site lento.

**Pra criar um evento novo** (ex: Rio de Janeiro): crie a pasta
`public/images/galeria/rio/`, coloque as fotos, e adicione o bloco
correspondente na lista `eventos` no topo de `src/components/Galeria.astro`
— é só copiar um dos blocos existentes e trocar o nome.

## Estrutura

```
misa-criolla/
├── src/
│   ├── components/      ← Cada seção do site (Hero, Sobre, Agenda...)
│   ├── content/agenda/  ← Os shows (um JSON por show)
│   ├── data/site.js     ← Textos e dados centralizados
│   ├── layouts/         ← Layout base (head, header, footer)
│   ├── pages/           ← Páginas do site
│   └── styles/          ← CSS global
└── public/
    ├── images/          ← Todas as imagens
    └── favicon.svg
```

## Publicar no ar

Quando estiver pronto, conecte o repositório no Cloudflare Pages.
Configurações:
- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`

O site sobe automaticamente. SSL e CDN inclusos, grátis pra sempre.
