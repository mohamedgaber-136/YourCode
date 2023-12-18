import { Line } from 'react-chartjs-2';
import { useOutletContext } from "react-router-dom";
import { Chart, registerables } from 'chart.js';
export const QuizInfo = () => {
  Chart.register(...registerables);
  const questionData = useOutletContext()
  const data = {
    labels: questionData.map((question, index) => `day ${index + 1}`),
    datasets: [
      {
        label: 'Question to Wrong Answer Ratio',
        data: questionData.map((question) => ((question.total-question.wrong)/question.total*100)),
        borderColor: 'rgb(255,0,0)',
        borderWidth: 3,
        pointBackgroundColor: 'rgb(255,0,0)',
        pointRadius: 5,
        pointHitRadius: 10,
        fill: true, // Ensure the line is not filled
      },
    ],
  };

  const options= {
   }
  

  return (
    <Line data={data} options={{
   
      scales: {
        y: {
            suggestedMin: 0,
            suggestedMax: 100
        }
      },
      plugins: {
        legend: {
          display: true
        },
        title:{
          text:`(TotalQuestions ${questionData.map((a)=>a.total).reduce((a,b)=>a+b)} )  (wrong ${questionData.map((a)=>a.wrong).reduce((a,b)=>a+b)})`,
          display:true
        }
     
      }
    }} plugins={['wavyLines']} />
  )
}
