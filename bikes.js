var container = $('div.container');

$('input#get').click(getData);

function getData(){
    //console.log('get here');
    $.ajax({
        type: 'GET',
        url: 'https://mpcs52553-divvy.herokuapp.com/stations.json',
        dataType: 'json',
        success: handleResponse
    });
}


function handleResponse(data) {
    //console.log(data)
    var smallData = data.map(function (d, i) {
        return {
            stationName: d.stationName,
            latitude: d.latitude,
            longitude: d.longitude,
            availableBikes: d.availableBikes
        };
    });
    
    getLocation(smallData)
}

function getLocation(geoData) {
    navigator.geolocation.getCurrentPosition(function (data) { handleLocation(data, geoData) });
}

function getDist(la1, lo1, la2, lo2) {
    let rdla1 = Math.PI * la1 / 180
    let rdlo1 = Math.PI * lo1 / 180
    let rdla2 = Math.PI * la2 / 180
    let rdlo2 = Math.PI * lo2 / 180
    let lo_diff = lo1 - lo2
    let rd = Math.PI * lo_diff / 180
    let val = Math.cos(rdla1) * Math.cos(rdla2) * Math.cos(rd) + Math.sin(rdla1) * Math.sin(rdla2);
    val = Math.acos(val)
    val = val / Math.PI * 180 
    val = val * 1.15 * 60 
    return val;
}

function SortDistance(a, b) {
    var d1 = a.distance;
    var d2 = b.distance;
    return d1 - d2;
}


function handleLocation(data, geoData) {
    //console.log("Location Data:", geoData)

    const currentlatitude = data.coords.latitude
    const currentlongitude = data.coords.longitude

    var currentPosition = {
        latitude: currentlatitude,
        longitude: currentlongitude
    };

    $.each(geoData, function (index, item) {
        geoData[index].distance = getDist(item.latitude, item.longitude, currentlatitude, currentlongitude)
    });

    //console.log(Array.isArray(geoData))

    geoData.sort(SortDistance)
    console.log(geoData)
    let location = ''
    let number = ''
    location += `Location: ${geoData[0].stationName}`
    $('#location').html(location);
    number += `Available Bikes: ${geoData[0].availableBikes}`
    $('#number').html(number);
}
