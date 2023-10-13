"""
Created by: sophie
Created on: oct 2023
This module is a Micro:bit MicroPython program does traffic light
"""

from microbit import *

# variables
neopixel_strip = neopixel.NeoPixel(pin16, 8)

display.clear
display.show(Image.HEART)
sleep(1000)

while True:
np[0] = (255, 0, 0)

    if button_a.is_pressed():


