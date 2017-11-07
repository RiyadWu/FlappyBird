const config = {
    pause: false,
    debug: false,
    medalLevel1: 10,
    medalLevel2: 20,
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
            value: 200,
            min: 100,
            max: 300,
            text: '管子水平间距',
        },
        verticalSpacing: {
            value: 150,
            min: 120,
            max: 170,
            text: '管子垂直间距',
        },
        birdSpeed: {
            value: 10,
            min: 1,
            max: 15,
            text: '小鸟速度',
        },
    },
}