# Estrutura de arquivos — R&R Contabilidade

## Estrutura

```
src/
├── styles/
│   └── tokens.css              ← variáveis globais (:root) — cores, fontes, layout
│
├── components/
│   ├── ui/                     ← componentes genéricos e reutilizáveis
│   │   └── Card/
│   │       ├── Card.jsx
│   │       └── Card.module.css
│   │
│   └── sections/               ← seções específicas de página
│       └── Hero/
│           ├── Hero.jsx            (era Content.jsx)
│           ├── Hero.module.css     (era Content.module.css)
│           └── Hero.data.jsx       (era diferenciais.jsx)
```

---

## O Projeto está sendo construido parte a parte
### 1º Header
### 2º Hero

