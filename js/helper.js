/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<a class="navbar-brand" data-target="#myCarousel" data-slide-to="0" href="#">%data%</a>';
var HTMLheaderRole = '<span class="small"> - %data%</span>';

var HTMLContactHolderImg = '<div id="bioImg" class="col-xs-4 col-md-3"></div>' ;
var HTMLContactHolderContent = '<div id="bioContent" class="col-xs-12 col-sm-6 col-md-8"><div class="panel panel-default dark-gray"><div class="panel-heading"><ul id="topContacts" class="flex-box"></ul></div><div class="panel-body"></div></div></div>' ;

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="dark-gray">%data%</span></li>';
var HTMLmobile = '<li><span class="orange-text">mobile</span><span class="contact-gray">%data%</span></li>';
var HTMLemail = '<li><span class="orange-text">email</span><span class="contact-gray">%data%</span></li>';
var HTMLtwitter = '<li><span class="orange-text">twitter</span><span class="contact-gray">%data%</span></li>';
var HTMLgithub = '<li><span class="orange-text">github</span><span class="contact-gray">%data%</span></li>';
var HTMLblog = '<li><span class="orange-text">blog</span><span class="contact-gray">%data%</span></li>';
var HTMLlocation = '<li><span class="orange-text">location</span><span class="contact-gray">%data%</span></li>';

var HTMLbioPic = '<div class="circle-bio-pic"><img src="%data%" class="biopic"></div>';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="dark-gray">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry col-xs-6 col-md-4"><div class="panel panel-default"><div class="panel-heading"></div><div class="panel-body"></div></div></div>';
var HTMLworkEmployer = '<h2 class="panel-title">%data%';
var HTMLworkTitle = '<br><small>%data%</small></h2>';
var HTMLworkDates = '<div class="dark-gray">%data%</div>';
var HTMLworkLocation = '<div class="dark-gray">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry col-xs-6 col-md-4"><div class="panel panel-default"><div class="panel-heading"></div><div class="panel-body"></div></div></div>';
var HTMLprojectTitle = '<h2 class="panel-title">%data%</h2>';
var HTMLprojectDates = '<div class="dark-gray">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry col-xs-6 col-md-4"><div class="panel panel-default"><div class="panel-heading"></div><div class="panel-body"></div></div></div>';
var HTMLschoolName = '<h2 class="panel-title">%data%';
var HTMLschoolDegree = '<br><small>%data%</small></h2>';
var HTMLschoolDates = '<div class="dark-gray">%data%</div>';
var HTMLschoolLocation = '<div class="dark-gray" >%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';


var HTMLonlineTitle = '<h2 class="panel-title">%data%';
var HTMLonlineSchool = '<br><small>%data%</small></h2>';
var HTMLonlineDates = '<div class="dark-gray">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

var HTMLSchoolIcon = '<div class="circle"><i class="material-icons md-48">&#xE80C;</i></div>';
var HTMLWorkIcon = '<div class="circle"><i class="material-icons md-48">&#xE8F9;</i></div>';
var HTMLProjectIcon = '<div class="circle"><i class="material-icons md-48">&#xE85D;</i></div>';
var HTMLOnlineIcon = '<div class="circle"><i class="material-icons md-48">&#xE2BD;</i></div>';
var HTMLBioPicIcon = '<div class="circle-bio-pic"><i class="material-icons md-250">&#xE853;</i></div>';

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});
