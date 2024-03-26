radio.onReceivedNumber(function (receivedNumber) {
    if (Seeker == 1) {
        Signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
        if (Signal < -55) {
            Sonar()
        } else if (Signal < -47.5) {
            basic.showIcon(IconNames.SmallDiamond)
            music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.pause(75)
        } else if (Signal < -35) {
            basic.showIcon(IconNames.Diamond)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.pause(50)
        } else if (Signal > -35) {
            basic.showIcon(IconNames.Square)
            music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.pause(25)
        }
    }
})
function Sonar () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.pause(20)
    basic.showLeds(`
        . # # # .
        # . . # #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.pause(20)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # # #
        # . . . #
        . # # # .
        `)
    basic.pause(20)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . # #
        . # # # .
        `)
    basic.pause(20)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . # . #
        . # # # .
        `)
    basic.pause(20)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # # . . #
        . # # # .
        `)
    basic.pause(20)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # . #
        # . . . #
        . # # # .
        `)
    basic.pause(20)
    basic.showLeds(`
        . # # # .
        # # . . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.pause(20)
}
input.onButtonPressed(Button.A, function () {
    if (Seeker == 0) {
        Seeker = 2
        radio.setGroup(1)
        radio.setTransmitPower(6)
    } else if (Seeker == 2) {
        Seeker = 1
        radio.setGroup(1)
        radio.setTransmitPower(0)
        basic.pause(1000)
        basic.clearScreen()
    } else if (Seeker == 1) {
        Seeker = 2
        radio.setGroup(1)
        radio.setTransmitPower(6)
    }
})
input.onButtonPressed(Button.B, function () {
    Seeker = 0
    radio.setGroup(0)
    radio.setTransmitPower(0)
    music.stopAllSounds()
    basic.clearScreen()
    basic.pause(1000)
    basic.clearScreen()
})
let Signal = 0
let Seeker = 0
radio.setGroup(0)
Seeker = 0
basic.forever(function () {
    if (Seeker == 2) {
        radio.sendNumber(0)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
