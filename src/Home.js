import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);

const myDataSource = {
  "chart": {
    "caption": "People diagonsed with cancer",
    "subCaption": "Over the years",
    "xAxisName": "Years",
    "yAxisName": "People diagnosed with Cancer",
     "paletteColors": "#0075c2",
    "bgColor": "#ffffff",
    "borderAlpha": "20",
    "canvasBorderAlpha": "0",
    "usePlotGradientColor": "0",
    "plotBorderAlpha": "10",
    "placevaluesInside": "1",
    "rotatevalues": "1",
    "valueFontColor": "#ffffff",
    "showXAxisLine": "1",
    "xAxisLineColor": "#999999",
    "divlineColor": "#999999",
    "divLineIsDashed": "1",
    "showAlternateHGridColor": "0",
    "subcaptionFontBold": "0",
    "subcaptionFontSize": "14", 
    "showcanvasborder": "1",
        "canvasborderthickness": "0.4",
        "canvasborderalpha": "50",
},
"data": [

    {
        "label": "2012",
        "value": "4123"
    },
    {
        "label": "2013",
        "value": "4633"
    },
    {
        "label": "2014",
        "value": "5507"
    },
    {
        "label": "2015",
        "value": "4910"
    },
    {
        "label": "2016",
        "value": "5529"
    },
    {
        "label": "2017",
        "value": "5803"
    },
    {
        "label": "2018",
        "value": "6202"
    }
]
};

const myPieDataSource = {
  "chart": {
    "caption": "Cancer Types",
        "subCaption": "Percentage",
        "numberSuffix": "%",
        "showPercentInTooltip": "0",
        "decimals": "1",
        "useDataPlotColorForLabels": "1",
        "theme": "fint"
},
"data": [

    {
        "label": "Skin Cancer",
        "value": "41"
    },
    {
        "label": "Brain Cancer",
        "value": "46"
    },
    {
        "label": "Blood Cancer",
        "value": "70"
    },
    {
        "label": "Pancreatic Cancer",
        "value": "20"
    },
    {
        "label": "Thyroid Cancer",
        "value": "10"
    },
    {
        "label": "Ovarian Cancer",
        "value": "5"
    },
    {
        "label": "Others",
        "value": "15"
    }
]
};

