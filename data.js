var portfolio =
{
  "webGeo": [
    {
      "name": "webGeo_1",
      "url": "asset/geo prototype - overview_0000001.gif",
      "description": "webGeo application plots devices on actual geographic location organized in device hierarchy. There is a search box on the left to allow find device. Legend panel on the bottom right corner tells us about icon definition and color code of each device."
    },
    {
      "name": "webGeo_2",
      "url": "asset/geo prototype - overview_0000002.gif",
      "description": "webGeo application plots devices on actual geographic location organized in device hierarchy. There is a search box on the left to allow find device. Legend panel on the bottom right corner tells us about icon definition and color code of each device."
    },
    {
      "name": "webGeo_2",
      "url": "asset/Loading points.gif",
      "description": "The application organizes data points based on the hierarchy from GIS file. In this demo, there is a list of electrical substations, and each substation comprises of thousands of meters."
    },
    {
      "name": "webGeo_3",
      "url": "asset/2016-01-15_22-16-49_00001.gif",
      "description": "Network diagram is one of the features we have integrated in the application to show relationship diagram of each devices. We use different color code for each line to represent eletrical phase and type of relationship."
    },
    {
      "name": "webGeo_4",
      "url": "asset/geo product with SignalR_00001.gif",
      "description": "Show SignalR capabilities"
    },
    {
      "name": "webGeo_3",
      "url": "asset/geo prototype - loading points.gif",
      "description": "geo product with SignalR"
    },
    {
      "name": "webGeo_5",
      "url": "asset/Loading points of FR.gif",
      "description": "geo product with SignalR"
    }
  ],
  "networkDiagram": [
    {
      "name": "diagram1",
      "url": "asset/network diagram.gif",
      "description": "asdfasdf"
    }
  ],
  "oneLineDiagram": [
    {
      "name": "oneLineDiagram1",
      "url": "asset/one line diagram with D3.gif"
    }
  ]
};

// default starting screenshot
var i=0;

$(document).ready(function(){
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



});

function loadScreenshot(i){
  showLoadingGif();

  $(".screenshot-image").attr("src", portfolio.webGeo[i].url);
  $(".screenshot-image").on('load', function(){
      $(".loading-animation").hide();
      $(".screenshot-image").css("opacity", 1);
  });

  //$(".screenshot-image").attr("src", portfolio.webGeo[i].url);
  $(".screenshot-description").text(portfolio.webGeo[i].description);
  $("#screenshot-index-start").text(i + 1);
  $("#screenshot-index-end").text(portfolio.webGeo.length);
}

function showLoadingGif(){
    $(".screenshot-image").css("opacity", 0.2);
    $(".loading-animation").show();
}
