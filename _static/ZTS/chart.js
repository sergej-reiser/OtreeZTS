//--------------------------------------------------------------------------------
// Chart 
// (from highcharts.com)
//--------------------------------------------------------------------------------
function init_chart() {
    var chart = Highcharts.chart('container', {
	chart: {
        type: 'line',
        animation: true, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {
                series = [];
            }
        }
    },
    title: {
        text: 'Good Prices per Period'
    },
    yAxis: {
        title: {
            text: 'Price in €'
        },
        gridLineWidth: 1,
    },
    xAxis: {
    	title: {
            text: 'Periods'
        },
        min: 0,
        max: length-1,
        allowDecimals: false,
    },
    plotOptions: {
        series: {
            states: {
                hover: {
                    enabled: true
                }
            },
            marker: {
                enabled: false
            }
        }
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        borderWidth: 1
    },
    tooltip: {
        animation:true,
        enabled: true,
    },
    series: [{
        name: 'A',
        data: [],
        color: '#6610f2',
    }, {
        name: 'B',
        data: [],
        color: '#ffc107',
    }, {
        name: 'C',
        data: [],
        color: '#fd7e14',
    }, {
        name: 'D',
        data: [],
        color:'#17a2b8',
    }, {
        name: 'E',
        data: [],
        color:'#343a40',
    }, {
        name: 'F',
        data: [],
        color:'#dc3545',
    }],
    });
return chart;
}
