ctx_vnt = document.getElementById("ventepie").getContext("2d");
venChart = new Chart(ctx_vnt,{
    type: 'doughnut',
    data: {
      labels: ["France", "Inde", "Etats-Unis", "Japon", "Espagne"],
      datasets: [
        {
          label: "Profits (milles)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [52,18,32,10,40]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Moyen de profits par pays (milles) en 2019',
        labels: {
        	fontColor:'#fff'
        }
      }
    }
});