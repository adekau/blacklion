"use strict";

var _hsv_to_rgb = require("./hsv_to_rgb");

describe('hsvToRgb', function () {
  test('hsvToRgb accurately converts hsv to rgb', function () {
    // white
    expect((0, _hsv_to_rgb.hsvToRgb)({
      h: 0,
      s: 0,
      v: 1
    })).toMatchObject({
      r: 255,
      g: 255,
      b: 255
    }); // black

    expect((0, _hsv_to_rgb.hsvToRgb)({
      h: 0,
      s: 0,
      v: 0
    })).toMatchObject({
      r: 0,
      g: 0,
      b: 0
    }); // red

    expect((0, _hsv_to_rgb.hsvToRgb)({
      h: 0,
      s: 1,
      v: 1
    })).toMatchObject({
      r: 255,
      g: 0,
      b: 0
    }); // yellow

    expect((0, _hsv_to_rgb.hsvToRgb)({
      h: 60,
      s: 1,
      v: 1
    })).toMatchObject({
      r: 255,
      g: 255,
      b: 0
    }); // Pure green

    expect((0, _hsv_to_rgb.hsvToRgb)({
      h: 120,
      s: 1,
      v: 1
    })).toMatchObject({
      r: 0,
      g: 255,
      b: 0
    }); // cyan

    expect((0, _hsv_to_rgb.hsvToRgb)({
      h: 180,
      s: 1,
      v: 1
    })).toMatchObject({
      r: 0,
      g: 255,
      b: 255
    }); // blue

    expect((0, _hsv_to_rgb.hsvToRgb)({
      h: 240,
      s: 1,
      v: 1
    })).toMatchObject({
      r: 0,
      g: 0,
      b: 255
    }); // magenta

    expect((0, _hsv_to_rgb.hsvToRgb)({
      h: 300,
      s: 1,
      v: 1
    })).toMatchObject({
      r: 255,
      g: 0,
      b: 255
    });
  });
});