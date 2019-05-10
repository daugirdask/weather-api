chart(one=isNaN, two=isNaN);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} 

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const weather = ['weather', 'forecast'];

    for (let i = 0; i < weather.length; i ++) {

        $.getJSON( "https://api.openweathermap.org/data/2.5/" + weather[i] + "?lat=" + latitude + "&lon=" + longitude + "&units=metric" + "&appid=a46b99a6e7611bbef57b3b27b0183785", function( data ) {
            console.log(data);
            one = 20;
            two = 5;
            chart(one, two);
        });
    
    }
}

function error() {
    console.log('denied');
}

function chart(pop) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Temperature',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [one, two]
        }]
    },

    // Configuration options go here
    options: {}
    });

}
