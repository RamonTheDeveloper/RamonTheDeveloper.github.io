let isMuted = false;

// --- CARREGAMENTO DOS ARQUIVOS DE ÁUDIO ---
const menuBleepSound = new Audio('./assets/MenuBleep.wav');
const menuAcceptSound = new Audio('./assets/MenuAccept.wav');
const oneUpSound = new Audio('./assets/smw_1-up.wav');
const menuWooshSound = new Audio('./assets/MenuWoosh.wav');

// --- VERIFICADORES DE ERRO (BOA PRÁTICA) ---
menuBleepSound.onerror = () => console.log('Erro ao carregar: MenuBleep.wav');
menuAcceptSound.onerror = () => console.log('Erro ao carregar: MenuAccept.wav');
oneUpSound.onerror = () => console.log('Erro ao carregar: smw_1-up.wav');
menuWooshSound.onerror = () => console.log('Erro ao carregar: MenuWoosh.wav');

// --- FUNÇÕES PRINCIPAIS DA JANELA (MODAL) ---
function showInfoWindow(content) {
    document.getElementById('welcome-screen').classList.add('blur');
    document.getElementById('info-content').innerHTML = content;
    document.getElementById('info-window').classList.add('active');
    if (!isMuted) menuWooshSound.play().catch(e => console.error("Erro ao tocar MenuWoosh", e));
}

function closeInfoWindow() {
    document.getElementById('welcome-screen').classList.remove('blur');
    document.getElementById('info-window').classList.remove('active');
}

function playAcceptSound() {
    if (!isMuted) menuAcceptSound.play().catch(e => console.error("Erro ao tocar MenuAccept", e));
}

// --- LÓGICA PARA OS BLOCOS PRINCIPAIS (PROJETOS, WEBSITE, LINKEDIN) ---
document.querySelectorAll('.pixel-block[data-info]').forEach(block => {
    // Evento de clique para os blocos principais
    block.addEventListener('click', function(e) {
        e.preventDefault();
        const info = this.getAttribute('data-info');

        if (info === 'software') {
            showInfoWindow(`
                <p style="font-weight: bold;">Meus Principais Projetos:</p>
                <ul>
                    <li><strong>Suíte de Simulações Quânticas Interativas</strong>: Uma suíte de ferramentas educacionais desenvolvidas em Python para simular e visualizar fenômenos da computação quântica, com o objetivo de tornar conceitos abstratos da física mais intuitivos e interativos. <a href="https://github.com/RamonTheDeveloper/Portfolio-Simulacoes-Quanticas" target="_blank" style="color: #4ADE80;">Ver no GitHub</a></li>
                    <li><strong>Simulação de Sistemas Quânticos com Python</strong>: Notebook desenvolvido durante a Escola de Matéria Quântica Avançada na UFAM <a href="https://github.com/RamonTheDeveloper/fisica-computacional-newton-raphson" target="_blank" style="color: #4ADE80;">Ver no GitHub</a></li>
                </ul>
                <p style="text-align: center; margin-top: 1rem;">Para ver todos os projetos, visite meu portfólo completo!</p>
                <button onclick="playAcceptSound(); window.location.href = 'portfolio.html'">Ver Portfólio</button>
            `);
        } else if (info === 'website') {
            playAcceptSound();
            window.location.href = 'portfolio.html';
        } else if (info === 'linkedin') {
            showInfoWindow(`
                <p>Conecte-se comigo no LinkedIn:</p>
                <p><a href="https://www.linkedin.com/in/ramonoficial/" target="_blank" style="color: #4ADE80;">linkedin.com/in/ramonoficial/</a></p>
                <p>Veja meu perfil completo e experiências profissionais!</p>
                <button onclick="playAcceptSound(); window.open('https://www.linkedin.com/in/ramonoficial/', '_blank')">Visitar</button>
            `);
        }
    });

    // Evento de HOVER para os blocos principais
    block.addEventListener('mouseover', function() {
        if (!isMuted) menuBleepSound.play().catch(e => console.error("Erro ao tocar MenuBleep", e));
    });
});

// --- LÓGICA PARA O BLOCO '?' (EASTER EGG) ---
const blocoSurpresa = document.querySelector('.bloco-info-extra');

// Evento de HOVER para o bloco '?'
blocoSurpresa.addEventListener('mouseover', function() {
    if (!isMuted) oneUpSound.play().catch(e => console.error("Erro ao tocar smw_1-up.wav", e));
});

// Evento de CLIQUE para o bloco '?'
blocoSurpresa.addEventListener('click', function() {
    showInfoWindow(`
        <p style="font-size: 0.8rem; font-weight: bold; color: #EAB308;">"It's a secret to everybody!"</p>
        <p>Este é o Gabriel, estudante de Física, em busca de aventuras no mundo do desenvolvimento!</p>
        <p>Se você chegou até aqui, significa que gosta de desafios e curiosidades, assim como eu. Chegou um novo projeto experimental, clique aqui para ver!</p>
        <button onclick="playAcceptSound(); window.location.href = 'portfolio.html'">Explorar Portfólio</button>
    `);
});

// Lógica unificada para o botão 'Fechar'
const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', function() {
    playAcceptSound();
    closeInfoWindow();
});