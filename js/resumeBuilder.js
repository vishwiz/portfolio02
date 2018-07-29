
var bio={
    "name":"vishal singh",
    "Role":"Web Developer",
    "contacts":{
        "email_id":"- vishwiz7895@gmail.com",
        "contact":"- 6759-392-1923",
        "twitter":"- vishwiz",
        "github":"- vishal singh",
        "location": "- INDIA"
    },

       "skill" :["HTML","CSS","JAVASCRIPT","Bootstrap","C++","ReactJs"],
      "welcome":"welcome to the world of wizards",
    "biopic" : "images/fry.jpg"
}

var education= {
    "schools":[
                {
                 "name": "MGM SENIOR SECONDARY SCHOOL",
                 "city": "BHILAI  , CHATTISGARH  , INDIA",
                 "degree": "12th",
                 "dates": 2013,
                 "major": "COMPUTER AND MATHS",
                 "location": "BHILAI"
                 },
             {
               "name": "RUNGTA COLLEGE OF ENGG. AND TECHNOLOGY",
                "city": "BHILAI  , CHATTISGARH  , INDIA",
                "degree": "B.E",
                "dates": "2017",
                 "major": "COMPUTER SCIENCE",
                 "location": "BHILAI"
               }
           ],

              "onlinecourse":[

                 {
                    "title": "1 : Javascript basics course",
                    "school": "UDACITY",
                    "dates": 2017,
                    "url": "https://classroom.udacity.com/courses/ud804"
                 },
                 {
                    "title": "2 : Intro to Html and Css",
                    "school": "UDACITY",
                    "dates": 2017,
                    "url": "https://classroom.udacity.com/courses/ud304"
                 }
            ]

   }


  var work= {
    "jobs": [
    {
        "employer": "Planet Express",
        "title": "Delivery Boy",
        "dates": 2016,
        "description": "Delivery Driver job description This Delivery Driver job descriptiontemplate is optimized for posting to online job boards or careers pages and easy tocustomize for your company.",
        "location": "mumbai"
    },

    {
        "employer": "Panucci's Pizza",
        "title": "Delivery Boy",
        "dates": 2015,
        "description":"Delivery Driver job description. This Delivery Driver job description template is optimized for posting to online job boards or careers pages and easy to customize for your company.",
        "location": "mumbai"
    }
    ]
  }


  var projects={
    "project": [
    {
        "title": "Sample project 1",
        "dates": 2016,
        "description": "Delivery Driver job description. This Delivery Driver job description template is optimized for posting to online job boards or careers pages and easy to customize for your company.",
        "images":[
        "images/fry.jpg","images/fry.jpg"
        ]
    }

    ]
  }


   var n= HTMLheaderName.replace("%data%", bio.name);
   var r= HTMLheaderRole.replace("%data%", bio.Role);
   $("#header").prepend(r);
   $("#header").prepend(n);


   var con= HTMLmobile.replace("%data%" , bio.contacts.contact);
   var email= HTMLemail.replace("%data%", bio.contacts.email_id);
   var tweet=HTMLtwitter.replace("%data%", bio.contacts.twitter);
   var git=HTMLgithub.replace("%data%", bio.contacts.github);
   var loc=HTMLlocation.replace("%data%", bio.contacts.location);
   var pic=HTMLbioPic.replace("%data%", bio.biopic);
   var wel=HTMLwelcomeMsg.replace("%data%", bio.welcome);


$("#topContacts").append(con);
$("#topContacts").append(email);
$("#topContacts").append(tweet);
$("#topContacts").append(git);
$("#topContacts").append(loc);
$("#header").append(pic);
$("#header").append(wel);


$("#footerContacts").append(con);
$("#footerContacts").append(email);
$("#footerContacts").append(tweet);
$("#footerContacts").append(git);
$("#footerContacts").append(loc);

if(bio.skill.length > 0){
    $("#header").append(HTMLskillsStart);
    var fsk=HTMLskills.replace("%data%", bio.skill[0]);
    $("#skills").append(fsk);

    fsk=HTMLskills.replace("%data%", bio.skill[1]);
     $("#skills").append(fsk);

     fsk=HTMLskills.replace("%data%", bio.skill[2]);
     $("#skills").append(fsk);


     fsk=HTMLskills.replace("%data%", bio.skill[3]);
     $("#skills").append(fsk);


      fsk=HTMLskills.replace("%data%", bio.skill[4]);
      $("#skills").append(fsk);

      fsk=HTMLskills.replace("%data%", bio.skill[5]);
      $("#skills").append(fsk);

  }



   var displaywork= function()
   {
    for(i in work.jobs)
  {
    $("#workExperience").append(HTMLworkStart);
    var wrk= HTMLworkEmployer.replace("%data%", work.jobs[i].employer);

    var tit= HTMLworkTitle.replace("%data%", work.jobs[i].title);

    var wrkt= wrk + tit;
    $(".work-entry:last").append(wrkt);

    var da= HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(da);

    var lo= HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry:last").append(lo);

    var des= HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(des);


  }
}

displaywork();



/*function inName(){



    var k= bio.name.trim().split(' ');
    console.log(k);
       k[0]=k[0].slice(0,1).toUpperCase() + k[0].slice(1).toLowerCase();
       k[1]=k[1].toUpperCase();

    var t= k[0]+" "+k[1];
 var oldSpelling = $('#name').text();
console.log(t);
}

$("#main").append(internationalizeButton);*/



projects.diplay= function(){

    for(i in projects.project){


    $("#projects").append(HTMLprojectStart);
    var ti= HTMLprojectTitle.replace("%data%", projects.project[i].title);
    $(".project-entry:last").append(ti);

    var da= HTMLprojectDates.replace("%data%", projects.project[i].dates);
    $(".project-entry:last").append(da);

     var des= HTMLprojectDescription.replace("%data%", projects.project[i].description);
     $(".project-entry:last").append(des);

     if(projects.project[i].images.length>0){
       for(k in projects.project[i].images){

     var im=HTMLprojectImage.replace("%data%", projects.project[i].images[k]);
     $(".project-entry:last").append(im);
 }
  }
  }
}
projects.diplay();


$("#mapDiv").append(googleMap);





for(i in education.schools){
    $("#education").append(HTMLschoolStart);

    var n= HTMLschoolName.replace("%data%", education.schools[i].name);
    var d= HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var dn= n+d;

    $(".education-entry:last").append(dn);

    var da= HTMLschoolDates.replace("%data%", education.schools[i].dates);
    $(".education-entry:last").append(da);

    var ma= HTMLschoolMajor.replace("%data%", education.schools[i].major);
    $(".education-entry:last").append(ma);

    var loc= HTMLschoolLocation.replace("%data%", education.schools[i].location);
    $(".education-entry:last").append(loc);



}
        $(".education-entry:last").append(HTMLonlineClasses);

     for(i in education.onlinecourse){


   var ti= HTMLonlineTitle.replace("%data%", education.onlinecourse[i].title);
   var on= HTMLonlineSchool.replace("%data%", education.onlinecourse[i].school);
   var ot= ti+on;

   $(".education-entry:last").append(ot);

   var da= HTMLonlineDates.replace("%data%", education.onlinecourse[i].dates);
   $(".education-entry:last").append(da);

   var ur= HTMLonlineURL.replace("%data%", education.onlinecourse[i].url);
   $(".education-entry:last").append(ur);
}
