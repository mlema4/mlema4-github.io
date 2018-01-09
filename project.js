// JavaScript File

    // JavaScript File
var projects = [
    {"name": "Data app",
    "img_src": "./img/project3.png",
    "description": "Retrieves data from database using the filters provided from the user in the input form",
    "styling" : "display:inline-block",
    "src": "https://mlema4.github.io/IT202/project3/"
    },
    {"name": "Canvas app",
    "img_src": "./img/project4.png",
    "description": "Simple game using the canvas element in HTML and javascript",
    "src": "https://mlema4.github.io/IT202/project4/"
    },
    {"name": "Weather PWA tutorial",
    "img_src": "./img/project5.png",
    "description": "PWA tutorial utilizing a service worker to implement offline functionality",
    "src": "https://mlema4.github.io/IT202/project5/"
    },
    {"name": "Sound Horn app",
    "img_src": "./img/project7.png",
    "description": "Web application utilizing a service worker to play a simple airhorn",
    "src": "https://mlema4.github.io/IT202/project7/"
    },
    {"name": "React Tic-tac-toe",
    "img_src": "./img/project8.png",
    "description": "Tic tac toe game in React JS ",
    "src": "https://mlema4.github.io/IT202/project8/"
    },
    {"name": "15Puzzle Game",
    "img_src": "./img/fifteen.png",
    "description": "15 puzzle game in java with breadth first search solver",
    "src": "https://github.com/mlema4/Fifteen-Puzzle"
    },
     {"name": "NetWork BattleShip",
    "img_src": "./img/BattleShip.png",
    "description": "Client and server BattleShip",
    "src": "https://github.com/mlema4/BattleShip"
    }
    ];

$(function() {
    jQuery.each(projects, function(i, val) {
    console.log( "ready!" );
    console.log(val.name);
    var clone = $("#template").clone().removeAttr("id");
    clone.attr("id", "clone");
    clone.find(".card-title").text(val.name);
    clone.find("#description").text(val.description);
    clone.removeClass("hidden");
    clone.find("a").attr("href", val.src);
    clone.find("img").attr("src", val.img_src); 
    
    
    $("#cardRow").append(clone);
  });
  
/*  $.get( "", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});
*/
});

/*
  <div class="card card-dark col-md-3 col-sm-5 col-xs-6" id ="template" style="display:inline-block">
            <!--Card image-->
            <div class="view overlay hm-white-slight">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg" class="img-fluid" alt="">
              <a>
                <div class="mask"></div>
              </a>
            </div>
            <!--/.Card image-->
            <!--Card content-->
            <div class="card-body">
              <!--Social shares button-->
              <a class="activator"><i class="fa fa-share-alt white-text"></i></a>
              <!--Title-->
              <h4 class="card-title">Card title</h4>
              <hr>
              <!--Text-->
              <p class="card-text white-text">Description</p>
              <a href="#" class="d-flex flex-row-reverse">
                <h5 class="waves-effect waves-light p-2">See more <i class="fa fa-chevron-right"></i></h5>
              </a>
            </div>
            <!--/.Card content-->
          </div>*/

    
    