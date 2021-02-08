while (true) {
    console.log(input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) > 25 || input.acceleration(Dimension.Y) > 25) {
        light.setAll(light.rgb(255, 0, 0))
        music.baDing.playUntilDone()
    } else {
        light.clear()
        music.stopAllSounds()
    }
    
}
