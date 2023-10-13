/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: sophie
 * Created on: oct 2023
 * This program is a traffic light
*/

// variable
let neopixelStrip: neopixel.Strip = null

basic.clearScreen()
basic.showIcon(IconNames.Heart)
basic.pause(1000)

neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Heart)

input.onButtonPressed(Button.A, function () {
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.show()
  basic.pause(3000)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
  neopixelStrip.show()
  basic.pause(3000)
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  basic.pause(3000)
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  basic.pause(3000)

  basic.showIcon(IconNames.Heart)
})
