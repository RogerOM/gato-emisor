radio.setGroup(100)
radio.setTransmitPower(2)
basic.forever(function () {
    radio.sendString("1")
    basic.pause(200)
})
