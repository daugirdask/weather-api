if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    console.log('not supported;');
}


function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const weather = ['weather', 'forecast'];

    for (let i = 0; i < weather.length; i ++) {

        $.getJSON( "https://api.openweathermap.org/data/2.5/" + weather[i] + "?lat=" + latitude + "&lon=" + longitude + "&units=metric" + "&appid=a46b99a6e7611bbef57b3b27b0183785", function( data ) {
            console.log(data);
        });
    
    }
}

function error() {
    console.log('denied');
}

