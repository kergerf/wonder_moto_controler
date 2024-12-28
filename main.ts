radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(0)
    }
})
