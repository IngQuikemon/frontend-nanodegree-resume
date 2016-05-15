// Variables needed for rendering the resume page.
var HTMLheaderName = '<a class="navbar-brand" data-target="#myCarousel" data-slide-to="0" href="#">%data%</a>';
var HTMLheaderRole = '<span class="small"> - %data%</span>';

var HTMLContactHolderImg = '<div id="bioImg" class=" col-md-3"></div>' ;
var HTMLContactHolderContent = '<div id="bioContent" class="col-md-8"><div class="panel panel-default dark-gray"><div class="panel-heading"><ul id="topContacts" class="flex-box"></ul></div><div class="panel-body"></div></div></div>' ;

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="dark-gray">%data%</span></li>';
var HTMLmobile = '<li><span class="orange-text">mobile</span><span class="contact-gray">%data%</span></li>';
var HTMLemail = '<li><span class="orange-text">email</span><span class="contact-gray">%data%</span></li>';
var HTMLtwitter = '<li><span class="orange-text">twitter</span><span class="contact-gray">%data%</span></li>';
var HTMLgithub = '<li><span class="orange-text">github</span><span class="contact-gray">%data%</span></li>';
var HTMLblog = '<li><span class="orange-text">blog</span><span class="contact-gray">%data%</span></li>';
var HTMLlocation = '<li><span class="orange-text">location</span><span class="contact-gray">%data%</span></li>';

var HTMLbioPic = '<div class="circle-bio-pic"><img src="%data%" class="biopic"></div>';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
var HTMLbioMap = '<span id="mapHolder%data%">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="dark-gray">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry col-md-4"><div class="panel panel-default"><div class="panel-heading"></div><div class="panel-body"></div></div></div>';
var HTMLworkEmployer = '<h2 class="panel-title">%data%';
var HTMLworkTitle = '<br><small>%data%</small></h2>';
var HTMLworkDates = '<div class="dark-gray">%data%</div>';
var HTMLworkLocation = '<div class="dark-gray">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry col-md-4"><div class="panel panel-default"><div class="panel-heading"></div><div class="panel-body"></div></div></div>';
var HTMLprojectTitle = '<h2 class="panel-title">%data%</h2>';
var HTMLprojectDates = '<div class="dark-gray">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry col-md-4"><div class="panel panel-default"><div class="panel-heading"></div><div class="panel-body"></div></div></div>';
var HTMLschoolName = '<h2 class="panel-title">%data%';
var HTMLschoolDegree = '<br><small>%data%</small></h2>';
var HTMLschoolDates = '<div class="dark-gray">%data%</div>';
var HTMLschoolLocation = '<div class="dark-gray" >%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineTitle = '<h2 class="panel-title">%data%';
var HTMLonlineSchool = '<br><small>%data%</small></h2>';
var HTMLonlineDates = '<div class="dark-gray">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var mapHolder = '<div id="mapHolder%data%" class="mapHolder"></div>';
var mapItem = '<div id="mapItem%data%" class="mapItem"></div>';

var HTMLSchoolIcon = '<div class="circle"><i class="material-icons md-48">&#xE80C;</i></div>';
var HTMLWorkIcon = '<div class="circle"><i class="material-icons md-48">&#xE8F9;</i></div>';
var HTMLProjectIcon = '<div class="circle"><i class="material-icons md-48">&#xE85D;</i></div>';
var HTMLOnlineIcon = '<div class="circle"><i class="material-icons md-48">&#xE2BD;</i></div>';
var HTMLBioPicIcon = '<div class="circle-bio-pic"><i class="material-icons md-250">&#xE853;</i></div>';

// Variables declaration sued to render the maps.
var mapCollection =[];
var mapObjects = [];

/**
* @description Create the map object and loads the corresponding pin marker.
* @param {string} mapName - Name of the div ID holding the map to be loaded.
* @param {object} location - The coordinates of the location marker.
*/
function initializeMapItem(mapName, location){

  var mapOptions = {
    zoom: 9,
    disableDefaultUI: true
  };
  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  var map = new google.maps.Map(document.querySelector(mapName), mapOptions);
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
    var pt = new google.maps.LatLng(lat,lon);
    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // center the map
    map.setCenter(pt);

    mapObjects.push({'mapObject':map,'pinLocation':placeData});
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
  function pinPoster(address) {
    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);
    var request = {
      query: address
    };
    // Actually searches the Google Maps API for location data and runs the callback
    // function with the search results after each search.
    service.textSearch(request, callback);
  }

  // Sets the boundaries of the map based on pin locations
  //window.mapBounds = new google.maps.LatLngBounds();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(location);
}

/**
* @description Initialize the fore Each loop for rendering the maps.
*/
function initMapRendering(){
  mapCollection.forEach(renderMaps);
}

/**
* @description Calls the initialize method for each item in the mapscollection
* @param {object} element - Map object with the details of the marker.
* @param {number} index - The index of the array we are traversing.
* @param {number} array - not used in this implementation.
*/
function renderMaps(element,index,array){
  initializeMapItem(element.name,element.location);
}

/**
* @description Refresh the maps to center and render correctly.
*/
function refreshMaps(mapData){
    var latLng = new google.maps.LatLng(
      mapData.pinLocation.geometry.location.lat(),
      mapData.pinLocation.geometry.location.lng()
    );
    google.maps.event.trigger(mapData.mapObject,'resize');
    mapData.mapObject.setCenter(latLng);
}

/*
adds an event listener to load the maps when finilize loading the
page files.
*/
window.addEventListener('load', initMapRendering);
