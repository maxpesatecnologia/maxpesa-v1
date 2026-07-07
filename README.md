# Grupo Maxpesa — Site Institucional

Site institucional do **Grupo Maxpesa**, empresa de movimentação de cargas, locação de equipamentos e logística pesada. Construído em React + Vite, com suporte a múltiplos idiomas, animações e layout responsivo.

🔗 **Produção:** [maxpesa.com.br](https://www.maxpesa.com.br)

## Stack

- **[React 18](https://react.dev/)** — componentização da UI
- **[Vite 5](https://vitejs.dev/)** — build tool e dev server
- **[React Router 6](https://reactrouter.com/)** — roteamento SPA
- **[Framer Motion](https://www.framer.com/motion/)** — transições de página e animações
- **CSS Modules** — estilos isolados por componente
- **Context API** — internacionalização (i18n) e estado global de idioma

## Funcionalidades

- 🌐 Suporte a 5 idiomas (`pt-BR`, `en`, `es`, `de`, `fr`) via `LanguageContext`
- 📱 Layout 100% responsivo (desktop, tablet e mobile)
- 🎬 Transições animadas entre páginas e revelação de seções ao rolar (`useReveal`)
- 🧭 Menu com dropdown de serviços, adaptado para toque em telas pequenas
- 📰 Blog institucional com páginas de posts individuais
- 📄 Central de certificações com documentos ISO para download
- 💬 Botão flutuante de WhatsApp e formulário de contato

## Estrutura do projeto

```
src/
  assets/            imagens, logos e fotos
  components/        Header, Footer, Topbar, Layout, PageHero, Button,
                      SectionHeader, Breadcrumb, ImgFrame, FeatList, Timeline,
                      EsgItem, BranchCard, ContactForm, Toast, WppButton,
                      LangSwitcher, Splash, Eyebrow
  context/           LanguageContext.jsx (i18n)
  hooks/             useReveal.js, useCounter.js
  pages/             Home, Empresa, Servicos, Frota, Esg, Certificacoes,
                      Blog, Contato, TrabalheConosco, Vendas
  styles/            global.css (design tokens, reset, tipografia)
  App.jsx            definição das rotas
  main.jsx           ponto de entrada
public/
  docs/              certificados ISO (PDF)
```

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18+ e npm.

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento (http://localhost:5173)
npm run dev

# build de produção (gera a pasta dist/)
npm run build

# pré-visualizar o build de produção localmente
npm run preview
```

## Design

- **Cor primária:** vermelho `#E6282B`
- **Tipografia:** Audiowide (hero/logo), Bungee (títulos de seção), Montserrat (corpo de texto)
- **Tokens de design** (cores, espaçamentos, raios, animações) centralizados em `src/styles/global.css`

## Deploy

O projeto gera arquivos estáticos com `npm run build` (saída em `dist/`), podendo ser publicado em qualquer serviço de hospedagem estática (Vercel, Netlify, GitHub Pages, etc.).

---

© Grupo Maxpesa. Todos os direitos reservados.
