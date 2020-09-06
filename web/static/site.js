var config = {
        type: 'line',
        data: {
                labels: [['December 2019/January 2020'], 'February/March', 'April/May', 'June/July', 'August/September'],
                datasets: [{
                        label: 'tech/it',
                        fill: false,
                        backgroundColor: window.chartColors.red,
                        borderColor: window.chartColors.red,
                        data: [
                                45.9,
                                47.2,
                                58,
                                63.8,
                                59.4,
                                67.7
                        ]
                }, {
                        label: 'customer service',
                        fill: false,
                        backgroundColor: window.chartColors.blue,
                        borderColor: window.chartColors.blue,
                        data: [
                                25.6,
                                28,
                                31.8,
                                27.8,
                                35.9,
                                39.8
                        ],
                }, {
                        label: 'consulting',
                        fill: false,
                        backgroundColor: window.chartColors.green,
                        borderColor: window.chartColors.green,
                        data: [
                                7.8,
                                11,
                                10,
                                14.9,
                                23,
                                17.4
                        ]
                }, {
                        label: 'social services',
                        fill: false,
                        backgroundColor: window.chartColors.purple,
                        borderColor: window.chartColors.purple,
                        data: [
                                15.9,
                                12,
                                18,
                                27,
                                18.8,
                                24.1
                        ]
                }, {
                        label: 'academic services',
                        fill: false,
                        backgroundColor: window.chartColors.orange,
                        borderColor: window.chartColors.orange,
                        data: [
                                29.8,
                                42,
                                46,
                                53.9,
                                47,
                                53.1
                        ]
                }]
        },
        options: {
                responsive: true,
                title: {
                        display: true,
                        text: 'Number of Remote Jobs Available 2019-2020'
                },
        }
};

window.onload = function() {
        var ctx = document.getElementById('canvas').getContext('2d');
        window.myLine = new Chart(ctx, config);
};
