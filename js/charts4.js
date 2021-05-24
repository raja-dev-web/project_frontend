var ctx = document.getElementById('venteline').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ["Jan", "Fev", "Mar", "Avr", "Mai","Jun","Jul","Août","Sep","Oct","Nov","Dec"],
            datasets: [{ 
                data: [12,15,11,16,22,19,21,19,23,20,21,22],
                label: "France",
                borderColor: "rgb(62,149,205)",
                backgroundColor: "rgb(62,149,205,0.1)",
              }, { 
                data: [8,6,3,6,4,5,7,8,5,7,3,8],
                label: "Inde",
                borderColor: "rgb(60,186,159)",
                backgroundColor: "rgb(60,186,159,0.1)",
              }, { 
                data: [12,15,16,16,18,20,23,17,16,20,18,19],
                label: "Etats-Unis",
                borderColor: "rgb(255,165,0)",
                backgroundColor:"rgb(255,165,0,0.1)",
              }, { 
                data: [6,4,5,7,4,3,5,4,6,7,5,4],
                label: "Japon",
                borderColor: "rgb(196,88,80)",
                backgroundColor:"rgb(196,88,80,0.1)",
              },
               { 
                data: [12,18,11,16,13,19,20,19,21,18,20,19],
                label: "Espagne",
                borderColor: "rgb(188,99,90)",
                backgroundColor:"rgb(188,99,90,0.1)",
              }
            ]
          },
          options: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Croissance mensuelle des Ventes en 2019'
      }
    }
        });