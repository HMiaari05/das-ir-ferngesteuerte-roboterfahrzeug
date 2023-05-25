IR.IR_callbackUser(function (message) {
    if (message == 11) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    }
    if (message == 12) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 150)
    }
    if (message == 13) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    }
    if (message == 14) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    }
    if (message == 21) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
