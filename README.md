# Portfólio — Gabriel Ramon (RamonTheDeveloper)

Portfólio interativo retrô de Gabriel Ramon. Apresenta projetos em Python e JavaScript, simulações educacionais, links profissionais e um visual inspirado em jogos clássicos (Sonic / Mario). Esta versão traz uma grande atualização com correções, transições e melhorias no áudio.

---

## Conteúdo deste repositório
- `menu.html` — Tela de entrada (Sonic) com botão "Entrar", som e transição.
- `index.html` — Menu principal (Mario) com grid de opções (Projetos, Website, LinkedIn).
- `portfolio.html`, `sobre.html` — Páginas de detalhes / currículo.
- `sonic.css`, `mario-style.css`, `hacker-style.css` — Estilos para as telas.
- `script.js` — Lógica unificada (áudio, overlay de desbloqueio, modal, acessibilidade).
- `assets/` — Imagens, GIFs, áudios usados no projeto.
- `CHANGELOG.md` — Histórico de mudanças e release notes.

---

## Principais funcionalidades
- Interface temática retrô (Pixel art / CRT leve).
- Áudio com fallback: sessionStorage para tentar autoplay entre páginas + overlay.
- Transição de fade entre telas (Sonic → Mario).
- Botões / blocos pixelados.

- Testes a realizar:
  - Layout do grid (1 coluna no mobile).
  - Botões tocáveis com dimensões confortáveis.
  - Áudio: clique em Entrar (Sonic) → tenta autoplay em index; se bloqueado, overlay aparece.
  - Acessibilidade: focar com teclado e ativar com Enter/Space.

---

## CHANGELOG
> Notas da release incluídas aqui para referência rápida.

## 2025-10-16 — Grande atualização / Correções
- Menu Sonic
  - Título alterado para "WELCOME TO RAMON'S ZONE".
  - Botão "Entrar" com micro animação (vibrar/pulse), design retrô melhorado e som (Sonic CD - "yeah") ao clicar.
  - Implementado fade-out de transição antes do redirecionamento para o Menu Mario.
  - Rodapé fixo e estilizado (nome / direitos reservados).
  - Removida duplicidade do CRT/scanlines que escurecia a tela.

- Menu Mario
  - Implementado overlay de desbloqueio de áudio (fallback) quando o autoplay é bloqueado no navegador.
  - Correções de posicionamento e layout retrô.

- Áudio
  - Implementado sessionStorage flag `audioUnlocked` para tentar reproduzir áudio automaticamente na página seguinte (com fallback para overlay).
  - Ajustes para garantir que sons sejam reproduzidos após interação do usuário.

- Responsividade & Performance
  - Otimizações de carregamento condicional via JS para elementos “pesados”.

- Bugs corrigidos
  - Duplicidade do `.crt` removida.
  - Áudio bloqueado ao mudar de página (melhor handling com sessionStorage e overlay).
  - Ajustes no posicionamento de sprites e rodapés.

Notas:
- SessionStorage é por aba; nova aba exigirá nova interação.
- Para manter áudio desbloqueado sem recarregar entre páginas, considerar SPA (opção futura).

---

## Troubleshooting rápido
- Página não carrega assets (404): verifique caminhos relativos e nomes em `assets/` (Linux é case-sensitive).
- Áudio não toca automaticamente: é política do navegador — o overlay resolve com interação direta.
- Efeitos pesados no mobile: habilite o modo mobile-first e verifique media queries (efeitos `.crt` desativados em pointer: coarse).
- Erros JS: abra DevTools → Console e cole o erro aqui caso queira ajuda.

---

## Créditos e Contatos
- Desenvolvido por Gabriel Ramon (RamonTheDeveloper)  
- Email: `gabrielramonsouza20@gmail.com`  
- LinkedIn: https://linkedin.com/in/ramonoficial/  
- GitHub: https://github.com/RamonTheDeveloper

---

## Licença
- Sinta-se à vontade para usar/examinar o código; adicione a licença desejada (MIT, Apache-2.0, etc.) no repositório se quiser permitir uso público formal.
