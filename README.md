# Exercício Prático: Análise de Qualidade de Software
## Disciplina: Qualidade de Software

---

## 📋 Objetivos de Aprendizagem

Ao final deste exercício, o aluno será capaz de:
- Identificar características de código de qualidade em aplicações reais
- Analisar arquiteturas de software e seus benefícios
- Compreender a importância de testes, documentação e boas práticas
- Implementar melhorias de performance em sistemas existentes

---

## 🎯 Parte 1: Análise da Aplicação

Você irá analisar uma aplicação full-stack (frontend + backend) disponível no GitHub que demonstra diversas práticas de qualidade de software.

### **Backend - Análise Inicial**

#### 1. **Linguagem de Programação**
- Qual linguagem de programação o backend utiliza?
- Quais são as vantagens dessa linguagem para este tipo de aplicação?

#### 2. **Configuração e Execução**
- Como clonar o repositório do backend?
- Quais são os passos necessários para instalar as dependências?
- Como executar a aplicação em ambiente de desenvolvimento?
- Existe um arquivo de variáveis de ambiente? Quais configurações são necessárias?

#### 3. **Arquitetura de Software**
- Qual padrão arquitetural foi implementado? (Dica: observe a estrutura de pastas)
- Explique o papel de cada camada: `domain`, `application`, `infra`
- Por que essa separação é importante para a qualidade do código?
- Quais são os endpoints da API disponíveis?
- Como a aplicação implementa a inversão de dependências?

#### 4. **Banco de Dados**
- Qual banco de dados a aplicação utiliza por padrão?
- Descreva a estrutura das tabelas do banco de dados
- Como o código desacopla a lógica de negócio da tecnologia de banco de dados?
- Existe algum mecanismo de migração de dados?

#### 5. **Funcionalidades**
- Liste todas as funcionalidades disponíveis na aplicação
- Quais operações CRUD estão implementadas?

#### 6. **Testes Automatizados**
- A aplicação possui testes? De quais tipos? (unitários, integração, e2e)
- Como executar a suite de testes?
- Como gerar o relatório de cobertura de código (coverage)?
- Qual a porcentagem de cobertura? Isso é suficiente?

#### 7. **Qualidade de Código - Linting**
- O que é linting e qual sua importância para a qualidade do código?
- Qual ferramenta de lint está configurada no projeto?
- Como executar a verificação de lint?
- Quais regras de estilo estão sendo aplicadas?

#### 8. **Pergunta Avançada**
- Para rodar a aplicação com PostgreSQL em vez de SQLite, quais mudanças seriam necessárias?
- Isso demonstra qual princípio de qualidade de software?

---

### **Frontend - Análise Inicial**

#### 1. **Linguagem e Framework**
- Qual linguagem/framework o frontend utiliza?
- Por que essa escolha é adequada para aplicações modernas?

#### 2. **Configuração e Execução**
- Como clonar o repositório do frontend?
- Como instalar as dependências?
- Como executar a aplicação em modo de desenvolvimento?
- Como fazer o build para produção?

#### 3. **Arquitetura e Estrutura**
- Qual padrão de organização de código foi utilizado?
- Explique a estrutura de pastas: `components`, `modules`, `lib`
- Por que separar código em módulos é uma boa prática?

#### 4. **Design UI/UX**
- Qual estratégia de design foi utilizada? (CSS puro, framework, biblioteca de componentes)
- A aplicação é responsiva? Como foi implementado?
- Identifique componentes reutilizáveis no projeto

#### 5. **Integração com Backend**
- Como o frontend se comunica com o backend?
- Onde estão configuradas as URLs da API?
- Como os erros de API são tratados?

#### 6. **Funcionalidades**
- Quais funcionalidades estão disponíveis na interface?
- Como a aplicação gerencia o estado dos dados?

#### 7. **Testes**
- Existem testes no frontend?
- Que tipos de testes estão implementados?
- Como executar os testes?
- Como verificar a cobertura de código?

#### 8. **Qualidade de Código**
- Existe configuração de lint/prettier?
- Como executar a verificação de qualidade?
- Quais padrões de código estão sendo seguidos?

---

## 🚀 Parte 2: Implementação de Melhoria

### **Issue: Sistema de Paginação**

**Contexto:** A aplicação atual retorna todos os registros de uma vez, o que pode causar problemas de performance quando o volume de dados aumenta.

**Tarefa:** Implementar um sistema de paginação completo (backend + frontend) para melhorar a performance da aplicação.

#### **Requisitos Backend:**
1. Modificar o endpoint GET para aceitar parâmetros:
   - `page` (número da página, padrão: 1)
   - `limit` (itens por página, padrão: 10)
2. Retornar metadados da paginação:
   - Total de itens
   - Total de páginas
   - Página atual
   - Itens por página
3. Implementar a paginação na camada de repositório
4. Adicionar testes para o novo comportamento

#### **Requisitos Frontend:**
1. Criar componentes de paginação reutilizáveis
2. Implementar controles de navegação (próxima, anterior, ir para página)
3. Exibir informações sobre a paginação atual
4. Manter a experiência do usuário fluida

