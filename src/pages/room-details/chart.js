import Chart from 'chart.js/auto';
import { removeData } from 'jquery';
const ctx = document.getElementById('chart').getContext('2d');
ctx.canvas.parentNode.style.height = "120px";
ctx.canvas.parentNode.style.width = "120px";
let chartArr = [130, 65, 65, 0]
const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
    datasets: [{
      data: [chartArr[0], chartArr[1], chartArr[2], chartArr[3]],
      backgroundColor: [
        'rgba(255, 227, 156, 1)',
        'rgba(111, 207, 151, 1)',
        'rgba(188, 156, 255, 1)',
        'rgba(145, 145, 145, 1)'
      ],
      spacing: 2,
      cutout: '89%',
    }],
  },
  options: {
    plugins: {
      legend: {
        display: false,
        position: 'right',
        align: 'end',
        labels: {
          font: {
            family: "Montserrat",
            size: 14,
          }
        },
      }
    },
    rotation: 180,
    maintainAspectRatio: false,
  },
});
// Центральный текст внутри диаграммы
const chartText = document.querySelector('.chart__text span');
chartText.innerHTML = `${chartArr[0] + chartArr[1] + chartArr[2] + chartArr[3]}`