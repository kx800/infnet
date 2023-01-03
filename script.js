const dropdown = document.querySelector('#dropdown');

//fetch("https://dadosabertos.camara.leg.br/api/v2/partidos")
fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
.then(response => response.json())
.then(data => {
  //let partidos = data.dados;
  let partidos = data;
  let html = '';
  for (var i = 0; i < partidos.length; i++) {
    html += "<option value=" + partidos[i].id + ">" + partidos[i].nome + " - " + partidos[i].sigla + "</option>"
  }
  document.getElementById("dropdown").innerHTML = html;
})

dropdown.addEventListener('change', e => {
    const idPartido = e.target.value;
    //fetch(`https://dadosabertos.camara.leg.br/api/v2/partidos/${idPartido}/membros`)
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idPartido}/distritos`)
      .then(response => response.json())
      .then(datax => {
        //let membros = datax.dados;
        let membros = datax;
        let html = '';
        for (var i = 0; i < membros.length; i++) {
            html += "<li class='list-group-item' value=" + membros[i].id + ">" + membros[i].nome + "</li>";
        }
        document.getElementById("vizualizaMembros").innerHTML = html;
      });
  });