#### **Entrega Esperada:**
- [ ] Fork do repositório original
- [ ] Branch com nome `feature/paginacao`
- [ ] Código implementado e funcionando
- [ ] Testes passando (incluindo novos testes)
- [ ] README atualizado com a nova funcionalidade
- [ ] Pull Request com descrição detalhada das mudanças

---

## 🏆 Parte 3: Avaliação de Qualidade

### **Responda: Por que esta aplicação demonstra qualidade de software?**

Analise e descreva como a aplicação implementa os seguintes aspectos de qualidade:

#### **1. Manutenibilidade**
- Como a arquitetura facilita manutenção futura?
- O código é legível e bem organizado?

#### **2. Testabilidade**
- Como a arquitetura facilita a criação de testes?
- Os componentes estão desacoplados?

#### **3. Escalabilidade**
- A arquitetura suporta crescimento da aplicação?
- É fácil adicionar novas funcionalidades?

#### **4. Reusabilidade**
- Existem componentes/módulos reutilizáveis?
- Como o código evita duplicação?

#### **5. Portabilidade**
- É fácil trocar tecnologias (banco de dados, servidor HTTP)?
- O código está acoplado a frameworks específicos?

#### **6. Performance**
- Existem otimizações implementadas?
- Como a paginação melhora a performance?

#### **7. Segurança**
- Existem práticas de segurança implementadas?
- Como os dados são validados?

#### **8. Documentação**
- O código está bem documentado?
- Existe documentação de uso?

---

## 📊 Critérios de Avaliação

| Critério | Peso |
|----------|------|
| Análise completa das questões (Parte 1) | 30% |
| Implementação da paginação funcionando | 40% |
| Qualidade do código implementado | 15% |
| Análise crítica de qualidade (Parte 3) | 15% |

---

## 💡 Dicas para o Sucesso

1. **Explore o código:** Não apenas leia, execute e teste a aplicação
2. **Entenda o "porquê":** Não basta saber o que está implementado, entenda por que foi feito assim
3. **Pesquise padrões:** Pesquise sobre Clean Architecture, SOLID, Design Patterns
4. **Teste antes de modificar:** Certifique-se que os testes estão passando antes de fazer mudanças
5. **Commits semânticos:** Use mensagens de commit claras e descritivas
6. **Documente suas mudanças:** Explique o que foi feito e por quê

---

## 📚 Referências Recomendadas

- Clean Architecture (Robert C. Martin)
- SOLID Principles
- Test-Driven Development (TDD)
- API Design Best Practices
- Frontend Performance Optimization

---

**Prazo de entrega:** [Definir data]

# 🚀 Issue: Sistema de Paginação de Produtos

## 🧩 Funcionalidade
Implementar sistema de paginação completo (backend + frontend) para listagem de produtos, melhorando a performance da aplicação quando houver grande volume de dados.

## 🎯 Comportamento Esperado
* O sistema deve permitir navegação paginada através dos produtos cadastrados.
* O usuário deve poder:
   * Visualizar um número limitado de itens por página (padrão: 10 itens)
   * Navegar entre páginas (próxima, anterior, ir para página específica)
   * Ver informações sobre a paginação atual (página X de Y, total de itens)
   * Alterar a quantidade de itens exibidos por página (10, 20, 50)
* O carregamento deve ser rápido, independente do volume total de dados
* Durante o carregamento, exibir um indicador visual (loading)
* Em caso de erro na consulta, o sistema deve apresentar uma mensagem amigável:
  _"Não foi possível carregar os produtos. Tente novamente mais tarde."_

## 🧠 Diretrizes Técnicas

### **Backend**
* Modificar o endpoint `GET /api/products` para aceitar query parameters:
   * `page` (número da página, padrão: 1, mínimo: 1)
   * `limit` (itens por página, padrão: 10, valores permitidos: 10, 20, 50)
* Estrutura de resposta JSON esperada:
```json
{
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 10,
    "totalItems": 95,
    "itemsPerPage": 10,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
```
* Implementar a lógica de paginação na camada de **Repository** (ProductRepositoryDatabase.ts)
* Adicionar validação dos parâmetros de entrada (valores negativos, limite máximo)
* Otimizar a query SQL utilizando `LIMIT` e `OFFSET`
* Criar consulta separada para contar o total de registros (`COUNT`)
* Manter a arquitetura limpa: lógica de paginação não deve vazar para o Domain

### **Frontend**
* Criar componente reutilizável `<Pagination />` em `components/ui/`
* Implementar controles de navegação:
   * Botões "Anterior" e "Próxima"
   * Numeração de páginas (com elipse para muitas páginas)
   * Seletor de itens por página
* Exibir informações: "Mostrando X-Y de Z produtos"
* Gerenciar estado da paginação (página atual, total de páginas)
* Atualizar URL com parâmetros de paginação (ex: `?page=2&limit=20`) para permitir compartilhamento
* Implementar debounce nas requisições para evitar chamadas excessivas
* Manter posição do scroll no topo ao mudar de página
* Garantir acessibilidade (ARIA labels, navegação por teclado)

