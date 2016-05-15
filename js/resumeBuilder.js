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
   'bioPIC' : '',
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
   $('#bioImg').append(
     this.bioPIC.length === 0 ?
      HTMLBioPicIcon :
      HTMLbioPic.replace('%data%',this.bioPIC)
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
   $('#bioContent').find('.panel-body').append(
     mapHolder.replace('%data%','Bio')
   );
   $('#bioContent').find('#mapHolderBio').append(
     mapItem.replace('%data%','Bio')
   );
   mapCollection.push({
     'name':'#mapItemBio',
     'location': this.contacts.location
   });
 };

//Declaration of the work object containg the work history data.
 var work = {
   'jobs' : [
     {
       'employeer' : 'Woodforest National Bank',
       'title' : 'Software Developer',
       'location' : 'Houston, TX',
       'dates' : 'July 2009 - Current',
       'description' : 'In charge of development tasks within the application ' +
       'and future applications for the bank.'
     },
     {
       'employeer' : 'TAE IT',
       'title' : 'Software Consultant',
       'location' : 'Monterrey, NL, Mexico',
       'dates' : 'July 2007 - July 2009',
       'description' : 'In charge of supporting companies with their ' +
       'development duties.'
     },
     {
       'employeer' : 'Towa',
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
   if(work.jobs.length > 0){
     for(var job in work.jobs){
       $('#workExperience').append(HTMLworkStart);
       $('.work-entry:last').find('.panel-heading').append(
         HTMLWorkIcon
       );
       $('.work-entry:last').find('.panel-heading').append(
         HTMLworkEmployer.replace('%data%',work.jobs[job].employeer) +
         HTMLworkTitle.replace('%data%',work.jobs[job].title));
       $('.work-entry:last').find('.panel-body').append(HTMLworkLocation.replace('%data%',work.jobs[job].location));
       $('.work-entry:last').find('.panel-body').append(HTMLworkDates.replace('%data%',work.jobs[job].dates));
       $('.work-entry:last').find('.panel-body').append(HTMLworkDescription.replace('%data%',work.jobs[job].description));
       $('.work-entry:last').find('.panel-body').append(mapHolder.replace('%data%','Work' + job));
       $('.work-entry:last').find('#mapHolderWork'+ job).append(mapItem.replace('%data%','Work' + job));
       mapCollection.push({
         'name':'#mapItemWork' + job,
         'location': work.jobs[job].location
       });
     }
   }
 };

//Declaration of the project object containg the resume project history data.
 var project = {
   'projects' : [
     {
       'title' : 'IVR',
       'dates' : 'January 2015 - March 2016',
       'description' : 'Created an API to be used with a new IVR system, that' +
       ' would allow the customers to ask for account information through a' +
       ' telephone system',
       'images' : './images/coming-soon_small.jpg'
     },
     {
       'title' : 'RQA',
       'dates' : 'March 2013 - August 2013',
       'description' : 'Web application that would allow the users to create' +
       'surveys that will allow the auditing of branch performance.',
       'images' : './images/coming-soon_small.jpg'
     },
     {
       'title' : 'Large Item Review',
       'dates' : 'January 2009 - July 2009',
       'description' : 'Application that allows the employee to validate ' +
       'checks with certain dubious amounts with a signature form for fraud.',
       'images' : './images/coming-soon_small.jpg'
     },
   ]
 };

 /**
 * @description Function to render the project history section of the page.
 */
 project.display = function(){
   if(this.projects.length > 0){
     for(var proj in this.projects){
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').find('.panel-heading').append(
          HTMLProjectIcon
        );
        $('.project-entry:last').find('.panel-heading').append(HTMLprojectTitle.replace('%data%',
          this.projects[proj].title));
        $('.project-entry:last').find('.panel-body').append(HTMLprojectDates.replace('%data%',
          this.projects[proj].dates));
        $('.project-entry:last').find('.panel-body').append(HTMLprojectDescription.replace('%data%',
          this.projects[proj].description));
        $('.project-entry:last').find('.panel-body').append(HTMLprojectImage.replace('%data%',
          this.projects[proj].images));
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
      'majors' : [],
      'url' : ''
    },
    {
      'name' : 'ITESM',
      'degree' : 'Computer Systems Engineer',
      'dates' : 'January 2008 - May 2001',
      'location' : 'San Luis Potosi, SLP, Mexico',
      'majors' : [],
      'url' : 'none'
    }
  ],
  'onlineCourses' : [
    {
      'school' : 'Udacity',
      'title' : 'Front End Developer',
      'dates' : 'February 2016 - Current',
      'url' : 'http://www.udacity.com'
    }
  ]
};

/**
* @description Function to render the education section of the page.
*/
education.display = function(){
  if(this.schools.length > 0){
    for(var school in this.schools){
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').find('.panel-heading').append(
        HTMLSchoolIcon
      );
      $('.education-entry:last').find('.panel-heading').append(
        HTMLschoolName.replace('%data%',this.schools[school].name) +
        HTMLschoolDegree.replace('%data%',this.schools[school].degree));
      $('.education-entry:last').find('.panel-body').append(
        HTMLschoolDates.replace('%data%',this.schools[school].dates));
      $('.education-entry:last').find('.panel-body').append(
        HTMLschoolLocation.replace('%data%',this.schools[school].location));
      //$('.education-entry:last').find('.panel-body').append(
        //HTMLschoolMajor.replace('%data%',this.schools[school].majors));
      $('.education-entry:last').find('.panel-body').append(
        mapHolder.replace('%data%','School' + school)
      );
      $('.education-entry:last').find('#mapHolderSchool'+ school).append(
        mapItem.replace('%data%','School' + school)
      );
      mapCollection.push({
        'name':'#mapItemSchool' + school,
        'location': this.schools[school].location
      });

    }
  }
  if(this.onlineCourses.length > 0){
    //$('#education').append(HTMLonlineClasses);
    for(online in this.onlineCourses){
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').find('.panel-heading').append(
        HTMLOnlineIcon
      );
      $('.education-entry:last').find('.panel-heading').append(
        HTMLonlineTitle.replace('%data%',this.onlineCourses[online].school) +
        HTMLonlineSchool.replace('%data%',this.onlineCourses[online].title));
      $('.education-entry:last').find('.panel-body').append(
        HTMLonlineDates.replace('%data%',this.onlineCourses[online].dates));
      $('.education-entry:last').find('.panel-body').append(
        HTMLonlineURL.replace('%data%',this.onlineCourses[online].url));
    }
  }
};

//invokes the building methods for each section of the page.
bio.display();
work.display();
project.display();
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
