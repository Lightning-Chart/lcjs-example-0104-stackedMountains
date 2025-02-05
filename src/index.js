/*
 * LightningChartJS example that showcases stacked mountains chart.
 */
// Import LightningChartJS
const lcjs = require('@lightningchart/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, AxisTickStrategies, AutoCursorModes, Themes } = lcjs

// Create a XY Chart.
const xyChart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        }).ChartXY({
    theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
})

xyChart
    .setTitle('Product Version Distribution')
    .setUserInteractions(undefined)
    .setCursorMode('show-nearest')
    .setCursorFormatting((_, hit) => [
        [{ text: hit.axisX.formatValue(hit.x), rowFillStyle: xyChart.getTheme().cursorResultTableHeaderBackgroundFillStyle }],
        [hit.series],
        [`${Math.abs(hit.multiHit[1].y - hit.multiHit[0].y).toFixed(1)} %`],
    ])

// Set up the X and Y Axes for the chart.
xyChart
    .getDefaultAxisX()
    .setTickStrategy(AxisTickStrategies.DateTime)
    .setInterval({
        start: new Date(2017, 0, 1).getTime(),
        end: new Date(2018, 3, 1).getTime(),
    })
xyChart.getDefaultAxisY().setTitle('Distribution').setUnits('%').setInterval({ start: 0, end: 100, stopAxisAfter: false })

