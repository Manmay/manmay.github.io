var app = angular.module("app", ["ng-file-model"]);

app.controller('CareerCtrl', function($scope, $http) {
	
  $scope.profiles = [{
    name: "Freshers",
    description: "Fresh graduates, all new careers that you will be proud of very soon.",
    image: "img/fresher-min.jpg",
    mode: "default"
  }, {
      name: "Experienced",
      description: "Experienced professionals a great career awaits you.",
      image: "img/exprienced-min.jpg",
      mode: "default"
    },{
    name: "Consulting",
    description: "Looking to build a career in Consulting or Sales. We are looking for you.",
    image: "img/consulting-min.jpg",
    mode: "default"
  }, {
    name: "Management",
    description: "Project managers, Program Managers, Software Development Managers, we're looking for you.",
    image: "img/management-min.jpg",
    mode: "default"
  }, {
    name: "Solutioning",
    description: "Social Media, Mobile, Analytics, Cloud computing experts, Come be part of our enterprise solutions.",
    image: "img/solutioning-min.jpg",
    mode: "default"
  }, {
    name: "Data Analytics",
    description: "Become an integral part of our journey in Digital, Big data, BI and Analytics.",
    image: "img/data-analytics-min.jpg",
    mode: "default"
  },{
    name: "Technology",
    description: "Business analysts, systems analysts, technology / solution architects, designers and programmers. This one's for you.",
    image: "img/developer-min.jpg",
    mode: "default"
  }, {
    name: "Confused",
    description: "Not sure about your career path. Just send us your resume. We will help you finding your career goal.",
    image: "img/confused-min.jpg",
    mode: "default"
  }];

  $scope.apply = function(index){
    for(var i=0; i< $scope.profiles.length; i++){
      if(i==index){
        $scope.profiles[i].mode = "apply";
      } else {
    	  if($scope.profiles[i].mode=='apply'){
    		  $scope.profiles[i].mode = "default";
    	  } 
      }
    }
  };

  $scope.reset = function(index){
    $scope.profiles[index].mode = "default";
  };

  $scope.uploadResume = function(index){
	  var profile = $scope.profiles[index];
	  var fd = new FormData();
      fd.append('file', profile.resume.file);
      $http.post("/api/career/resume?profile="+profile.name, fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
      })
      .success(function(){
    	  console.log("Success");
    	  profile.resume = null;
    	  profile.mode = "applied";
      })
      .error(function(){
    	  console.log("Error");
      });
  };

});


app.controller('ContactCtrl', function($scope) {

  $scope.init = function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, a[href='#career'], a[href='#search']").on('click', function(event) {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    });

    $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
      });
    });

  };

});

app.controller("SubscriptionCtrl", function($http){

  $http({
    url: 'api/marketing/subscribe/'+email,
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  }).success(function(data, status){
      console.log('Success');
  }).error(function(error, status){
      console.log('Error');
  });

});

<!-- Add Google Maps -->

// var myCenter = new google.maps.LatLng(-26.107214,28.0519383);

// function initialize() {
// var mapProp = {
//   center:myCenter,
//   zoom:12,
//   scrollwheel:false,
//   draggable:false,
//   mapTypeId:google.maps.MapTypeId.ROADMAP
//   };

// var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

// var marker = new google.maps.Marker({
//   position:myCenter,
//   });

// marker.setMap(map);
// }

// google.maps.event.addDomListener(window, 'load', initialize);


$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, a[href='#career'], a[href='#search']").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });

})

