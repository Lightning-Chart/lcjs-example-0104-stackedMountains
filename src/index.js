/**
 * LightningChartJS example that showcases creation and styling of spline-series.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    ColorPalettes,
    SolidFill,
    emptyLine,
    AxisTickStrategies,
    AutoCursorModes
} = lcjs

// ----- Cache styles -----
const palette = ColorPalettes.fullSpectrum(12)
const solidFills = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(palette).map(color => new SolidFill({ color }))
const opaqueFills = solidFills.map(fill => fill.setA(100))

// Set the origin date to use for the X Axis
const dateOrigin = new Date(2017, 0, 1)
// Multiplier used for X Axis values to transform each X value as a month.
const dataFrequency = 60 * 60 * 24 * 30 * 1000
// Create a XY Chart.
const xyChart = lightningChart().ChartXY({
    defaultAxisXTickStrategy: AxisTickStrategies.DateTime(dateOrigin)
})
    .setTitle('Product Version Distribution')
    .setAutoCursorMode(AutoCursorModes.onHover)
    .setMouseInteractions(false)
// Set up the X and Y Axes for the chart.
xyChart.getDefaultAxisX()
    .setMouseInteractions(false)

xyChart.getDefaultAxisY()
    .setTitle('Distribution %')
    .setInterval(0, 100)
    .setMouseInteractions(false)

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
    'Version 12'
]
// Array to store the created Area Series.
const version = []
versionName.forEach((v, k) => {
    // The first version (data) is drawn at the bottom of the chart, so we can just use a Area Series to render it.
    if (k == 0) {
        version[k] = xyChart.addAreaSeries()
            .setName(v)
            .setFillStyle(opaqueFills[k])
            .setStrokeStyle(stroke => stroke.setFillStyle(solidFills[k]))
    } else {
        // Rest of the versions (data) are drawn based on the version before, so we'll use Area Range Series to render it.
        version[k] = xyChart.addAreaRangeSeries()
            .setName(v)
            .setHighFillStyle(opaqueFills[k])
            .setHighStrokeStyle(stroke => stroke.setFillStyle(solidFills[k]))
            .setLowStrokeStyle(emptyLine)
    }
    // Set up how to display the Result Table.
    version[k].setResultTableFormatter((builder, series, xValue, yValueHigh, yValueLow) => {
        return builder
            .addRow(v)
            .addRow('Date: ' + series.axisX.formatValue(xValue))
            .addRow('Distribution: ' + (yValueHigh - yValueLow).toFixed(2) + '%')
    })
})
// Create data for each Version.
const data = [
    [
        { x: 0, y: 1.3 },
        { x: 1, y: 1.2 },
        { x: 2, y: 1.1 },
        { x: 3, y: 1.1 },
        { x: 4, y: 1 },
        { x: 5, y: 0.9 },
        { x: 6, y: 0.8 },
        { x: 7, y: 0.8 },
        { x: 8, y: 0.7 },
        { x: 9, y: 0.7 },
        { x: 10, y: 0.6 },
        { x: 11, y: 0.6 },
        { x: 12, y: 0.5 },
        { x: 13, y: 0.5 },
        { x: 14, y: 0.5 },
        { x: 15, y: 0.4 }
    ],
    [
        { x: 0, y: 4.9 },
        { x: 1, y: 4.5 },
        { x: 2, y: 4.2 },
        { x: 3, y: 4 },
        { x: 4, y: 3.7 },
        { x: 5, y: 3.5 },
        { x: 6, y: 3.3 },
        { x: 7, y: 3.1 },
        { x: 8, y: 2.9 },
        { x: 9, y: 2.7 },
        { x: 10, y: 2.5 },
        { x: 11, y: 2.3 },
        { x: 12, y: 2.2 },
        { x: 13, y: 2 },
        { x: 14, y: 1.9 },
        { x: 15, y: 1.7 }
    ],
    [
        { x: 0, y: 6.8 },
        { x: 1, y: 6.4 },
        { x: 2, y: 5.9 },
        { x: 3, y: 5.7 },
        { x: 4, y: 5.4 },
        { x: 5, y: 5.2 },
        { x: 6, y: 4.8 },
        { x: 7, y: 4.4 },
        { x: 8, y: 4.1 },
        { x: 9, y: 3.9 },
        { x: 10, y: 3.5 },
        { x: 11, y: 3.3 },
        { x: 12, y: 3.1 },
        { x: 13, y: 3 },
        { x: 14, y: 2.9 },
        { x: 15, y: 2.6 }
    ],
    [
        { x: 0, y: 3 },
        { x: 1, y: 2.2 },
        { x: 2, y: 1.7 },
        { x: 3, y: 1.6 },
        { x: 4, y: 1.5 },
        { x: 5, y: 1.5 },
        { x: 6, y: 1.3 },
        { x: 7, y: 1.3 },
        { x: 8, y: 1.2 },
        { x: 9, y: 1.1 },
        { x: 10, y: 1 },
        { x: 11, y: 1 },
        { x: 12, y: 0.9 },
        { x: 13, y: 0.9 },
        { x: 14, y: 0.8 },
        { x: 15, y: 0.7 }
    ],
    [
        { x: 0, y: 25.2 },
        { x: 1, y: 24.5 },
        { x: 2, y: 23.5 },
        { x: 3, y: 21.9 },
        { x: 4, y: 20.8 },
        { x: 5, y: 20.5 },
        { x: 6, y: 19.5 },
        { x: 7, y: 18.6 },
        { x: 8, y: 17.6 },
        { x: 9, y: 16.5 },
        { x: 10, y: 15.3 },
        { x: 11, y: 14.7 },
        { x: 12, y: 13.8 },
        { x: 13, y: 13.4 },
        { x: 14, y: 12.8 },
        { x: 15, y: 11.7 }
    ],
    [
        { x: 0, y: 11.3 },
        { x: 1, y: 10.8 },
        { x: 2, y: 10.1 },
        { x: 3, y: 9.8 },
        { x: 4, y: 9.4 },
        { x: 5, y: 9.2 },
        { x: 6, y: 8.7 },
        { x: 7, y: 8.2 },
        { x: 8, y: 7.8 },
        { x: 9, y: 7.4 },
        { x: 10, y: 7.1 },
        { x: 11, y: 6.7 },
        { x: 12, y: 6.4 },
        { x: 13, y: 6.1 },
        { x: 14, y: 5.7 },
        { x: 15, y: 5.4 }
    ],
    [
        { x: 0, y: 22.8 },
        { x: 1, y: 23.2 },
        { x: 2, y: 23.3 },
        { x: 3, y: 23.2 },
        { x: 4, y: 23.1 },
        { x: 5, y: 23 },
        { x: 6, y: 23.3 },
        { x: 7, y: 22.6 },
        { x: 8, y: 22.3 },
        { x: 9, y: 21.8 },
        { x: 10, y: 21.7 },
        { x: 11, y: 21.2 },
        { x: 12, y: 20.8 },
        { x: 13, y: 20.2 },
        { x: 14, y: 19.8 },
        { x: 15, y: 19.2 }
    ],
    [
        { x: 0, y: 24 },
        { x: 1, y: 26.8 },
        { x: 2, y: 29.5 },
        { x: 3, y: 30.7 },
        { x: 4, y: 31.3 },
        { x: 5, y: 31.2 },
        { x: 6, y: 31.2 },
        { x: 7, y: 31.2 },
        { x: 8, y: 31.8 },
        { x: 9, y: 32.3 },
        { x: 10, y: 32.2 },
        { x: 11, y: 32 },
        { x: 12, y: 30.9 },
        { x: 13, y: 29.7 },
        { x: 14, y: 28.6 },
        { x: 15, y: 28.8 }
    ],
    [
        { x: 0, y: 0.7 },
        { x: 1, y: 0.4 },
        { x: 2, y: 0.5 },
        { x: 3, y: 1.7 },
        { x: 4, y: 3.4 },
        { x: 5, y: 4.6 },
        { x: 6, y: 6.6 },
        { x: 7, y: 9.1 },
        { x: 8, y: 10.6 },
        { x: 9, y: 12.3 },
        { x: 10, y: 14.4 },
        { x: 11, y: 16 },
        { x: 12, y: 17.8 },
        { x: 13, y: 19.3 },
        { x: 14, y: 21.1 },
        { x: 15, y: 22.3 }
    ],
    [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0.2 },
        { x: 3, y: 0.3 },
        { x: 4, y: 0.4 },
        { x: 5, y: 0.4 },
        { x: 6, y: 0.5 },
        { x: 7, y: 0.7 },
        { x: 8, y: 1 },
        { x: 9, y: 1.3 },
        { x: 10, y: 1.7 },
        { x: 11, y: 2 },
        { x: 12, y: 3.3 },
        { x: 13, y: 4.4 },
        { x: 14, y: 5.2 },
        { x: 15, y: 6.1 }
    ],
    [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 },
        { x: 5, y: 0 },
        { x: 6, y: 0 },
        { x: 7, y: 0 },
        { x: 8, y: 0 },
        { x: 9, y: 0 },
        { x: 10, y: 0 },
        { x: 11, y: 0.2 },
        { x: 12, y: 0.3 },
        { x: 13, y: 0.5 },
        { x: 14, y: 0.5 },
        { x: 15, y: 0.8 }
    ],
    [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 },
        { x: 5, y: 0 },
        { x: 6, y: 0 },
        { x: 7, y: 0 },
        { x: 8, y: 0 },
        { x: 9, y: 0 },
        { x: 10, y: 0 },
        { x: 11, y: 0 },
        { x: 12, y: 0 },
        { x: 13, y: 0 },
        { x: 14, y: 0.2 },
        { x: 15, y: 0.3 }
    ]
]

const getYHigh = (p, k) => {
    let sum = 0
    while (p >= 0) {
        sum += data[p][k].y
        p--
    }
    return sum
}

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
    version.forEach((chart, index) => {
        if (index == 0) {
            version[index].add({
                x: point.x * dataFrequency,
                y: point.y
            })
        } else {
            version[index].add(
                {
                    position: point.x * dataFrequency,
                    high: getYHigh(index, i),
                    low: getYLow(index, i)
                }
            )
        }
    })
})
