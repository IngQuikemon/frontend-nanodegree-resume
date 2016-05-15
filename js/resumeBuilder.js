//Declaration of the bio object containg the resume personal data.
 var bio = {
   'name' : 'Enrique Duran',
   'role' : 'Web Developer',
   'contacts' :{
     'mobile' : '888-8888',
     'email' : 'someone@mailserver.com',
     'twitter' : '@someone',
     'github' : 'http://github.com/someone/',
     'blog' : 'http://www.someone.com/',
     'location' : 'Houston,TX'
    },
   'biopic' : './images/angelic_marine.jpg',
   'welcomeMessage' : 'Thanks in advance for considering me for the position. One of the things I strive foremost, is to do my best, as well as to keep up with current technology. Play well with others as a team member, and like to help others accomplishing their tasks.',
   'skills': ['HTML','JavaScript','JQuery','.net']
 };

 /**
 * @description Function to render the bio section of the page.
 */
 bio.display = function(){
   $('.navbar-header').append(
     HTMLheaderName.replace('%data%',this.name)
   );
   $('.navbar-brand').append(
     HTMLheaderRole.replace('%data%',this.role)
   );
   $('#header').append(HTMLContactHolderImg);
   $('#header').append(HTMLContactHolderContent);
   $("#topContacts").append(HTMLmobile.replace("%data%",this.contacts.mobile));
   $("#topContacts").append(HTMLemail.replace("%data%",this.contacts.email));
   $("#topContacts").append(HTMLtwitter.replace("%data%",this.contacts.twitter));
   $("#topContacts").append(HTMLgithub.replace("%data%",this.contacts.github));
   $("#topContacts").append(HTMLblog.replace("%data%",this.contacts.blog));
   $("#topContacts").append(HTMLlocation.replace("%data%",this.contacts.location));
   $('#header').find('.panel-heading').append(
     mapHolder.replace('%data%','Bio')
   );
   $('#header').find('#mapHolderBio').append(
     mapItem.replace('%data%','Bio')
   );
   mapCollection.push({
     'name':'#mapItemBio',
     'location': this.contacts.location
   });
   $('#bioImg').append(
     this.biopic.length === 0 ?
      HTMLBioPicIcon :
      HTMLbioPic.replace('%data%',this.biopic)
   );
   $('#bioContent').find('.panel-body').append(
     HTMLwelcomeMsg.replace('%data%',this.welcomeMessage)
   );
   $('#letsConnect').append(
     HTMLmobile.replace('%data%',this.contacts.mobile)
   );
   $('#letsConnect').append(
     HTMLemail.replace('%data%',this.contacts.email)
   );
   $('#letsConnect').append(
     HTMLtwitter.replace('%data%',this.contacts.twitter)
   );
   $('#letsConnect').append(
     HTMLgithub.replace('%data%',this.contacts.github)
   );
   $('#letsConnect').append(
     HTMLblog.replace('%data%',this.contacts.blog)
   );
   $('#letsConnect').append(
     HTMLlocation.replace('%data%',this.contacts.location)
   );

   if(this.skills.length > 0){
     $('#bioContent').find('.panel-body').append(HTMLskillsStart);
     for(var x = 0; x < this.skills.length ; x++){
       $('#skills').append(HTMLskills.replace('%data%',this.skills[x]));
     }
   }
 };

//Declaration of the work object containg the work history data.
 var work = {
   'jobs' : [
     {
       'employer' : 'Woodforest National Bank',
       'title' : 'Software Developer',
       'location' : 'Houston, TX',
       'dates' : 'July 2009 - Current',
       'description' : 'In charge of development tasks within the application ' +
       'and future applications for the bank.'
     },
     {
       'employer' : 'TAE IT',
       'title' : 'Software Consultant',
       'location' : 'Monterrey, NL, Mexico',
       'dates' : 'July 2007 - July 2009',
       'description' : 'In charge of supporting companies with their ' +
       'development duties.'
     },
     {
       'employer' : 'Towa',
       'title' : 'Software Consultant',
       'location' : 'Monterrey, NL, Mexico',
       'dates' : 'July 2006 - July 2007',
       'description' : 'In charge of supporting companies with their ' +
       'development duties.'
     }
   ]
 };

 /**
 * @description Function to render the Work history section of the page.
 */
 work.display = function(){
   for(var i = 0; i < work.jobs.length;i++){
     $('#workExperience').append(HTMLworkStart);
     $('.work-entry:last').find('.panel-heading').append(
       HTMLWorkIcon
     );
     $('.work-entry:last').find('.panel-heading').append(
       HTMLworkEmployer.replace('%data%',work.jobs[i].employer) +
       HTMLworkTitle.replace('%data%',work.jobs[i].title));
     $('.work-entry:last').find('.panel-body').append(HTMLworkLocation.replace('%data%',work.jobs[i].location));
     $('.work-entry:last').find('.panel-body').append(HTMLworkDates.replace('%data%',work.jobs[i].dates));
     $('.work-entry:last').find('.panel-body').append(HTMLworkDescription.replace('%data%',work.jobs[i].description));
     $('.work-entry:last').find('.panel-body').append(mapHolder.replace('%data%','Work' + i));
     $('.work-entry:last').find('#mapHolderWork'+ i).append(mapItem.replace('%data%','Work' + i));
     mapCollection.push({
       'name':'#mapItemWork' + i,
       'location': work.jobs[i].location
     });
   }
 };

