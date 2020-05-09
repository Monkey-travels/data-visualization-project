
// init();
function init(oneStar) {
 var oneStarLayout = {
         xaxis: {
           range: [-1, 1]
         },
         yaxis: {
           range: [0, 1]
         },
         title: 'One Star Sentiment Analysis'
  }

  var oneStarData = [oneStar];
  // var twoStarData = [twoStar];
  // var threeStarData = [threeStar];
  // var fourStarData = [fourStar];
  // var fiveStarData = [fiveStar];

  Plotly.newPlot('firstDiv', oneStarData, oneStarLayout);
  // Plotly.newPlot('secondDiv', twoStarData, twoStarLayout);
  // Plotly.newPlot('thirdDiv', threeStarData, threeStarLayout);
  // Plotly.newPlot('fourthDiv', fourStarData, fourStarLayout);
  // Plotly.newPlot('fifthDiv', fiveStarData, fiveStarLayout);
}


init(oneStar);

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("body").on("change", updatePlotly);


// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.node().value;

  var CHART = d3.selectAll("#firstDiv").node();

  // Initialize x and y arrays
  var x = [];
  var y = [];
  var title = "";

  switch (dataset) {
    case "One Star":
      x = oneStar.x;
      y = oneStar.y;
      title = oneStar.name;
      break;

    case "Two Star":
      x = twoStar.x;
      y = twoStar.y;
      title = twoStar.name
      break;

    case "Three Star":
      x = threeStar.x;
      y = threeStar.y;
      title = threeStar.name
      break;

    case "Four Star":
       x = fourStar.x;
       y = fourStar.y;
       title = fourStar.name
       break;
    
    case "Five Star":
      x = fiveStar.x;
      y = fiveStar.y;
      title = fiveStar.name
      break;

    default:
      x = oneStar.x;
      y = oneStar.y;
      title = oneStar.name;
      break;
  }


  // Note the extra brackets around 'x' and 'y'
    
    

    //Plotly.newPlot(CHART, starData, starLayout);

    Plotly.restyle(CHART, "x", [x]);
    Plotly.restyle(CHART, "y", [y]);
    Plotly.restyle(CHART, "marker.color", [y])
    var update = {
      title: title + " Sentiment Analysis", // updates the title
    };
    Plotly.relayout(CHART, update)
  
  
     //document.getElementById("firstDiv").innerHTML = `<h3 class="comparison-header">Five Star Sentiment Analysis</h3><img src="./static/img/5_star_sentiment.png" class="comparison-image ">`
     
  
}

