/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
   "name" : "Enrique Duran",
   "role" : "Web Developer",
   "contacts" :{
     "mobile" : "None",
     "email" : "None",
     "twitter" : "None",
     "github" : "None",
     "blog" : "None",
     "location" : "Houston,TX"
    },
   "bioPIC" : "http://vignette3.wikia.nocookie.net/steamtradingcards/images/0/06/Scribblenauts_Unmasked_Foil_8.png/revision/latest?cb=20140203103722",
   "welcomeMessage" : "Welcome to my domain.",
   "skills": ["HTML","JavaScript","JQuery",".net"]
 };

 bio.display = function(){
   $("#header").prepend(HTMLheaderRole.replace("%data%",this.role));
   $("#header").prepend(HTMLheaderName.replace("%data%",this.name));
   $("#header").append(HTMLbioPic.replace("%data%",this.bioPIC));
   $("#header").append(HTMLwelcomeMsg.replace("%data%",this.welcomeMessage));
   $("#topContacts").append(HTMLmobile.replace("%data%",this.contacts.mobile));
   $("#topContacts").append(HTMLemail.replace("%data%",this.contacts.email));
   $("#topContacts").append(HTMLtwitter.replace("%data%",this.contacts.twitter));
   $("#topContacts").append(HTMLgithub.replace("%data%",this.contacts.github));
   $("#topContacts").append(HTMLblog.replace("%data%",this.contacts.blog));
   $("#topContacts").append(HTMLlocation.replace("%data%",this.contacts.location));

   if(this.skills.length > 0){
     $("#header").append(HTMLskillsStart);
     for(var x = 0; x < this.skills.length ; x++){
       $("#skills").append(HTMLskills.replace("%data%",this.skills[x]));
     }
   }
 }

 var work = {
   "jobs" : [
     {
       "employeer" : "Woodforest National Bank",
       "title" : "Software Developer",
       "location" : "Houston, TX",
       "dates" : "July 2009 - Current",
       "description" : "In charge of development tasks within the application " +
       "and future applications for the bank."
     },
     {
       "employeer" : "TAE IT",
       "title" : "Software Consultant",
       "location" : "Monterrey, NL, Mexico",
       "dates" : "July 2007 - July 2009",
       "description" : "In charge of supporting companies with their " +
       "development duties."
     },
     {
       "employeer" : "Towa",
       "title" : "Software Consultant",
       "location" : "Monterrey, NL, Mexico",
       "dates" : "July 2006 - July 2007",
       "description" : "In charge of supporting companies with their " +
       "development duties."
     }
   ]
 };

 work.display = function(){
   if(work.jobs.length > 0){
     $("#workExperience").append(HTMLworkStart);
     for(job in work.jobs){
       $(".work-entry:last").append(
         HTMLworkEmployer.replace("%data%",work.jobs[job].employeer) +
         HTMLworkTitle.replace("%data%",work.jobs[job].title));
         $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].location));
         $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
         $(".work-entry:last").append(  HTMLworkDescription.replace("%data%",work.jobs[job].description));
     }
   }
 }

 var project = {
   "projects" : [
     {
       "title" : "IVR",
       "dates" : "January 2015 - March 2016",
       "description" : "Created an API to be used with a new IVR system, that" +
       " would allow the customers to ask for account information through a" +
       " telephone system",
       "images" : "Not Available"
     },
     {
       "title" : "RQA",
       "dates" : "March 2013 - August 2013",
       "description" : "Web application that would allow the users to create" +
       "surveys that will allow the auditing of branch performance.",
       "images" : "Not available"
     },
     {
       "title" : "Large Item Review",
       "dates" : "January 2009 - July 2009",
       "description" : "Application that allows the employee to validate " +
       "checks with certain dubious amounts with a signature form for fraud.",
       "images" : "Not available"
     },
   ]
 };

 project.display = function(){
   if(this.projects.length > 0){
     for(proj in this.projects){
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",
          this.projects[proj].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%",
          this.projects[proj].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",
          this.projects[proj].description));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%",
          this.projects[proj].images));
     }
   }
 }


var education = {
  "schools" : [
    {
      "name" : "Instituto de Tecnologias y artes",
      "degree" : "Master in Virtual Reality and Videogames",
      "dates" : "August 2003 - December 2005",
      "location" : "Puebla, Puebla, Mexico",
      "majors" : [],
      "url" : ""
    },
    {
      "name" : "ITESM",
      "degree" : "Computer Systems Engineer",
      "dates" : "January 2008 - May 2001",
      "location" : "San Luis Potosi, SLP, Mexico",
      "majors" : [],
      "url" : "none"
    }
  ],
  "onlineCourses" : [
    {
      "school" : "Udacity",
      "title" : "Front End Developer",
      "dates" : ".3",
      "url" : "http://www.udacity.com"
    }
  ]
};

education.display = function(){
  if(this.schools.length > 0){
    for(school in this.schools){
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(
        HTMLschoolName.replace("%data%",this.schools[school].name) +
        HTMLschoolDegree.replace("%data%",this.schools[school].degree));
      $(".education-entry:last").append(
        HTMLschoolDates.replace("%data%",this.schools[school].dates));
      $(".education-entry:last").append(
        HTMLschoolLocation.replace("%data%",this.schools[school].location));
      $(".education-entry:last").append(
        HTMLschoolMajor.replace("%data%",this.schools[school].majors));
      
    }
  }
  if(this.onlineCourses.length > 0){
    $("#education").append(HTMLonlineClasses);
    for(online in this.onlineCourses){
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(
        HTMLonlineTitle.replace("%data%",this.onlineCourses[online].school) +
        HTMLonlineSchool.replace("%data%",this.onlineCourses[online].title));
      $(".education-entry:last").append(
        HTMLonlineDates.replace("%data%",this.onlineCourses[online].dates));
      $(".education-entry:last").append(
        HTMLonlineURL.replace("%data%",this.onlineCourses[online].url));
    }
  }
}



//var inName = function(name){
//  name = name.trim().split(" ");
//  console.log(name);
//  name[1] = name[1].toUpperCase();
//  name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1)
//  return name[0] + " " + name[1];
//}
//$("#header").append(internationalizeButton);
//$(document).click(function(loc){
//  logClicks(loc.pageX,loc.pageY);
//});



//var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.employer);
//var formattedWorkPosition = HTMLworkTitle.replace("%data%",work.position);
//var formattedWorkYears = HTMLworkDates.replace("%data%",work.years);
//var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.city);

//var formattedEducationSchool = HTMLschoolName.replace("%data%",education.school);
//var formattedEducationDegree = HTMLschoolDegree.replace("%data%",education.degree);
//var formattedEducationDates = HTMLschoolDates.replace("%data%",education.schoolYears);
//var formattedEducationCity = HTMLschoolLocation.replace("%data%",education.schoolCity);

bio.display();
work.display();
project.display();
education.display();
$("#mapDiv").append(googleMap);

//$("#workExperience").append(HTMLworkStart);
//$("#workExperience").append(formattedWorkEmployer + formattedWorkPosition);
//$("#workExperience").append(formattedWorkYears);
//$("#workExperience").append(formattedWorkLocation);
