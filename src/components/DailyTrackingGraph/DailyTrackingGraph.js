import React, { useEffect } from "react";
import "./DailyTrackingGraph.css";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { fetchGraphData } from "../../redux/DailyTrackingGraph/DailyTrackingGraphActions";


function DailyTrackingGraph(props) {
  useEffect(() => {
    props.fetchGraphData(localStorage.portafolio_id);
  }, []);

  const chartDataHome = {
    labels: props.labels,
    datasets: [
      {
        label: "Your Balance Over Time",
        data: props.data,
        fill:true,
        backgroundColor: [
          "rgba(83,83,83, 0.1)",
        ],
        borderColor: [
          "rgba(22,171,126,0.5)",
        ],
        borderWidth: 1
      }
    ]
};

const options = {
    legend: {
        display: true
    },
    maintainAspectRatio: true,
    responsive: true,
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    },
    elements: {
        point:{
            radius: 3
        }
    },
    scales: {
        xAxes: [{
            ticks: {
                display: false //this will remove only the label
            }, 
            gridLines: {
                display: false,
            }
        }], 
        yAxes: [{
            ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, values) {
                  return '$' + value;
              }
          }, 
            gridLines: {
                display: true,
            }
        }]
    }
    
}
  return (
    <div className="DailyTrackingGraph">
      <div className="ui segment">
        <Line data={chartDataHome} width={100} height={25} options={options}/>
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    data: state.dailyTrackingGraphReducer.data, 
    labels: state.dailyTrackingGraphReducer.labels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGraphData: (portfolio_id) => dispatch(fetchGraphData(portfolio_id))
  };
};





export default connect(mapStateToProps, mapDispatchToProps)(DailyTrackingGraph)
