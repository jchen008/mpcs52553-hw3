# Homework #3

10 points

**DUE: Saturday, February 16 by 12:00pm**

For easiest viewing of these instructions, view online on Github.com or use a Markdown previewer.


### Getting Started

1. Download a ZIP file of this repository, unzip it into a folder, and then convert that folder
into your own git repository.  (Alternatively, you can clone this repository and then use `git remote set-url...` to point to your remote repository instead.)
2. Create a remote repository (GitHub or BitBucket) called `mpscs52553-hw3`.
2. Follow the instructions below.
3. Commit often.  Push often.
4. Add collaborators:
    * GitHub: jahnagoldman, ekxue, jeffcohen
    * BitBucket: jahnamcnamara, ekxue, jeffcohen
5. Make sure your final commit is timestamped before the deadline, and everything is pushed to your remote repository by the deadline.


### Instructions

This assignment will help you get practice at consuming and processing
data from third-party sources.  Some research might be required.

NOTE: You are welcome to use either [jQuery ajax functionality](http://api.jquery.com/jquery.ajax/) or native [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) functionality.

### 1. Divvy Station Locator

  * Build a simple site that displays information about the closest divvy station, including
    * The name of the station
    * The number of available bicycles
  * See the comments in the bikes.html file for the Divvy API url.
  * The design of the user interface is up to you.
  * Be sure to include a mobile responsive layout too.

### 2. IMDB Clone
  * We will build a very simple version of a movie lookup site.
  * Be sure to watch the [screencast](https://youtu.be/U6QmpgK6McI) for a quick overview.
  * I've started a page for you, [movies.html](movies.html).
  * Movie API documentation is here: https://developers.themoviedb.org/3
  * You do NOT have to make your page look exactly like in the screencast.
    In fact, innovation and creativity is encouraged, so feel free to invent a
    different layout.
  * We will be using a free movie data service called [The Movie Database](https://www.themoviedb.org/).
  * My API key is included in the movies.html core, but you might encounter
    slowness if everyone's using my key. You can [get your own account]() instead.
    It's free and no credit card is required to sign up.
  * Only movies with poster images should be included in your search results.
  * Your site should respond appropriately to mobile devices.

HINTS:

  * You'll probably want to read [this](https://developers.themoviedb.org/3/getting-started/search-and-query-for-details) and [this](https://developers.themoviedb.org/3/getting-started/images).
  * You can sometimes get a lot of results for any given search.  You only need to show
    the first "page" of results that is returned by the API.
  * If you're using jQuery, the [.html()](http://api.jquery.com/html/) method can be used to completely replace the HTML inside of a DOM element.  If you're not using jQuery, you can use the [.innerHtml](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) property.
  * If you find yourself trying to hardcode a long string of HTML, I highly recommend using the new ES6
    syntax for [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).  Using the backtick notation lets you easily avoid escaping quotation marks,
    makes it easy to provide multiline string literals,
    and also gives you a very nice variable interpolation technique should you need it.




### Grading Rubric (10 points total):

  * 3 points total: Divvy station locator page
    * 1 point for correct API usage
    * 1 point for determining the nearest station
    * 1 point for overal UI execution and mobile responsiveness

  * 7 points total: Overall execution of the movies page
    * 4 points for basic search results
      * Show one movie entry for each search result that has a movie poster image
      * You can ignore any search results that do not provide a movie poster image
      * Display the movie title, year of release, IMDB vote average, and plot overview.
    * 2 points for enhanced search results
      * Director name(s)
      * Actor name(s) (maximum 5)
    * 1 point for overall visual appearance and usability
        * The search bar should have initial focus when page loads so that
          the user can start typing a search term without having to first
          click the input field.
        * Mobile responsiveness
# mpcs52553-hw3