const myScatterPlotDataSource = {
  
  "chart": {
      "theme": "fint",
      "caption": "Cancer - Diagnosed vs. Cured",
      "subcaption": "Over the years",
      "yaxisname": "No. of people",
      "xaxisname": "Years",     
      "showcanvasborder": "1",
      "canvasborderthickness": "0.4",
      "canvasborderalpha": "50",
   
  },
  "categories": [
      {
          "verticallinecolor": "666666",
          "verticallinethickness": "1",
          "alpha": "40",
          "category": [
              {
                  "label": "1970",
                  "x": "1970",                    
                  "showverticalline": "1"
              },
              {
                  "label": "1980",
                  "x": "1980",
                  "showverticalline": "1"
              },
              {
                  "label": "1990",
                  "x": "1990",
                  "showverticalline": "1"
              },
              {
                  "label": "2000",
                  "x": "2000",
                  "showverticalline": "1"
              },
              {
                  "label": "2010",
                  "x": "2010",
                  "showverticalline": "1"
              },
              {
                  "label": "2020",
                  "x": "2020",
                  "showverticalline": "1"
              }
          ]
      }
  ],
  "dataset": [
      {
          "drawline": "0",
          "seriesname": "Diagnosed",
          "color": "#6baa01",
          "anchorsides": "3",
          "anchorradius": "4",
          "anchorbgcolor": "#6baa01",
          "anchorbordercolor": "#6baa01",
         
          "data": [
              {
                  "id": "Diagnosed_1",
                  "y": "559",
                  "x": "1980",
                 
                  
                 
              },
              {
                  "id": "Diagnosed_2",
                  "y": "293",
                  "x": "1983"
              },
              {
                  "id": "Diagnosed_3",
                  "y": "231",
                  "x": "1984"
              },
              {
                  "id": "Diagnosed_4",
                  "y": "528",
                  "x": "1991"
              },
              {
                  "id": "Diagnosed_5",
                  "y": "95",
                  "x": "1995"
              },
              {
                  "id": "Diagnosed_6",
                  "y": "515",
                  "x": "1997"
              },
              {
                  "id": "Diagnosed_7",
                  "y": "444",
                  "x": "2003"
              },
              {
                  "id": "Diagnosed_8",
                  "y": "592",
                  "x": "2007"
              },
              {
                  "id": "Diagnosed_9",
                  "y": "229",
                  "x": "2008"
              },
              {
                  "id": "Diagnosed_10",
                  "y": "238",
                  "x": "2009"
              },
              {
                  "id": "Diagnosed_11",
                  "y": "285",
                  "x": "2012"
              },
              {
                  "id": "Diagnosed_12",
                  "y": "524",
                  "x": "2014"
              },
              {
                  "id": "Diagnosed_13",
                  "y": "422",
                  "x": "2016"
              },
              {
                  "id": "Diagnosed_14",
                  "y": "344",
                  "x": "2017"
              },
              {
                  "id": "Diagnosed_15",
                  "y": "510",
                  "x": "2018"
              },
              {
                  "id": "Diagnosed_16",
                  "y": "132",
                  "x": "1987"
              },
              {
                  "id": "Diagnosed_17",
                  "y": "381",
                  "x": "1993"
              },
              {
                  "id": "Diagnosed_18",
                  "y": "210",
                  "x": "1996"
              },
              {
                  "id": "Diagnosed_19",
                  "y": "496",
                  "x": "2007"
              },
              {
                  "id": "Diagnosed_20",
                  "y": "330",
                  "x": "1988"
              },
              {
                  "id": "Diagnosed_21",
                  "y": "436",
                  "x": "2004"
              },
              {
                  "id": "Diagnosed_22",
                  "y": "406",
                  "x": "2006"
              },
              {
                  "id": "Diagnosed_23",
                  "y": "125",
                  "x": "2000"
              },
              {
                  "id": "Diagnosed_24",
                  "y": "450",
                  "x": "1999"
              },
              {
                  "id": "Diagnosed_25",
                  "y": "455",
                  "x": "1978"
              },
              {
                  "id": "Diagnosed_26",
                  "y": "328",
                  "x": "1981"
              },
              {
                  "id": "Diagnosed_27",
                  "y": "188",
                  "x": "1990"
              },
              {
                  "id": "Diagnosed_28",
                  "y": "565",
                  "x": "2013"
              },
              {
                  "id": "Diagnosed_29",
                  "y": "149",
                  "x": "2015"
              },
              {
                  "id": "Diagnosed_30",
                  "y": "425",
                  "x": "1982"
              }
          ]
      },
      {
          "seriesname": "Cured",
          "color": "#f8bd19",
          "anchorsides": "4",
          "anchorradius": "4",
          "anchorbgcolor": "#f8bd19",
          "anchorbordercolor": "#f8bd19",
          "data": [
              {
                  "id": "Cured_1",
                  "y": "335",
                  "x": "2000",
                  
              },
              {
                  "id": "Cured_2",
                  "y": "339",
                  "x": "1985",
                  
              },
              {
                  "id": "Cured_3",
                  "y": "328",
                  "x": "1982",
                  
              },
              {
                  "id": "Cured_4",
                  "y": "1",
                  "x": "2001",
                  
              },
              {
                  "id": "Cured_5",
                  "y": "246",
                  "x": "2011",
                  
              },
              {
                  "id": "Cured_6",
                  "y": "368",
                  "x": "2006",
                  
              },
              {
                  "id": "Cured_7",
                  "y": "146",
                  "x": "2012",
                  
              },
              {
                  "id": "Cured_8",
                  "y": "347",
                  "x": "2014",
                  
              },
              {
                  "id": "Cured_9",
                  "y": "1",
                  "x": "2017",
                  
              },
              {
                  "id": "Cured_10",
                  "y": "63",
                  "x": "1986",
                  
              },
              {
                  "id": "Cured_11",
                  "y": "77",
                  "x": "1987",
                  
              },
              {
                  "id": "Cured_12",
                  "y": "108",
                  "x": "1989",
                  
              },
              {
                  "id": "Cured_13",
                  "y": "44",
                  "x": "1992",
                  
              },
              {
                  "id": "Cured_14",
                  "y": "77",
                  "x": "1994",
                  
              },
              {
                  "id": "Cured_15",
                  "y": "15",
                  "x": "1995",
                  
              },
              {
                  "id": "Cured_16",
                  "y": "333",
                  "x": "1996",
                  
              },
              {
                  "id": "Cured_17",
                  "y": "31",
                  "x": "1999",
                  
              },
              {
                  "id": "Cured_18",
                  "y": "90",
                  "x": "2000",
                  
              },
              {
                  "id": "Cured_19",
                  "y": "294",
                  "x": "2003",
                  
              },
              {
                  "id": "Cured_20",
                  "y": "241",
                  "x": "2005",
                  
              },
              {
                  "id": "Cured_21",
                  "y": "258",
                  "x": "2008",
                  
              },
              {
                  "id": "Cured_22",
                  "y": "186",
                  "x": "2010",
                  
              },
              {
                  "id": "Cured_23",
                  "y": "255",
                  "x": "2013",
                
              },
              {
                  "id": "Cured_24",
                  "y": "203",
                  "x": "2015",
                  
              },
              {
                  "id": "Cured_25",
                  "y": "35",
                  "x": "2018",
                  
              }
          ]
      }
]
};
const chartConfigs = {
  width: 540,
  height: 400,
  type: 'column3d',
  dataFormat: 'json',
  dataSource: myDataSource,
};
const pieChartConfigs = {
  width: 540,
  height: 400,
  type: 'pie2d',
  dataFormat: 'json',
  dataSource: myPieDataSource,
};
const scatterChartConfigs = {
  width: 800,
  height: 400,
  type: 'scatter',
  dataFormat: 'json',
  dataSource: myScatterPlotDataSource,
};


class Home extends React.Component {
  
  render() {
    return(
      <div className="container">
      <h1>Dashboard</h1>

<div className="row">
 
  <div className="col-sm-6">
  <ReactFC {...chartConfigs} />

  </div>

  <div className="col-sm-6">
  <ReactFC {...pieChartConfigs} />
  </div>
 

</div>
<div className="row mt-5 justify-content-center align-items-center">

<ReactFC {...scatterChartConfigs} />


</div>
</div>
      
    )
  }

}

export default Home;