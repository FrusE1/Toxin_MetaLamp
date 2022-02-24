import Chart from 'chart.js/auto';
import { removeData } from 'jquery';
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
    datasets: [{
      label: '# of Votes',
      data: [130, 65, 65, 0],
      backgroundColor: [
        'rgba(255, 99, 132, 0.9)',
        'rgba(54, 162, 235, 0.9)',
        'rgba(255, 206, 86, 0.9)',
        'rgba(75, 192, 192, 0.9)'
      ],
      spacing: 2,
      cutout: '89%',
    }],
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        align: 'end',
        labels: {
          font: {
            family: "Montserrat",
            size: 14,
          }
        }
      }
    },
    layout: {
      padding: {
        right: 10,
      }
    }
  },
});
ctx.canvas.parentNode.style.height = '120px';
ctx.canvas.parentNode.style.width = '120px';