// ---- Add multiple series with different names and values. ----
const versionName = [
    'Version 1',
    'Version 2',
    'Version 3',
    'Version 4',
    'Version 5',
    'Version 6',
    'Version 7',
    'Version 8',
    'Version 9',
    'Version 10',
    'Version 11',
    'Version 12',
]
// Array to store the created Area Series.
const version = []
// Create Series for each version name.
versionName.forEach((v, k) => {
    // The first version (data) is drawn at the bottom of the chart, so we can just use a Area Series to render it.
    if (k == 0) {
        version[k] = xyChart.addAreaSeries().setName(v)
    } else {
        // Rest of the versions (data) are drawn based on the version before, so we'll use Area Range Series to render it.
        version[k] = xyChart.addAreaRangeSeries().setName(v)
    }
})
// Create data for each Version.
const data = [
    [
        { x: new Date(2017, 0, 1).getTime(), y: 1.3 },
        { x: new Date(2017, 1, 1).getTime(), y: 1.2 },
        { x: new Date(2017, 2, 1).getTime(), y: 1.1 },
        { x: new Date(2017, 3, 1).getTime(), y: 1.1 },
        { x: new Date(2017, 4, 1).getTime(), y: 1 },
        { x: new Date(2017, 5, 1).getTime(), y: 0.9 },
        { x: new Date(2017, 6, 1).getTime(), y: 0.8 },
        { x: new Date(2017, 7, 1).getTime(), y: 0.8 },
        { x: new Date(2017, 8, 1).getTime(), y: 0.7 },
        { x: new Date(2017, 9, 1).getTime(), y: 0.7 },
        { x: new Date(2017, 10, 1).getTime(), y: 0.6 },
        { x: new Date(2017, 11, 1).getTime(), y: 0.6 },
        { x: new Date(2018, 0, 1).getTime(), y: 0.5 },
        { x: new Date(2018, 1, 1).getTime(), y: 0.5 },
        { x: new Date(2018, 2, 1).getTime(), y: 0.5 },
        { x: new Date(2018, 3, 1).getTime(), y: 0.4 },
    ],
    [
        { x: new Date(2017, 0, 1).getTime(), y: 4.9 },
        { x: new Date(2017, 1, 1).getTime(), y: 4.5 },
        { x: new Date(2017, 2, 1).getTime(), y: 4.2 },
        { x: new Date(2017, 3, 1).getTime(), y: 4 },
        { x: new Date(2017, 4, 1).getTime(), y: 3.7 },
        { x: new Date(2017, 5, 1).getTime(), y: 3.5 },
        { x: new Date(2017, 6, 1).getTime(), y: 3.3 },
        { x: new Date(2017, 7, 1).getTime(), y: 3.1 },
        { x: new Date(2017, 8, 1).getTime(), y: 2.9 },
        { x: new Date(2017, 9, 1).getTime(), y: 2.7 },
        { x: new Date(2017, 10, 1).getTime(), y: 2.5 },
        { x: new Date(2017, 11, 1).getTime(), y: 2.3 },
        { x: new Date(2018, 0, 1).getTime(), y: 2.2 },
        { x: new Date(2018, 1, 1).getTime(), y: 2 },
        { x: new Date(2018, 2, 1).getTime(), y: 1.9 },
        { x: new Date(2018, 3, 1).getTime(), y: 1.7 },
    ],
    [
        { x: new Date(2017, 0, 1).getTime(), y: 6.8 },
        { x: new Date(2017, 1, 1).getTime(), y: 6.4 },
        { x: new Date(2017, 2, 1).getTime(), y: 5.9 },
        { x: new Date(2017, 3, 1).getTime(), y: 5.7 },
        { x: new Date(2017, 4, 1).getTime(), y: 5.4 },
        { x: new Date(2017, 5, 1).getTime(), y: 5.2 },
        { x: new Date(2017, 6, 1).getTime(), y: 4.8 },
        { x: new Date(2017, 7, 1).getTime(), y: 4.4 },
        { x: new Date(2017, 8, 1).getTime(), y: 4.1 },
        { x: new Date(2017, 9, 1).getTime(), y: 3.9 },
        { x: new Date(2017, 10, 1).getTime(), y: 3.5 },
        { x: new Date(2017, 11, 1).getTime(), y: 3.3 },
        { x: new Date(2018, 0, 1).getTime(), y: 3.1 },
        { x: new Date(2018, 1, 1).getTime(), y: 3 },
        { x: new Date(2018, 2, 1).getTime(), y: 2.9 },
        { x: new Date(2018, 3, 1).getTime(), y: 2.6 },
    ],
    [
        { x: new Date(2017, 0, 1).getTime(), y: 3 },
        { x: new Date(2017, 1, 1).getTime(), y: 2.2 },
        { x: new Date(2017, 2, 1).getTime(), y: 1.7 },
        { x: new Date(2017, 3, 1).getTime(), y: 1.6 },
        { x: new Date(2017, 4, 1).getTime(), y: 1.5 },
        { x: new Date(2017, 5, 1).getTime(), y: 1.5 },
        { x: new Date(2017, 6, 1).getTime(), y: 1.3 },
        { x: new Date(2017, 7, 1).getTime(), y: 1.3 },
        { x: new Date(2017, 8, 1).getTime(), y: 1.2 },
        { x: new Date(2017, 9, 1).getTime(), y: 1.1 },
        { x: new Date(2017, 10, 1).getTime(), y: 1 },
        { x: new Date(2017, 11, 1).getTime(), y: 1 },
        { x: new Date(2018, 0, 1).getTime(), y: 0.9 },
        { x: new Date(2018, 1, 1).getTime(), y: 0.9 },
        { x: new Date(2018, 2, 1).getTime(), y: 0.8 },
        { x: new Date(2018, 3, 1).getTime(), y: 0.7 },
    ],
    [
        { x: new Date(2017, 0, 1).getTime(), y: 25.2 },
        { x: new Date(2017, 1, 1).getTime(), y: 24.5 },
        { x: new Date(2017, 2, 1).getTime(), y: 23.5 },
        { x: new Date(2017, 3, 1).getTime(), y: 21.9 },
        { x: new Date(2017, 4, 1).getTime(), y: 20.8 },
        { x: new Date(2017, 5, 1).getTime(), y: 20.5 },
        { x: new Date(2017, 6, 1).getTime(), y: 19.5 },
        { x: new Date(2017, 7, 1).getTime(), y: 18.6 },
        { x: new Date(2017, 8, 1).getTime(), y: 17.6 },
        { x: new Date(2017, 9, 1).getTime(), y: 16.5 },
        { x: new Date(2017, 10, 1).getTime(), y: 15.3 },
        { x: new Date(2017, 11, 1).getTime(), y: 14.7 },
        { x: new Date(2018, 0, 1).getTime(), y: 13.8 },
        { x: new Date(2018, 1, 1).getTime(), y: 13.4 },
        { x: new Date(2018, 2, 1).getTime(), y: 12.8 },
        { x: new Date(2018, 3, 1).getTime(), y: 11.7 },
    ],
    [
        { x: new Date(2017, 0, 1).getTime(), y: 11.3 },
        { x: new Date(2017, 1, 1).getTime(), y: 10.8 },
        { x: new Date(2017, 2, 1).getTime(), y: 10.1 },
        { x: new Date(2017, 3, 1).getTime(), y: 9.8 },
        { x: new Date(2017, 4, 1).getTime(), y: 9.4 },
        { x: new Date(2017, 5, 1).getTime(), y: 9.2 },
        { x: new Date(2017, 6, 1).getTime(), y: 8.7 },
        { x: new Date(2017, 7, 1).getTime(), y: 8.2 },
        { x: new Date(2017, 8, 1).getTime(), y: 7.8 },
        { x: new Date(2017, 9, 1).getTime(), y: 7.4 },
        { x: new Date(2017, 10, 1).getTime(), y: 7.1 },
        { x: new Date(2017, 11, 1).getTime(), y: 6.7 },
        { x: new Date(2018, 0, 1).getTime(), y: 6.4 },
        { x: new Date(2018, 1, 1).getTime(), y: 6.1 },
        { x: new Date(2018, 2, 1).getTime(), y: 5.7 },
        { x: new Date(2018, 3, 1).getTime(), y: 5.4 },
    ],
    [
        { x: new Date(2017, 0, 1).getTime(), y: 22.8 },
        { x: new Date(2017, 1, 1).getTime(), y: 23.2 },
        { x: new Date(2017, 2, 1).getTime(), y: 23.3 },
        { x: new Date(2017, 3, 1).getTime(), y: 23.2 },
        { x: new Date(2017, 4, 1).getTime(), y: 23.1 },
        { x: new Date(2017, 5, 1).getTime(), y: 23 },
        { x: new Date(2017, 6, 1).getTime(), y: 23.3 },
        { x: new Date(2017, 7, 1).getTime(), y: 22.6 },
        { x: new Date(2017, 8, 1).getTime(), y: 22.3 },
        { x: new Date(2017, 9, 1).getTime(), y: 21.8 },
        { x: new Date(2017, 10, 1).getTime(), y: 21.7 },
        { x: new Date(2017, 11, 1).getTime(), y: 21.2 },
        { x: new Date(2018, 0, 1).getTime(), y: 20.8 },
        { x: new Date(2018, 1, 1).getTime(), y: 20.2 },
        { x: new Date(2018, 2, 1).getTime(), y: 19.8 },
        { x: new Date(2018, 3, 1).getTime(), y: 19.2 },
    ],
    [
        { x: new Date(2017, 0, 1).getTime(), y: 24 },
        { x: new Date(2017, 1, 1).getTime(), y: 26.8 },
        { x: new Date(2017, 2, 1).getTime(), y: 29.5 },
        { x: new Date(2017, 3, 1).getTime(), y: 30.7 },
        { x: new Date(2017, 4, 1).getTime(), y: 31.3 },
        { x: new Date(2017, 5, 1).getTime(), y: 31.2 },
        { x: new Date(2017, 6, 1).getTime(), y: 31.2 },
        { x: new Date(2017, 7, 1).getTime(), y: 31.2 },
        { x: new Date(2017, 8, 1).getTime(), y: 31.8 },
        { x: new Date(2017, 9, 1).getTime(), y: 32.3 },
        { x: new Date(2017, 10, 1).getTime(), y: 32.2 },
        { x: new Date(2017, 11, 1).getTime(), y: 32 },
        { x: new Date(2018, 0, 1).getTime(), y: 30.9 },
        { x: new Date(2018, 1, 1).getTime(), y: 29.7 },
        { x: new Date(2018, 2, 1).getTime(), y: 28.6 },
        { x: new Date(2018, 3, 1).getTime(), y: 28.8 },
    ],
    [
        { x: new Date(2017, 0, 1).getTime(), y: 0.7 },
        { x: new Date(2017, 1, 1).getTime(), y: 0.4 },
        { x: new Date(2017, 2, 1).getTime(), y: 0.5 },
        { x: new Date(2017, 3, 1).getTime(), y: 1.7 },
        { x: new Date(2017, 4, 1).getTime(), y: 3.4 },
        { x: new Date(2017, 5, 1).getTime(), y: 4.6 },
        { x: new Date(2017, 6, 1).getTime(), y: 6.6 },
        { x: new Date(2017, 7, 1).getTime(), y: 9.1 },
        { x: new Date(2017, 8, 1).getTime(), y: 10.6 },
        { x: new Date(2017, 9, 1).getTime(), y: 12.3 },
        { x: new Date(2017, 10, 1).getTime(), y: 14.4 },
        { x: new Date(2017, 11, 1).getTime(), y: 16 },
        { x: new Date(2018, 0, 1).getTime(), y: 17.8 },
        { x: new Date(2018, 1, 1).getTime(), y: 19.3 },
        { x: new Date(2018, 2, 1).getTime(), y: 21.1 },
        { x: new Date(2018, 3, 1).getTime(), y: 22.3 },
    ],
    [
        { x: new Date(2017, 0, 1).getTime(), y: 0 },
        { x: new Date(2017, 1, 1).getTime(), y: 0 },
        { x: new Date(2017, 2, 1).getTime(), y: 0.2 },
        { x: new Date(2017, 3, 1).getTime(), y: 0.3 },
        { x: new Date(2017, 4, 1).getTime(), y: 0.4 },
        { x: new Date(2017, 5, 1).getTime(), y: 0.4 },
        { x: new Date(2017, 6, 1).getTime(), y: 0.5 },
        { x: new Date(2017, 7, 1).getTime(), y: 0.7 },
        { x: new Date(2017, 8, 1).getTime(), y: 1 },
        { x: new Date(2017, 9, 1).getTime(), y: 1.3 },
        { x: new Date(2017, 10, 1).getTime(), y: 1.7 },
        { x: new Date(2017, 11, 1).getTime(), y: 2 },
        { x: new Date(2018, 0, 1).getTime(), y: 3.3 },
        { x: new Date(2018, 1, 1).getTime(), y: 4.4 },
        { x: new Date(2018, 2, 1).getTime(), y: 5.2 },
        { x: new Date(2018, 3, 1).getTime(), y: 6.1 },
    ],
    [
        { x: new Date(2017, 0, 1).getTime(), y: 0 },
        { x: new Date(2017, 1, 1).getTime(), y: 0 },
        { x: new Date(2017, 2, 1).getTime(), y: 0 },
        { x: new Date(2017, 3, 1).getTime(), y: 0 },
        { x: new Date(2017, 4, 1).getTime(), y: 0 },
        { x: new Date(2017, 5, 1).getTime(), y: 0 },
        { x: new Date(2017, 6, 1).getTime(), y: 0 },
        { x: new Date(2017, 7, 1).getTime(), y: 0 },
        { x: new Date(2017, 8, 1).getTime(), y: 0 },
        { x: new Date(2017, 9, 1).getTime(), y: 0 },
        { x: new Date(2017, 10, 1).getTime(), y: 0 },
        { x: new Date(2017, 11, 1).getTime(), y: 0.2 },
        { x: new Date(2018, 0, 1).getTime(), y: 0.3 },
        { x: new Date(2018, 1, 1).getTime(), y: 0.5 },
        { x: new Date(2018, 2, 1).getTime(), y: 0.5 },
        { x: new Date(2018, 3, 1).getTime(), y: 0.8 },
    ],
    [
        { x: new Date(2017, 0, 1).getTime(), y: 0 },
        { x: new Date(2017, 1, 1).getTime(), y: 0 },
        { x: new Date(2017, 2, 1).getTime(), y: 0 },
        { x: new Date(2017, 3, 1).getTime(), y: 0 },
        { x: new Date(2017, 4, 1).getTime(), y: 0 },
        { x: new Date(2017, 5, 1).getTime(), y: 0 },
        { x: new Date(2017, 6, 1).getTime(), y: 0 },
        { x: new Date(2017, 7, 1).getTime(), y: 0 },
        { x: new Date(2017, 8, 1).getTime(), y: 0 },
        { x: new Date(2017, 9, 1).getTime(), y: 0 },
        { x: new Date(2017, 10, 1).getTime(), y: 0 },
        { x: new Date(2017, 11, 1).getTime(), y: 0 },
        { x: new Date(2018, 0, 1).getTime(), y: 0 },
        { x: new Date(2018, 1, 1).getTime(), y: 0 },
        { x: new Date(2018, 2, 1).getTime(), y: 0.2 },
        { x: new Date(2018, 3, 1).getTime(), y: 0.3 },
    ],
]

// Function to get the proper High value for a Series.
const getYHigh = (p, k) => {
    let sum = 0
    while (p >= 0) {
        sum += data[p][k].y
        p--
    }
    return sum
}

// Function to get the proper Low value for a Series.
const getYLow = (p, k) => {
    let sum = 0
    while (p - 1 >= 0) {
        sum += data[p - 1][k].y
        p--
    }
    return sum
}

/**
 * Fill each Area Series with the data created for them.
 */
data[0].forEach((point, i) => {
    version.forEach((series, index) => {
        // For the first series, only one Y value is needed.
        if (index == 0) {
            version[index].add({
                x: point.x,
                y: point.y,
            })
            // Rest of the series need both the High and Low values;
            // Low is the previous Series' High value.
        } else {
            version[index].add({
                position: point.x,
                high: getYHigh(index, i),
                low: getYLow(index, i),
            })
        }
    })
})
