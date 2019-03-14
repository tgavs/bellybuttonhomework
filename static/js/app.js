function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
  var url = "/metadata/" + sample
  
   
  var sampleMeta = d3.select("#sample-metadata")

  sampleMeta.html("")
  
  sampleMeta.append("ul")
            .attr("class", "list-group")
            .attr("style", "list-style: none;")
            .attr("id", "meta-list")

  
  d3.json(url).then(function(response){

    Object.entries(response).forEach(([key, value]) => {

      d3.select("#meta-list").append("li")
                             .attr("id", "metalist-element")
                             .text(key.toUpperCase() +":  " + value)
                             .append("br")
                             .append("br")
                             .append("br") 
                             .append("br")                     
                     
   
    console.log(key)
    console.log(value)


    });   

  });

  

    // Use d3 to select the panel with id of `#sample-metadata`

  

    

    // Use `.html("") to clear any existing metadata

   


    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

   


    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
}

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots

    // @TODO: Build a Bubble Chart using the sample data

    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).

  var defaultURL = "/samples/" + sample
  
  console.log(defaultURL)

  d3.json(defaultURL).then(function(response){

    console.log(response)

  //----------------------<Bubble Chart>--------------------------

     var bubbleTrace={

      x: response.otu_ids,
      y: response.sample_values,
      text: response.otu_ids,
      mode:'markers',
      marker:{
        size: response.sample_values,
        color: response.otu_ids
      }
    }

  var bubbleDataset=[bubbleTrace];

  var bubbleLayout = {
    title: '',
    showlegend: true,
    height: 600,
    width: 1500  
  }

   //----------------------</Bubble Chart>--------------------------

  //-----------------------<Pie Chart>------------------------------


  var pieTrace={

    values:response.sample_values.slice(0,11),
    labels:response.otu_ids.slice(0,11),
    type:"pie"
    
  };

  var pieDataset=[pieTrace];

  console.log(pieDataset)

  var pieLayout={

    heigh:400,
    width:500
  };

  //----------------------</Pie Chart>------------------------------------

  // Create Plots

    Plotly.newPlot("bubble", bubbleDataset, bubbleLayout) 

    Plotly.newPlot("pie", pieDataset, pieLayout) 


  })

}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
    createGauge(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
  createGauge(newSample);
}

// Initialize the dashboard
init();
