var container = $('div.container');

$("#search").on('keypress', function (e) {
    getData($("#search").val())
    
});


function getData(data){
    console.log(data);
    $.ajax({
        type: 'GET',
        url: 'https://mpcs52553-divvy.herokuapp.com/stations.json',
        dataType: 'json',
        success: handleResponse
    });
}


function handleResponse(data){
    
}
