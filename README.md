# Portfólio - Psicóloga

Portfólio profissional responsivo para psicóloga com atendimentos online e presenciais.

## 📁 Estrutura de Arquivos

- `index.html` - Estrutura HTML da página
- `styles.css` - Estilos e layout responsivo
- `script.js` - Funcionalidades interativas (navegação móvel, FAQ, scroll effects)

## 🎨 Paleta de Cores

| Nome | Hex | Uso |
|------|-----|-----|
| **Bege** | `#F5EFE6` | Background principal |
| **Bege Escuro** | `#EDE3D4` | Backgrounds secundários |
| **Petrol** | `#1F4E5F` | Textos títulos, elementos principais |
| **Petrol Claro** | `#2C6E85` | Gradientes, estados hover |
| **Terracota** | `#C4623A` | CTAs, botões, acentos |
| **Terracota Claro** | `#D97C56` | Estados hover de CTAs |
| **Marrom** | `#3A2E2A` | Texto body padrão |
| **Marrom Médio** | `#6B5446` | Textos secundários |
| **Branco** | `#FEFCF9` | Foreground, cards, texto em backgrounds escuros |
| **Cinza** | `#7A6E68` | Textos subtítulos |

## 🔤 Fontes

### Playfair Display
- **Fonte Serif** (elegante, formal)
- **Pesos utilizados:** 400, 600, 700
- **Estilos:** normal, itálico
- **Uso:** Títulos principais, títulos de seções, destaques

### Poppins
- **Fonte Sans-serif** (limpa, moderna)
- **Pesos utilizados:** 300, 400, 500, 600
- **Uso:** Textos body, navegação, botões, elementos gerais

### Fonte Importação
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
```

## 📏 Tamanhos e Tipografia

### Títulos Principais (Playfair Display)

| Elemento | Tamanho | Peso | Uso |
|----------|---------|------|-----|
| **Logo Nome** | 1.15rem | 700 | Logotipo header |
| **Logo CRP** | 0.65rem | 400 | Texto identificação na logo |
| **Hero Title** | clamp(2.2rem, 4vw, 3.4rem) | 700 | Título principal seção hero |
| **Section Title** | clamp(1.8rem, 3vw, 2.6rem) | 700 | Títulos de seções |
| **Card Servico Title** | 1.1rem | 700 | Títulos dos cards de serviço |
| **Stat Num** | 2rem | 700 | Números estatísticas |
| **Depo Quote** | 3rem | 700 | Marcas de citação |

### Textos de Navegação e Botões (Poppins)

| Elemento | Tamanho | Peso | Uso |
|----------|---------|------|-----|
| **Nav Links** | 0.8rem | 500 | Links de navegação |
| **Hero Subtitle** | 0.95rem | 400 | Subtítulo hero section |
| **Body Text (padrão)** | 0.95rem | 400 | Parágrafos principais |
| **Button Primary/Secondary** | 0.85rem | 600 | Textos dos botões |
| **Card Description** | 0.82rem | 400 | Descrições em cards |
| **Footer Text** | 0.82rem | 400 | Texto footer |

### Textos Secundários (Poppins)

| Elemento | Tamanho | Peso | Uso |
|----------|---------|------|-----|
| **Section Label** | 0.7rem | 600 | Labels de seções (SOBRE MIM, SERVIÇOS, etc) |
| **Hero Tag** | 0.72rem | 600 | Tags destacadas |
| **Badge** | 0.72rem | 500 | Badges/badges de categoria |
| **Stat Label** | 0.72rem | 400 | Labels de estatísticas |
| **Card Link** | 0.78rem | 600 | Links dentro de cards |
| **FAQ Question** | 0.88rem | 600 | Perguntas FAQ |
| **Footer Link** | 0.85rem | 400 | Links footer |
| **Depo Autor** | 0.82rem | 600 | Nome do autor depoimento |
| **Depo Type** | 0.7rem | 400 | Tipo/categoria depoimento |

## 🎯 Espaçamento e Layout

### Padding/Margin
- **Seções:** 6rem (top/bottom), 2rem (sides)
- **Container máximo:** 1100px
- **Gap entre items:** varia entre 0.5rem a 5rem dependendo do componente

### Raio de Borda
- **Botões e inputs:** 10-30px (border-radius)
- **Cards:** 14-20px
- **Avatar/elementos circulares:** 50%

## 🔧 Como Usar

1. Certifique-se de que os três arquivos (`index.html`, `styles.css`, `script.js`) estão no mesmo diretório
2. Abra `index.html` em um navegador
3. O arquivo CSS será carregado automaticamente via link no `<head>`
4. As funcionalidades JavaScript (navegação móvel, FAQ accordion) funcionarão assim que a página carregar

## ✨ Funcionalidades

- **Responsivo** - Adapta-se para mobile, tablet e desktop
- **Navegação móvel** - Menu hamburger em telas pequenas
- **FAQ Accordion** - Perguntas e respostas expansíveis
- **Fade-in ao scroll** - Animações de entrada suave
- **Header sticky** - Header fixo com efeito de scroll
- **Formulário de contato** - Feedback visual de envio

## 📱 Breakpoints Responsivos

- **Desktop:** 860px+
- **Tablet:** 500px - 860px
- **Mobile:** < 500px

---

**Criado:** 2025  
**Projeto:** Portfólio Profissional - Camilla Schultz  
**Tecnologias:** HTML5, CSS3, JavaScript (Vanilla)
