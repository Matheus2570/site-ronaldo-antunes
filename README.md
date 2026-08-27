# Ronaldo Antunes | Engenharia e Administração de Obras

Site React + Vite de uma página, pronto para teste.

## Rodar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## O que você precisa trocar antes de publicar

### 1. WhatsApp
Abra `src/data/siteData.js` e altere:

- `whatsapp`
- `whatsappDisplay`

### 2. Fotos do projeto
As 17 fotos atuais são genéricas e carregadas pela internet.

O jeito recomendado é colocar as 17 fotos reais em:

`src/assets/projeto/`

Exemplo:

- `foto-01.jpg`
- `foto-02.jpg`
- ...
- `foto-17.jpg`

Depois, em `src/data/siteData.js`, substitua as URLs pelos imports locais. Se preferir, você também pode manter URLs externas.

### 3. Serviços
Os serviços estão centralizados em `src/data/siteData.js`. Ajuste os nomes e textos de acordo com o que Ronaldo realmente oferece.

### 4. CREA
O site não inventa nem exibe número de CREA. Se ele quiser mostrar, adicione somente o número real.

## Estrutura

- `src/App.jsx`: estrutura das seções e interações
- `src/styles.css`: todo o visual/responsividade
- `src/data/siteData.js`: dados, serviços, contato e fotos
- `src/components/Icons.jsx`: ícones em SVG sem biblioteca externa
- `vercel.json`: headers básicos de segurança para Vercel
- `public/_headers`: headers básicos para hospedagens compatíveis

## Observação

O projeto foi montado para não inventar dezenas de obras ou clientes. O posicionamento atual é de portfólio em expansão, destacando experiência em coordenação/manutenção e um projeto residencial inicial.
