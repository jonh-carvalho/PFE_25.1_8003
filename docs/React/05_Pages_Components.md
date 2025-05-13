# 05 - Pages e Components

## Introdução

A organização de uma aplicação **React** pode ser melhorada ao diferenciar **Pages** (páginas) de **Components** (componentes). A distinção entre essas duas categorias é importante para manter o código escalável, reutilizável e de fácil manutenção. Vou explicar a diferença e como você pode organizá-los de forma eficiente.

### Diferença entre **Pages** e **Components**

#### **Pages**

- **O que são**: São componentes que representam rotas individuais da aplicação, geralmente associadas a uma URL específica. Cada **Page** é uma "página" completa e geralmente agrupa vários componentes.

- **Função**: Uma page contém a estrutura e layout principal da página e usa outros componentes para construir sua interface. É responsável por representar uma tela completa da aplicação.
- **Exemplo**: HomePage, AboutPage, ContactPage, DashboardPage, etc.

#### **Components (Componentes)**

- **O que são**: São blocos reutilizáveis menores de interface, que podem ser usados em várias páginas. Componentes são mais modulares e têm uma única responsabilidade, como um botão, um formulário, ou uma tabela.
- **Função**: Eles não estão vinculados a uma URL específica e podem ser combinados dentro de **Pages** ou outros componentes.
- **Exemplo**: Navbar, Footer, Button, Card, Modal, FormField, etc.

### Organização de **Pages** e **Components**

Uma boa prática é criar pastas separadas para **Pages** e **Components** no diretório `src`. Isso ajuda a organizar o código e deixar claro o propósito de cada arquivo.

#### Estrutura de diretório recomendada

```bash
src/
│
├── components/
│   ├── Header.jsx
│   ├── Content.jsx
│   ├── Historia.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

#### Exemplo de uso prático

##### **App.jsx** (App inicial)
```jsx
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css'

function App() {
  
  return (
      <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
         </Routes>
       </Router>
  )
}

export default App
```

##### **HomePage.jsx** (Página)

```jsx
import React from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

function Home() {
    return ( 
    <>
      <h1>Home</h1>

      <Header />
      <Content />
      <Footer />
    </>
 
)}
  export default Home;
```

Aqui, a página **Home** serve como a estrutura principal da página de "Home", e ela reutiliza componentes como **Header**, **Hero**, **Features** e **Footer**. Cada componente pode ser reutilizado em outras páginas, mantendo o código modular.

##### **Header.jsx** (Componente)

```jsx
function Header() {
    return (
    <>
        <h1>Header</h1>
    </>
    )
  }

  export default Header
}
```

O **Header** é um componente que pode ser utilizado em várias páginas, como **Home**, **About** e **Contact**. Ele contém a lógica e a estrutura do menu de navegação.

##### **About.jsx** (Página)

```jsx
import React from 'react';
import Header from '../components/Header';
import Historia from '../components/Historia';
import Footer from '../components/Footer';
function About() {
    return (
    <>
      <Header />
      <Historia />
      <Footer />
    </>)
  }

  export default About;
```

Aqui, a **About** também reutiliza os mesmos componentes de **Header** e **Footer**, mas tem um conteúdo único no corpo da página, como a seção "Historia".

### Resumo da Organização

- **Páginas** (**Pages**) representam **rotas** e normalmente combinam vários **componentes** para formar uma tela completa.
- **Componentes** (**Components**) são elementos mais simples e reutilizáveis que compõem partes da interface.
- Manter pastas separadas para páginas e componentes ajuda na escalabilidade e clareza do código.

Ao seguir essa organização, você mantém o código mais estruturado, fácil de entender e de escalar conforme a aplicação cresce.

##### **Footer.jsx** 
```
function Footer() {
    return (
    <>
        <h1>Footer</h1>
    </>
    )
  }

  export default Footer;
```

##### **Historia.jsx**

```	
function Historia() {
    return (
    <>
        <h1>Historia</h1>
        <p>lipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, perspiciatis nihil fuga quaerat sint ratione sit deleniti non recusandae facere tenetur itaque blanditiis ex laboriosam totam, error labore rem magni.</p>
    </>
    )
  }

  export default Historia
```	

##### **Content.jsx**
```	
function Content() {
    return (
    <>
        <h1>Content</h1>
    </>
    )
  }

  export default Content;
``` 