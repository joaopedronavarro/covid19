async function regions_div() {
  const response = await fetch('https://covid19-brazil-api.vercel.app/api/report/v1/countries');
  const dados = await response.json();
  prepararDados(dados);
}

function prepararDados(dados) {
  console.table(dados.data);

  if (dados.data.length > 0) {
      var dados_mapa = [['País', 'Confirmados']];

      for (let i = 0; i < dados.data.length; i++) {
          const item = dados.data[i];
          dados_mapa.push([item.country, item.confirmed]);
      }

      desenharGraficoMapa(dados_mapa);
  } else {
      console.log('Nenhum dado encontrado.');
  }
}

function desenharGraficoMapa(dados_mapa) {
  google.charts.load('current', {
      'packages': ['geochart'],
  });
  google.charts.setOnLoadCallback(() => {
      var data = google.visualization.arrayToDataTable(dados_mapa);
      var options = {
        colorAxis: { colors: ['green', 'red', 'chocolate', 'firebrick', 'brown',] },
          backgroundColor: '#81d4fa',
      };
      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
      chart.draw(data, options);
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  regions_div();
});   

document.addEventListener(  "DOMContentLoaded",
  function(event) {
    regions_div();
      

      regions_div();
  }
);
 