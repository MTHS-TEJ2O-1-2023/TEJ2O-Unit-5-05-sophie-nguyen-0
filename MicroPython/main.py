"""
Created by: sophie
Created on: oct 2023
This module is a Micro:bit MicroPython program does traffic light
"""

from microbit import *
import neopixel

# variables
neopixel_strip = neopixel.NeoPixel(pin16, 8)

display.clear
display.show(Image.HEART)
sleep(1000)

while True:
    neopixel_strip[0] = (0, 0, 0)
    neopixel_strip[1] = (0, 0, 0)
    neopixel_strip[2] = (0, 0, 0)
    print(neopixel_strip[0])
    print(neopixel_strip[1])
    print(neopixel_strip[2])

    if button_a.is_pressed():
        neopixel_strip[0] = (0, 255, 0)
        print(neopixel_strip[0])
        sleep(3000)
        neopixel_strip[0] = (0, 0, 0)
        neopixel_strip[1] = (255, 255, 0)
        print(neopixel_strip[0])
        print(neopixel_strip[1])
        sleep(3000)
        neopixel_strip[1] = (0, 0, 0)
        neopixel_strip[2] = (255, 0, 0)
        print(neopixel_strip[1])
        print(neopixel_strip[2])
        sleep(3000)
        neopixel_strip[2] = (0, 0, 0)
        print(neopixel_strip[2])
