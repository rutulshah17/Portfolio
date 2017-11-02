var mainContent = '<h4> Experienced Information Technology Associate with a demonstrated history of working in the banking industry </h4>';
var htmlDescription = '&lt!-- html --&gt';
var cssDescription = ' { this is css }';
var jsDescription = 'console.log(this is js);';
var phpDescription = '<?php this is php ?>';

$(function () {

    var tooltip = {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    };

    var point = {
        events: {
            select: function () {
                showSkillDrillDown(this.name);
                //chart.drillUp();
            },
            unselect: function () {
                unSelectSlice(this.name);
            }
        }
    };

    var drilldown = {
        series: [{
            id: 'php',
            data: [
                ['Wordpress', 80],
                ['Active-Record', 80],
            ],
            point: point
        }, {
            id: 'javascript',
            data: [
                ['JSON', 80],
                ['Angular', 70],
                ['Vanilla-Javascript', 80],
                ['NodeJs', 70],
                ['jQuery', 60]
            ],
            point: point
        },  {
        id: 'database',
            data: [
            ['MySQL', 80],
            ['Elastic', 70],
            ['MongoDB', 80]
        ],
            point: point
        }]
    };

    var chart = new Highcharts.Chart({
        credits: {
            enabled: false
        },
        chart: {
            renderTo: 'skillsContainer',
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            },
            events: {
                drillup: function (e) {
                   unSelectSlice();
                }
            }
        },
        title: {
            text: ''
        },
        tooltip: tooltip,
        plotOptions: {
            pie: {
                allowPointSelect: true,
                slicedOffset: 50,
                cursor: 'pointer',
                depth: 45,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Level 1',
            data: [
                {name: 'HTML', y: 45.0, description: htmlDescription},
                {name: 'PHP', y: 35.0, description: 'this is php', drilldown: 'php'},
                {name: 'JavaScript', y: 65.0, description: 'this is javascript', drilldown: 'javascript'},
                {name: 'CSS', y: 45.0, description: cssDescription},
                {name: 'Database', y: 35.0, description: 'databases', drilldown: 'database'},
                /*{name: 'MySQL', y: 30.0, description: 'This is MySQL'}*/
            ],
            point: {
                events: {
                    select: function () {
                        showSkill(this.description);
                    },
                    unselect: function () {
                        unSelectSlice(this.name);
                    }
                }
            }
        }],
        drilldown: drilldown
    });
});

function unSelectSlice() {
    document.getElementById("demo").innerHTML = mainContent;
}

function showSkill(selectedSkilldescription) {
    document.getElementById("demo").innerHTML = selectedSkilldescription;
}

function showSkillDrillDown(selectedDrilldownSkillName) {
    document.getElementById("demo").innerHTML = selectedDrilldownSkillName;
}
