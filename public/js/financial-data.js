

document.getElementById("start").addEventListener("change", changeDate());
document.getElementById("end").addEventListener("change", changeDate());


function changeDate(){
 startDate = document.getElementById("start").value;
 endDate = document.getElementById("end").value;
console.log("startdat ", startDate, "endate ", endDate)
}





axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
.then(responseFromApi => { 
    // console.log("this is the response from api", responseFromApi);
    printTheChart(responseFromApi); })
.catch(error => console.log(error) )



function printTheChart(responseFromApi){
    const ctx = document.getElementById('myChart').getContext('2d');

    const x = Object.keys(responseFromApi.data.bpi);
    const y = Object.values(responseFromApi.data.bpi);


    const myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: x,
            datasets: [{
                label: '# of Gambling',
                data: y,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                   
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    


}





// function printTheChart(stockData) {
//     const ctx = document.getElementById('myChart').getContext('2d');

//     const dailyData = stockData;
//     const stockDates = Object.keys(dailyData);
//     const bpi = stockDates.map(date => dailyData[date]['4. close']);
 
//     const chart = new Chart(ctx, {
//         type: 'line',
//         data: {
//         labels: stockDates,
//         datasets: [
//             {
//             label: 'Stock Chart',
//             backgroundColor: 'rgb(255, 99, 132)',
//             borderColor: 'rgb(255, 99, 132)',
//             data: bpi
//             }
//         ]
//         }
//     }); // closes chart = new Chart()
// } 