### **Qualidade e Testes**
* **Testes Backend:**
   * Teste unitário: paginação com diferentes valores de page/limit
   * Teste unitário: validação de parâmetros inválidos
   * Teste de integração: verificar se o SQL gerado está correto
   * Teste de integração: verificar metadados de paginação
* **Testes Frontend:**
   * Teste de componente: renderização do Pagination
   * Teste de comportamento: navegação entre páginas
   * Teste de comportamento: mudança de itens por página
* Manter ou aumentar o coverage atual do projeto
* Código deve passar no lint sem warnings
* Seguir os padrões de código já estabelecidos no projeto

### **Documentação**
* Atualizar README.md com exemplo de uso da paginação
* Documentar os novos query parameters da API
* Adicionar comentários JSDoc/TSDoc nos métodos principais

## ✅ Critérios de Aceitação

1. **Dado que** existem mais de 10 produtos cadastrados,  
   **Quando** o usuário acessa a listagem de produtos,  
   **Então** o sistema exibe apenas os primeiros 10 itens e os controles de paginação.

2. **Dado que** o usuário está visualizando a primeira página,  
   **Quando** ele clica no botão "Próxima",  
   **Então** o sistema carrega a segunda página de produtos sem recarregar a aplicação inteira.

3. **Dado que** o usuário está na página 3 de 5,  
   **Quando** ele visualiza as informações de paginação,  
   **Então** o sistema mostra claramente: página atual, total de páginas, total de itens.

4. **Dado que** o usuário altera o limite de itens por página de 10 para 20,  
   **Quando** a mudança é aplicada,  
   **Então** o sistema retorna à página 1 e exibe 20 itens.

5. **Dado que** o usuário está na página 2,  
   **Quando** ele recarrega a página do navegador,  
   **Então** o sistema mantém o usuário na página 2 (state persistido na URL).

6. **Dado que** ocorre um erro na requisição de produtos,  
   **Quando** o sistema tenta carregar a página,  
   **Então** uma mensagem de erro amigável é exibida sem quebrar a interface.

7. **Dado que** o desenvolvedor roda os testes automatizados,  
   **Quando** executa `npm test`,  
   **Então** todos os testes de paginação (backend e frontend) passam com sucesso.

8. **Dado que** o backend recebe parâmetros inválidos (ex: `page=-1`, `limit=1000`),  
   **Quando** valida os parâmetros,  
   **Então** retorna erro 400 com mensagem descritiva.

---

## 📋 Checklist de Implementação

**Backend:**
- [x] Modificar ProductRepository interface para suportar paginação
- [x] Implementar lógica de paginação em ProductRepositoryDatabase
- [x] Atualizar GetProducts use case
- [x] Adicionar validação de parâmetros
- [x] Criar testes unitários
- [x] Criar testes de integração
- [x] Atualizar documentação da API

**Frontend:**
- [x] Criar componente Pagination reutilizável
- [x] Atualizar ProdutoModule para usar paginação
- [x] Implementar gerenciamento de estado (useState/useReducer)
- [x] Sincronizar estado com URL (useSearchParams ou similar)
- [x] Adicionar loading states
- [x] Adicionar tratamento de erros
- [x] Criar testes de componentes
- [x] Garantir acessibilidade (a11y)

**Qualidade:**
- [x] Código passa no lint
- [x] Coverage mantido ou aumentado
- [x] Code review realizado
- [x] README atualizado

---

## 🎓 Contexto Educacional
Esta issue faz parte do exercício prático da disciplina de **Qualidade de Software**. A implementação deve demonstrar:
- Arquitetura limpa e desacoplada
- Princípios SOLID
- Testabilidade
- Boas práticas de desenvolvimento
- Performance e escalabilidade

---

## 📊 Estimativa
**Story Points:** 8  
**Prioridade:** Alta  
**Sprint:** [Definir]

## 📖 Como usar a paginação

### API Backend

O endpoint `GET /products` agora aceita os seguintes parâmetros de query:

- `page`: Número da página (padrão: 1)
- `limit`: Número de itens por página (padrão: 10)

Exemplo de requisição:
`GET /products?page=2&limit=20`

Exemplo de resposta:
```json
{
  "data": [ ... ],
  "pagination": {
    "currentPage": 2,
    "totalPages": 5,
    "totalItems": 100,
    "itemsPerPage": 20,
    "hasNextPage": true,
    "hasPreviousPage": true
  }
}
```

### Frontend

A interface de listagem de produtos agora exibe controles de paginação no rodapé da tabela.
- Use os botões "Anterior" e "Próxima" para navegar.
- Use o seletor "Itens por página" para alterar a quantidade de itens exibidos.
- A URL é atualizada automaticamente para refletir o estado atual da paginação, permitindo compartilhar links diretos para uma página específica.


