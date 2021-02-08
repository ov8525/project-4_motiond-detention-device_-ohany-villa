while True:
    print(input.acceleration(Dimension.X))
    if input.acceleration(Dimension.X) > 25 or input.acceleration(Dimension.Y)> 25:
        light.set_all(light.rgb(255,0,0))
        music.ba_ding.play_until_done()
    else:
        light.clear()
        music.stop_all_sounds()
