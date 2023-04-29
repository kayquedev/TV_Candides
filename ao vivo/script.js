const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
	body.classList.toggle('dark-mode');
});

// seleciona o botão de inscrição
const inscricaoBtn = document.querySelector('#inscricao-btn');

// adiciona evento de clique no botão de inscrição
inscricaoBtn.addEventListener('click', function(event) {
	// previne o comportamento padrão do botão de submeter um formulário
	event.preventDefault();

	// seleciona os campos do formulário
	const nomeInput = document.querySelector('#nome');
	const emailInput = document.querySelector('#email');
	const programaSelect = document.querySelector('#programa');

	// valida os campos do formulário
	if (nomeInput.value.trim() === '') {
		alert('Por favor, preencha o seu nome.');
		return;
	}

	if (emailInput.value.trim() === '') {
		alert('Por favor, preencha o seu email.');
		return;
	}

	if (programaSelect.value === '') {
		alert('Por favor, selecione um programa.');
		return;
	}

	// envia os dados do formulário para o servidor (neste caso, apenas exibe um alerta com os dados)
	alert(`Obrigado por se inscrever no programa ${programaSelect.value}, ${nomeInput.value}! Um email de confirmação foi enviado para ${emailInput.value}.`);
});
