var portfolio =
{
  "webGeo": [
    {
      "name": "webGeo_1",
      "url": "asset/geo prototype - overview_compressed.gif",
      // "description": "webGeo application plots devices on actual geographic location organized in device hierarchy. There is a search box on the left to allow find device. Legend panel on the bottom right corner tells us about icon definition and color code of each device."
      "description" : "webGeo application plots thousands of devices on geographical location. The application utilizes HERE maps platform, jQuery, C# and REST API technology. There is a search box on the left to provide a quick search accessibility to each devices. On the bottom right of the screen, there is a legend panel providing description and status of each icon. The legend panel contains three tabs of information corresponding to different view modes on the map."
    },
    {
      "name": "webGeo_2",
      "url": "asset/Loading points.gif",
      "description": "The application organizes data points based on the device hierarchy from a GIS file. In this demo, there is a list of electrical substations, and each substation contains thousands of meters. Therefore, the application is optimized to work with thousands of data points to ensure a responsive user experience."
    },
    {
      "name": "webGeo_3",
      "url": "asset/2016-01-15_22-16-49_00001_smaller_compressed.gif",
      "description": "Network diagram is one of the features we have integrated in the application to show relationship diagram of each devices. Different color code is used to represent eletrical phase and type of relationship. In this case, we use a solid line to represent an overhead transmission line while a dash line indicates an underground line."
    },
    {
      "name": "webGeo_4",
      "url": "asset/geo product with SignalR_00001_smaller_compressed.gif",
      "description": "SignalR is used to push data from the server to client's web browser. Through this technology, we can broadcast real-time information for each device to multiple clients at the same time."
    },
    {
      "name": "webGeo_3",
      "url": "asset/geo prototype - loading points_compressed.gif",
      "description": ""
    }
  ],
  "networkDiagram": [
    {
      "name": "diagram1",
      "url": "asset/network diagram.gif",
      "description": "This is one of my prototype applications that I have built in a week to explore the JS drawing library. I used JsPlumb library, jQuery and SVG."
    }
  ],
  "oneLineDiagram": [
    {
      "name": "oneLineDiagram1",
      "url": "asset/one line diagram with D3.gif",
      "description": "This is another prototype of data visualization of electrical diagram from GIS file. The logic has been used in the webGeo application. I used D3 and jQuery in this application."
    }
  ]
};

// default starting screenshot
var i=0;
var firstLoad = true;

$(document).ready(function(){
  // default
  $(".loading-animation").hide();
   loadScreenshot(i);

   $(".next").click(function(){
     if (i < portfolio.webGeo.length - 1)
       loadScreenshot(++i);
   });

   $(".prev").click(function(){
     if (i > 0)
       loadScreenshot(--i);
   });

   $(".contact-button").click(function(){
     $(window).scrollTop($('.contactSection').offset().top);
   });

   firstLoad = false;

});

function loadScreenshot(i){
  if (firstLoad == false)
  {
    showLoadingGif();
  }

  $("#webgeo-screenshot").attr("src", portfolio.webGeo[i].url);
  $("#webgeo-screenshot").on('load', function(){
      $(".loading-animation").hide();
      $("#webgeo-screenshot").css("opacity", 1);
  });

  //$("#webgeo-screenshot").attr("src", portfolio.webGeo[i].url);
  $(".screenshot-description").text(portfolio.webGeo[i].description);
  $("#screenshot-index-start").text(i + 1);
  $("#screenshot-index-end").text(portfolio.webGeo.length);
}

function showLoadingGif(){
    $("#webgeo-screenshot").css("opacity", 0.2);
    $(".loading-animation").show();
}
