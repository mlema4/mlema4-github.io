// JavaScript File

    // JavaScript File
var projects = [
    {"name": "Data app",
    "src": "./img/project3.png",
    "description": "Retrieves data from database using the filters provided from the use in the input",
    "styling" : "display:inline-block"
    },
    {"name": "Canvas app",
    "src": "./img/project4.png",
    "description": "Simple game using the canvas element in HTML and javascript",
    "styling" : "display:inline-block"
    }];

$(function() {
    jQuery.each(projects, function(i, val) {
    console.log( "ready!" );
    console.log(val.name);
    var clone = $("#template").clone().removeAttr("id");
    clone.find(".card-title").text(val.name);
    clone.find("#description").text(val.description);
    clone.find("img").attr("src", val.src);
    
    $(".cardContainer").append(clone);
  });
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

    
    