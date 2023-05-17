basic.forever(function () {
    if (input.compassHeading() == 0) {
        basic.showString("N")
    } else {
        if (true) {
            basic.showString("E")
        } else {
            if (input.compassHeading() == 180) {
                basic.showString("S")
            } else {
                if (input.compassHeading() == 270) {
                    basic.showString("W")
                }
            }
        }
    }
})