//Declaration of the project object containg the resume project history data.
 var projects = [
   {
     'title' : 'IVR',
     'dates' : 'January 2015 - March 2016',
     'description' : 'Created an API to be used with a new IVR system, that' +
     ' would allow the customers to ask for account information through a' +
     ' telephone system',
     'images' : ['./images/coming-soon_small.jpg']
   },
   {
     'title' : 'RQA',
     'dates' : 'March 2013 - August 2013',
     'description' : 'Web application that would allow the users to create' +
     'surveys that will allow the auditing of branch performance.',
     'images' : ['./images/coming-soon_small.jpg']
   },
   {
     'title' : 'Large Item Review',
     'dates' : 'January 2009 - July 2009',
     'description' : 'Application that allows the employee to validate ' +
     'checks with certain dubious amounts with a signature form for fraud.',
     'images' : ['./images/coming-soon_small.jpg']
   }
 ];

 /**
 * @description Function to render the project history section of the page.
 */
 projects.display = function(){
   for(var i = 0; i < this.length;i++){
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').find('.panel-heading').append(
        HTMLProjectIcon
      );
      $('.project-entry:last').find('.panel-heading').append(HTMLprojectTitle.replace('%data%',
        this[i].title));
      $('.project-entry:last').find('.panel-body').append(HTMLprojectDates.replace('%data%',
        this[i].dates));
      $('.project-entry:last').find('.panel-body').append(HTMLprojectDescription.replace('%data%',
        this[i].description));
      for(var x = 0; x < this[i].images.length;x++){
        $('.project-entry:last').find('.panel-body').append(HTMLprojectImage.replace('%data%',
          this[i].images[x]));
      }
   }
 };

//Declaration of the education object containg the education history data.
var education = {
  'schools' : [
    {
      'name' : 'Instituto de Tecnologias y artes',
      'degree' : 'Master in Virtual Reality and Videogames',
      'dates' : 'August 2003 - December 2005',
      'location' : 'Puebla, Puebla, Mexico',
      'majors' : ['N/A'],
      'url' : ''
    },
    {
      'name' : 'ITESM',
      'degree' : 'Computer Systems Engineer',
      'dates' : 'January 2008 - May 2001',
      'location' : 'San Luis Potosi, SLP, Mexico',
      'majors' : ['N/A'],
      'url' : 'none'
    }
  ],
  'onlineCourses' : [
    {
      'school' : 'Udacity',
      'title' : 'Front End Developer',
      'date' : 'February 2016 - Current',
      'url' : 'http://www.udacity.com'
    }
  ]
};

/**
* @description Function to render the education section of the page.
*/
education.display = function(){
  for(var i = 0; i < this.schools.length;i++){
    $('#education').append(HTMLschoolStart);
    $('.education-entry:last').find('.panel-heading').append(
      HTMLSchoolIcon
    );
    $('.education-entry:last').find('.panel-heading').append(
      HTMLschoolName.replace('%data%',this.schools[i].name) +
      HTMLschoolDegree.replace('%data%',this.schools[i].degree));
    $('.education-entry:last').find('.panel-body').append(
      HTMLschoolDates.replace('%data%',this.schools[i].dates));
    $('.education-entry:last').find('.panel-body').append(
      HTMLschoolLocation.replace('%data%',this.schools[i].location));
    for(var x = 0; x < this.schools[i].majors.length; x++){
      $('.education-entry:last').find('.panel-body').append(
        HTMLschoolMajor.replace('%data%',this.schools[i].majors[x]));
    }
    $('.education-entry:last').find('.panel-body').append(
      mapHolder.replace('%data%','School' + i)
    );
    $('.education-entry:last').find('#mapHolderSchool'+ i).append(
      mapItem.replace('%data%','School' + i)
    );
    mapCollection.push({
      'name':'#mapItemSchool' + i,
      'location': this.schools[i].location
    });

  }
  for(var e = 0; e < this.onlineCourses.length;e++){
    $('#education').append(HTMLschoolStart);
    $('.education-entry:last').find('.panel-heading').append(
      HTMLOnlineIcon
    );
    $('.education-entry:last').find('.panel-heading').append(
      HTMLonlineTitle.replace('%data%',this.onlineCourses[e].school) +
      HTMLonlineSchool.replace('%data%',this.onlineCourses[e].title));
    $('.education-entry:last').find('.panel-body').append(
      HTMLonlineDates.replace('%data%',this.onlineCourses[e].date));
    $('.education-entry:last').find('.panel-body').append(
      HTMLonlineURL.replace('%data%',this.onlineCourses[e].url));
  }
};

//invokes the building methods for each section of the page.
bio.display();
work.display();
projects.display();
education.display();

//Adss an event to trigger the slide option in the carousel navigation.
$('.nav a').on('click', function(){
   $('.nav').find('.active').removeClass('active');
   $(this).parent().addClass('active');
});

//adds an event listener to refresh the maps when being displayed.
$('#myCarousel').on('slid.bs.carousel', function (e) {
  mapObjects.forEach(refreshMaps); // stops modal from being shown
});
