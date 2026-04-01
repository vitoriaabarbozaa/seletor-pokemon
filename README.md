# Seletor Pokémon

<p align="left">
  <img src="https://img.shields.io/badge/Status-Concluído-green" alt="Status do Projeto: Concluído"><br>
  <progress value="100" max="100"></progress>
</p>

Este é um aplicativo web desenvolvido com foco na visualização mobile (Mobile First), que consome e exibe dados da [PokéAPI](https://pokeapi.co/). O projeto alcançou notas máximas no Google Lighthouse e foi transformado em um **PWA (Progressive Web App)**, permitindo sua instalação direta no celular e o uso de recursos físicos do aparelho.

## 📱 Visão Geral
O usuário clica em um botão e o sistema gera um ID aleatório (de 1 a 1025). A partir desse número, uma requisição `fetch` busca os dados correspondentes na PokéAPI e exibe o card completo do Pokémon na tela.

## 🚀 Funcionalidades
* **Geração Aleatória:** Escolha de um Pokémon aleatório da base de dados.
* **PWA Instalável:** O site pode ser instalado no celular ou computador como um aplicativo nativo, com suporte a Service Workers e cache.
* **Recurso de Hardware:** Utiliza a *Vibration API* do navegador para fazer o celular vibrar ao gerar um novo Pokémon, fornecendo feedback tátil.
* **Navegação Dinâmica:** Botão de "Voltar ao Início" para limpar a busca e retornar à tela principal.
* **Dados Completos:** Exibição da imagem (official-artwork), nome, número (ID) e listagem dinâmica dos tipos (ex: fogo, água, planta).
* **Status Base:** Exibição das estatísticas do Pokémon (HP, Attack, Defense, Special-Attack, Special-Defense e Speed).
* **Áudio Integrado:** Reprodução do grito (cry) oficial do Pokémon gerado.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação semântica, meta tags para SEO otimizado e configurações de compatibilidade para iOS (Apple).
* **CSS3:** Eu adicionei o CSS base para o funcionamento e entrega, mas pretendo aperfeiçoar mais futuramente. Por enquanto, ta concluído, mas talvez eu volte a mexer nele.
* **JavaScript:** Lógica principal, consumo de API com `fetch`, manipulação dinâmica do DOM, registro de *Service Workers* e uso da *Navigator API* (vibração).

## 🔗 Link do Projeto
* **Deploy:** https://vitoriaabarbozaa.github.io/seletor-pokemon/

## 👤 Desenvolvido por
**Vitória Barboza** <br>
[Meu LinkedIn](https://www.linkedin.com/in/vit%C3%B3ria-barboza-042852350/)
