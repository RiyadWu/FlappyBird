const config = {
    pause: false,
    debug: false,
    range:{
        fps: {
            value: 30,
            min: 10,
            max: 120,
            text: '游戏速度',
        },
        backgroundSpeed: {
            value: 2,
            min: 2,
            max: 10,
            text: '背景速度',
        },
        pipeNum: {
            value: 4,
            min: 2,
            max: 7,
            text: '管子个数',
        },
        horizontalSpacing: {
            value: 100,
            min: 100,
            max: 300,
            text: '管子水平间距',
        },
        verticalSpacing: {
            value: 100,
            min: 100,
            max: 150,
            text: '管子垂直间距',
        },
        birdSpeed: {
            value: 30,
            min: 10,
            max: 100,
            text: '小鸟速度',
        },
    },
}