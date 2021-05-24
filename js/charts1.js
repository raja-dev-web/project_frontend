ctx_vnt = document.getElementById("ventebars").getContext("2d");
venChart = new Chart(ctx_vnt, {
    type: 'bar',
    data: {
      labels: ["France", "Inde", "Etats-Unis", "Japon", "Espagne"],
      datasets: [
        {
          label: "Ventes (en millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [570,300,405,278,402]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Ventes par pays (millions) en 2019'
      }
    }
});