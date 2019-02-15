
$("#search").keyup(function (event) {
    getMovie($("#search").val())
});



function getMovie(data){
    console.log(data)
    $.ajax({
        type: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie?api_key='+tmdb_api_key+'&query='+data,
        dataType: 'json',
        success: handleMovieResponse
    });
}

function handleMovieResponse(data){
    //console.log(data)
    let movies = data.results
    //console.log(movies)
    let output = '';
    $.each(movies, function (index, movie) {
        console.log(movie)
        // skip movie without poster
        if (movie.poster_path == null) {
            return true;
        }
        $.ajax({
            type: 'GET',
            url: 'https://api.themoviedb.org/3/movie/'+movie.id+'/credits?api_key='+ tmdb_api_key,
            dataType: 'json',
            success: handleOneMovie
        });
        output += `
        <div class="row">
          <div class="col-md-3">
            <div class="well text-center">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
            </div>
          </div>
          <div class="col-md-9 column-margin">
            <h3>${movie.title}  <span><h8 class='year'>${$.trim(movie.release_date).substring(0, 4)}</h8></span></h3>
            <h8><i class="fas fa-star"></i> ${movie.vote_average}</h8>
            <p class='overview'>${movie.overview}</p>
            <div id="${movie.id}"></div>
          </div>
        </div>
        <br>


        `; 
    });
    $('#movies').html(output);
}


function handleOneMovie(data){
    //console.log(data)
    let output = ''
    let cast = data.cast
    let director = $.grep(data.crew, function (obj) {
        return obj.job === "Director";
    });
    //console.log(director[0].name)
    output += `
    <h5 class>Directed by: <span class=\'name\'>${director[0].name}</span></h5>
    `
    let cast_num = 5
    let count = 0
    output += '<h5>Cast: <span><h8 class=\'name\'>'
    $.each(data.cast, function(index, actor){
        if (count === cast_num) return false
        output += `${actor.name}, `
    count++
    });
    output = output.substring(0,output.length-2)
    output += '</h8></span></h5>'

    $('#'+data.id).html(output);

}


