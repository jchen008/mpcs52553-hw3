var container = $('div.container');

$('input#get').click(getData);

function getData(){
    console.log('get here');
    $.ajax({
        type: 'GET',
        url: 'https://mpcs52553-divvy.herokuapp.com/stations.json',
        dataType: 'json',
        success: handleResponse
    });
}


function handleResponse(data) {
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

function distance(lat1, lon1, lat2, lon2) {
    var radlat1 = Math.PI * lat1 / 180
    var radlat2 = Math.PI * lat2 / 180
    var radlon1 = Math.PI * lon1 / 180
    var radlon2 = Math.PI * lon2 / 180
    var theta = lon1 - lon2
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    return dist
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
        geoData[index].distance = distance(item.latitude, item.longitude, currentlatitude, currentlongitude)
    });

    console.log(geoData)
/**
    var spots = {}
    $.each(geoData, function (index, item) {
        spots[item.stationName] = { latitude: item.latitude, longitude: item.longitude, 
            availableBikes: item.availableBikes, distance: distance(item.latitude, item.longitude, currentlatitude, currentlongitude )}
    })
    console.log(spots)
 */

    console.log(Array.isArray(geoData))

    geoData.sort(SortDistance)
    console.log(geoData)
    
    container.append('Location: ' + geoData[0].stationName + ', Number of Available Bikes: ' + geoData[0].availableBikes)
    container.append('<br/></br>');

}
