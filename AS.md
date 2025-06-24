---
id: AS
title: Avaliação Substitutiva
---
# 🏙️ **Hub de Serviços Comunitários**

**Missão:** Facilitar que moradores encontrem rapidamente serviços locais (mercados, farmácias, oficinas, autônomos, etc.), promovendo a economia local.

---
# **Fases da Avaliação**

## **0. Configuração Inicial (30 minutos)**

**Objetivo:** Preparar o ambiente de desenvolvimento, repositório GitHub e documentação online.

### **Atividades:**

* Clonar o repositório inicial fornecido pelo avaliador (repositório start no GitHub).
    * [repositório start](https://github.com/jonh-carvalho/PBE_25.1_8002_AS) - Convite enviado para ser um colaborador do repositório.

* Configurar ambiente de desenvolvimento local:
    * Python + Virtualenv
    * Instalação das dependências do projeto

* Criar um **site de documentação usando MkDocs** 'mkdocs new .'

    * Página inicial descrevendo o projeto.
    * Publicar a documentação no GitHub Pages 'mkdocs gh-deploy'

* Configurar o **GitHub Project** (Kanban):

    * Colunas sugeridas: `Backlog`, `Em desenvolvimento`,  `Concluído`.
  
* Criar **Issues no GitHub** para cada tarefa relevante:

    1. Criar Issue para configuração do ambiente local (Python, virtualenv, dependências).
    2. Criar Issue para inicialização do MkDocs e publicação da documentação.
    3. Criar Issue para configuração do GitHub Project (Kanban).
    4. Criar Issue para cadastro inicial dos Epics, Features e User Stories.
    5. Criar Issue para planejamento dos sprints e definição do backlog.
    6. Criar Issue para criação dos componentes principais (Header, Footer, ServiceCard).
    7. Criar Issue para implementação da página Home com listagem de serviços.
    8. Criar Issue para filtro por categoria e busca por nome.
    9. Criar Issue para página de detalhes do serviço.
    10. Criar Issue para estrutura de navegação e interface.
    11. Criar Issue para documentação técnica e guia do usuário.

### **Entregáveis:**

* Repositório GitHub atualizado com Issues criadas.
* Site da documentação (MkDocs via GitHub Pages).
* GitHub Projects com tarefas.


## **1. Concepção Ágil com Design Thinking + Scrum** (1h20min)

**Objetivo:** Compreender o problema, definir requisitos e mapear os atores.

### **Atividades:**

* Descrição do problema (documentar no MkDocs).
* Lista de requisitos funcionais e não funcionais.
* Atores principais:

### **Design Thinking (30 min iniciais)**

1. **Empatia (5 min)** — Quem são os usuários?
   ➝ Moradores que precisam de serviços locais e comerciantes que querem divulgar.
2. **Definição (5 min)** — Problema-chave:
   ➝ “Como podemos facilitar o acesso rápido e fácil aos serviços locais da comunidade?”
3. **Ideação (10 min)** — Funcionalidades principais.
4. **Prototipação (aplicada no desenvolvimento dos sprints)**.
5. **Teste (ocorre ao final de cada sprint).**

---

### **Epics, Features e User Stories(US)** (30 min)

### **Epic 1: Catálogo de Serviços**

**Feature 1.1: Listagem de Serviços**

      *  **US 1.1.1:** -

**Feature 1.2: Filtro e Busca**

      *  **US 1.2.1:** - 
      *  **US 1.2.2:** -

### **Epic 2: Detalhes dos Serviços**

**Feature 2.1: Página de Detalhes**

      * **US 2.1.1:** - 

### **Epic 3: Navegação e Interface**

**Feature 3.1: Estrutura de Navegação**

      * **US 3.1.1:** - 

### **Epic 4: Documentação e Deploy**

**Feature 4.1: Documentação Técnica e Funcional**

   * **US 4.1.1:* -
  
**Feature 4.2: Deploy**
     * **US 4.2.1:** - 


### **Entregáveis:**

* Documento no MkDocs: `docs/DesignThinking/5w2h.md`, `docs/DesignThinking/DesignThinking.md`, `docs/DesignThinking/UserStories.md`.
* Issues no GitHub: `docs/DesignThinking/5w2h.md`, `docs/DesignThinking/DesignThinking.md`, `docs/DesignThinking/UserStories.md`.
* Repositório GitHub atualizado com Issues criadas.

---
## **2. Elaboração (50 minutos)**

**Objetivo:** Planejar o desenvolvimento

### **Atividades:**

## **Planejamento dos Sprints (2 x 2 horas)**

| Fase                              | Tempo Estimado | Sprint |
| --------------------------------- | -------------- | ------ |
| 🧠 Design Thinking + Kickoff      | 30 min         | Pré    |
| 🔧 Configuração do Projeto        | 15 min         | 1      |
| 🔨 Implementar Header e Navegação | 20 min         | 1      |
| 🔨 Implementar ServiceCard        | 20 min         | 1      |
| 🔨 Implementar Página Home        | 30 min         | 1      |
| 🔍 Filtro por Categoria           | 20 min         | 1      |
| 🔍 Busca por Nome                 | 15 min         | 1      |
| 🔎 Página de Detalhes             | 30 min         | 2      |
| 🎨 Refinamento da Interface       | 20 min         | 2      |
| 📄 Criação do MKDocs              | 20 min         | 2      |
| 🔗 Deploy (GitHub Pages/Vercel)   | 10 min         | 2      |
| ✅ Review + Retrospectiva          | 15 min         | 2      |

---

## **Sprint 1 – Catálogo e Funcionalidade Principal (1h50min)**

### **Objetivo:**

Ter um catálogo funcional com busca e filtros.

### **Backlog Sprint 1:**

1. Configurar ambiente Vite + React.
2. Criar navegação (`Header.jsx`, `Footer.jsx`).
3. Criar componente `ServiceCard.jsx`.
4. Criar página `Home.jsx` com listagem de serviços mockados.
5. Implementar filtro por categoria (`FilterBar.jsx`).
6. Implementar busca por nome (`SearchBar.jsx`).

### **Entrega:**

* Catálogo navegável com busca e filtros funcionando.

---

## **Sprint 2 – Detalhes, Refinamento e Documentação (2h)**

### **Objetivo:**

Aprimorar a experiência, criar documentação e disponibilizar o app.

### **Backlog Sprint 2:**

1. Criar página `ServiceDetails.jsx` (detalhes do serviço).
2. Refinar estilos e responsividade.
3. Criar documentação no MKDocs (guia do usuário, desenvolvedor e arquitetura).
4. Fazer deploy no GitHub Pages ou Vercel.
5. Review e Retrospectiva.

### **Entrega:**

* Documentação Completa e publicado online.

---

## **3. Construção (1 hora e 40 minutos)**

**Objetivo:** Construir o app.

### **Atividades:**

1. Configurar ambiente Vite + React.
2. Criar navegação (`Header.jsx`, `Footer.jsx`).
3. Criar componente `ServiceCard.jsx`.
4. Criar página `Home.jsx` com listagem de serviços mockados.
5. Implementar filtro por categoria (`FilterBar.jsx`).
6. Implementar busca por nome (`SearchBar.jsx`).
7. Criar página `ServiceDetails.jsx` (detalhes do serviço).
8. Refinar estilos e responsividade.
9. Criar documentação no MKDocs (guia do usuário, desenvolvedor e arquitetura).

## **Estrutura Recomendável do GitHub Project:**

| To Do                          | In Progress        | Done            |
| ------------------------------ | ------------------ | --------------- |
| Criar projeto com Vite + React | Página Home        | Header/Footer   |
| Criar componente ServiceCard   | Implementar filtro | ServiceCard     |
| Implementar busca              | Página de detalhes | Página Home     |
| Criar MKDocs                   | Deploy             | Busca/Filtro    |

---

## **Modelo de Documentação no MKDocs:**

* **Home:** Visão geral do projeto.
* **Design Thinking:** 5W2H + Design Thinking + User Stories. **
* **Guia do Usuário:** Como navegar no app.
* **Guia do Desenvolvedor:** Setup, estrutura de pastas, padrões adotados.

---

## **Resumo Visual da Linha do Tempo:**

```
| Pré-Sprint | Sprint 1                           | Sprint 2                           |
|-------------|------------------------------------|-------------------------------------|
| Design Think| Catálogo, busca e filtro           | Detalhes, documentação, deploy      |
| Kickoff     | Navegação e estrutura básica       | Refinamento visual e publicação     |
```

### **Entregáveis:**

* Repositório GitHub atualizado com Issues criadas.
* Site da documentação (MkDocs via GitHub Pages).
* GitHub Projects com tarefas.
* App funcional.
  
## **4. Transição (10 minutos)**

**Objetivo:** Testar, documentar e preparar para entrega.

### **Atividades:**

* Implementar as funcionalidades principais do app conforme o backlog dos sprints.
* Desenvolver os componentes React: Header, Footer, ServiceCard, FilterBar, SearchBar e ServiceDetails.
* Integrar a navegação entre páginas (Home e Detalhes do Serviço).
* Utilizar dados mockados para exibir a lista de serviços.
* Aplicar estilos e garantir responsividade da interface.
* Realizar testes manuais das funcionalidades (navegação, busca, filtros, detalhes).
* Atualizar a documentação técnica e do usuário no MkDocs durante o desenvolvimento.

## **Modelo de Checklist Geral de Entrega**

| Item                                   | Obrigatório | Entregue |
| -------------------------------------- | ----------- | -------- |
| App funcional (catálogo, busca, filtro, detalhes) | ✔️         | ⬜        |
| Componentes React implementados (Header, Footer, ServiceCard, FilterBar, SearchBar, ServiceDetails) | ✔️         | ⬜        |
| Navegação entre páginas funcionando    | ✔️         | ⬜        |
| Estilos aplicados e responsividade     | ✔️         | ⬜        |
| Testes manuais realizados              | ✔️         | ⬜        |
| Documentação técnica (guia do usuário, desenvolvedor, arquitetura) no MkDocs | ✔️         | ⬜        |
| Deploy realizado (GitHub Pages/Vercel) | ✔️         | ⬜        |
| Issues criadas e organizadas no GitHub | ✔️         | ⬜        |
| GitHub Project atualizado              | ✔️         | ⬜        |

---
