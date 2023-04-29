
// verifica a largura da tela
const mediaQuery400 = window.matchMedia('(max-width: 460px)');
const mediaQueryMedium = window.matchMedia('(min-width: 601px) and (max-width: 900px)');
const mediaQueryLarge = window.matchMedia('(min-width: 901px)');

// executa a ação com base na largura da tela
if (mediaQuery400.matches) {
  const div = document.querySelector('.proga-datas');
  div.innerHTML = '<div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar com grupos de botões"> \
<div class="btn-group mr-2" role="group" aria-label="Primeiro grupo"> \
    <button type="button" class="btn btn-secondary">DOM 23/04</button> \
    <button type="button" class="btn btn-secondary">SEG 24/04</button> \
    <button type="button" class="btn btn-secondary">TER 25/04</button> \
    <button type="button" class="btn btn-secondary">QUA 26/04</button> \
  </div> \
</div>';

} else if (mediaQuery400.matches) {
    const div = document.querySelector('.proga');
    div.innerHTML = '<p>Conteúdo Modificado</p>';
  } else if (mediaQueryLarge.matches) {
    const div = document.querySelector('.my-div');
    div.innerHTML = '<p>Conteúdo modificado para telas maiores</p>';
  }

