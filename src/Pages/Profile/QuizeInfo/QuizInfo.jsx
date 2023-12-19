import {  Line } from 'react-chartjs-2';
import { useOutletContext } from "react-router-dom";
import { Chart, registerables } from 'chart.js';
import { Doughnuts } from './Doughnut';
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



  return (<div className=' w-100 d-flex justify-content-center flex-column align-items-center flex-md-row'>

<div className="w-75">
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
       
     
      }
    }} plugins={['wavyLines']} />
    </div>
    <Doughnuts questionData={questionData}/>
      </div>
  )
}
