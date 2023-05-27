anychart.onDocumentReady(function (){
    // create a heatmap
    var chart = anychart.heatMap(getData());
    //set a custom color scale
    var colorScale= anychart.scales.ordinalColor();
    colorScale.ranges([
    {equal:500 , color:"#FFE6E6"},
    {from:600, to:1000, color:"#ffa590"},
    {from:1000, to:2000,color:"#ff8164"},
    {from:2000, to:3400,color:"#ff6242"},
    {from:3400, to:4000,color:"#ff4122"},
    {from:4000, to:4800,color:"#fb3b1e"},
    {from:4800, to:5000,color:"#ed3419"},
    {from:5000, to:6000,color:"#df2c15"},
    {from:6000, to:7000,color:"#c61a09"},

    {from:7000, to:9000,color:"#ff0000"},
    {from:9000, to:9700,color:"#dd0000"},
    {from:9700, to:12000,color:"#bb0000"},
    {from:12000, to:13000,color:"#9a0000"},
    {from:13000, to:14000,color:"#790001"},
    {from:14000, to:16000,color:"#540004"},
    {from:16000, to:24000,color:"#3a0002"},
    { equal:"(a) fewer than 500", color: "#ffc9bb" }
    ]);
    chart.colorScale(colorScale);
    //style the coloring in the hovered state
    chart
    .hovered()
    .fill(function (){
      return anychart.color.darken(this.sourceColor,0.25);
    });

    //hide the labels
    chart.labels(false);
    //customixe the axes
    chart.xAxis().stroke(null);
    chart.yAxis().stroke(null);
    chart.yAxis().labels().padding([0,10,0,0]);
    chart.xAxis().labels().padding([0,0,10,0]);

    chart.tooltip().title().useHtml(true);
    chart
    .tooltip()
    .useHtml(true)
    .titleFormat(function (){
      return "Injuries - " + this.heat;
    })
    .format(function(){
      return(
        '<span style="color: #CECECE">Year: </span>'+
          this.x +
          "<br/>"+
          '<span style="color: #CECECE">Person Type: </span>' +
          this.y
      );
    });
    //name the heatmap
    chart
    .title()
    .enabled(true)
    .text("Injuries in school bus-related crashes, 2012-2021")
    .padding([0,0,20,0]);
    //set the container fot the heatmap
    chart.container("container");
    //draw the heatmap
    chart.draw();
  });

  // add the data

  function getData(){
    return[
    {
      x: "2012",
      y: "Total",
      heat:9000
    },

    {
      x: "2012",
      y: "Occupant of other vehicle",
      heat:6000
    },

    
    {
      x: "2012",
      y: "School bus passenger",
      heat:2000
    },

    {
      x: "2012",
      y: "School bus driver",
      heat:1000
    },

    {
      x: "2012",
      y: "Pedestrian",
      heat:'(a) fewer than 500'
    },

    {
      x: "2012",
      y: "Bicyclist",
      heat:'(a) fewer than 500'
    },

    {
      x: "2012",
      y: "Other non-occupants",
      heat:'(a) fewer than 500'
    },

    //2013
    {
      x: "2013",
      y: "Total",
      heat:24000
    },

    {
      x: "2013",
      y: "Occupant of other vehicle",
      heat:9000
    },

    
    {
      x: "2013",
      y: "School bus passenger",
      heat:11000
    },

    {
      x: "2013",
      y: "School bus driver",
      heat:2000
    },

    {
      x: "2013",
      y: "Pedestrian",
      heat:1000
    },

    {
      x: "2013",
      y: "Bicyclist",
      heat:"(a) fewer than 500"
    },

    {
      x: "2013",
      y: "Other non-occupants",
      heat:"(a) fewer than 500"
    },
    //2014
    {
      x: "2014",
      y: "Total",
      heat:14000
    },

    {
      x: "2014",
      y: "Occupant of other vehicle",
      heat:9000
    },

    
    {
      x: "2014",
      y: "School bus passenger",
      heat:4000
    },

    {
      x: "2014",
      y: "School bus driver",
      heat:1000
    },

    {
      x: "2014",
      y: "Pedestrian",
      heat:'(a) fewer than 500'
    },

    {
      x: "2014",
      y: "Bicyclist",
      heat:'(a) fewer than 500'
    },

    {
      x: "2014",
      y: "Other non-occupants",
      heat:'(a) fewer than 500'
    },
    //2015
    {
      x: "2015",
      y: "Total",
      heat:13000
    },

    {
      x: "2015",
      y: "Occupant of other vehicle",
      heat:7000
    },

    
    {
      x: "2015",
      y: "School bus passenger",
      heat:4000
    },

    {
      x: "2015",
      y: "School bus driver",
      heat:2000
    },

    {
      x: "2015",
      y: "Pedestrian",
      heat:1000
    },

    {
      x: "2015",
      y: "Bicyclist",
      heat:"(a) fewer than 500"
    },

    {
      x: "2015",
      y: "Other non-occupants",
      heat:"(a) fewer than 500"
    },
    //2016
    {
      x: "2016",
      y: "Total",
      heat:16000
    },

    {
      x: "2016",
      y: "Occupant of other vehicle",
      heat:10000
    },

    
    {
      x: "2016",
      y: "School bus passenger",
      heat:5000
    },

    {
      x: "2016",
      y: "School bus driver",
      heat:1000
    },

    {
      x: "2016",
      y: "Pedestrian",
      heat:'(a) fewer than 500'
    },

    {
      x: "2016",
      y: "Bicyclist",
      heat:'(a) fewer than 500'
    },

    {
      x: "2016",
      y: "Other non-occupants",
      heat:'(a) fewer than 500'
    },
    //2017
    {
      x: "2017",
      y: "Total",
      heat:12000
    },

    {
      x: "2017",
      y: "Occupant of other vehicle",
      heat:7000
    },

    
    {
      x: "2017",
      y: "School bus passenger",
      heat:4000
    },

    {
      x: "2017",
      y: "School bus driver",
      heat:1000
    },

    {
      x: "2017",
      y: "Pedestrian",
      heat:1000
    },

    {
      x: "2017",
      y: "Bicyclist",
      heat:'(a) fewer than 500'
    },

    {
      x: "2017",
      y: "Other non-occupants",
      heat:'(a) fewer than 500'
    },
    //2018
    {
      x: "2018",
      y: "Total",
      heat:13000
    },

    {
      x: "2018",
      y: "Occupant of other vehicle",
      heat:7000
    },

    
    {
      x: "2018",
      y: "School bus passenger",
      heat:4000
    },

    {
      x: "2018",
      y: "School bus driver",
      heat:1000
    },

    {
      x: "2018",
      y: "Pedestrian",
      heat:1000
    },

    {
      x: "2018",
      y: "Bicyclist",
      heat:'(a) fewer than 500'
    },

    {
      x: "2018",
      y: "Other non-occupants",
      heat:'(a) fewer than 500'
    },
    //2019
    {
      x: "2019",
      y: "Total",
      heat:13000
    },

    {
      x: "2019",
      y: "Occupant of other vehicle",
      heat:6000
    },

    
    {
      x: "2019",
      y: "School bus passenger",
      heat:5000
    },

    {
      x: "2019",
      y: "School bus driver",
      heat:1000
    },

    {
      x: "2019",
      y: "Pedestrian",
      heat:1000
    },

    {
      x: "2019",
      y: "Bicyclist",
      heat:'(a) fewer than 500'
    },

    {
      x: "2019",
      y: "Other non-occupants",
      heat:'(a) fewer than 500'
    },
    //2020
    {
      x: "2020",
      y: "Total",
      heat:4800
    },

    {
      x: "2020",
      y: "Occupant of other vehicle",
      heat:3400
    },

    
    {
      x: "2020",
      y: "School bus passenger",
      heat:600
    },

    {
      x: "2020",
      y: "School bus driver",
      heat:500
    },

    {
      x: "2020",
      y: "Pedestrian",
      heat:'(a) fewer than 500'
    },

    {
      x: "2020",
      y: "Bicyclist",
      heat:'(a) fewer than 500'
    },

    {
      x: "2020",
      y: "Other non-occupants",
      heat:'(a) fewer than 500'
    },
    //2021
    {
      x: "2021",
      y: "Total",
      heat:9700
    },

    {
      x: "2021",
      y: "Occupant of other vehicle",
      heat:4000
    },

    
    {
      x: "2021",
      y: "School bus passenger",
      heat:'(a) fewer than 500'
    },

    {
      x: "2021",
      y: "School bus driver",
      heat:1400
    },

    {
      x: "2021",
      y: "Pedestrian",
      heat:'(a) fewer than 500'
    },

    {
      x: "2021",
      y: "Bicyclist",
      heat:'(a) fewer than 500'
    },

    {
      x: "2021",
      y: "Other non-occupants",
      heat:'(a) fewer than 500'
    },

  ];}