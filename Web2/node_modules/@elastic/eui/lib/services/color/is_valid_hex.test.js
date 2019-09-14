"use strict";

var _is_valid_hex = require("./is_valid_hex");

describe('isValidHex', function () {
  test('hex3', function () {
    expect((0, _is_valid_hex.isValidHex)('FFF')).toEqual(false);
    expect((0, _is_valid_hex.isValidHex)('#FFF')).toEqual(true);
    expect((0, _is_valid_hex.isValidHex)('#0c8')).toEqual(true);
    expect((0, _is_valid_hex.isValidHex)('#0C8')).toEqual(true);
    expect((0, _is_valid_hex.isValidHex)('0c8')).toEqual(false);
    expect((0, _is_valid_hex.isValidHex)('#MMM')).toEqual(false);
  });
  test('hex4', function () {
    expect((0, _is_valid_hex.isValidHex)('FFFF')).toEqual(false);
    expect((0, _is_valid_hex.isValidHex)('#FFFF')).toEqual(false);
    expect((0, _is_valid_hex.isValidHex)('#0c8f')).toEqual(false);
    expect((0, _is_valid_hex.isValidHex)('#0C8f')).toEqual(false);
    expect((0, _is_valid_hex.isValidHex)('0c8f')).toEqual(false);
    expect((0, _is_valid_hex.isValidHex)('#0000')).toEqual(false);
  });
  test('hex6', function () {
    expect((0, _is_valid_hex.isValidHex)('FFFFFF')).toEqual(false);
    expect((0, _is_valid_hex.isValidHex)('#FFFFFF')).toEqual(true);
    expect((0, _is_valid_hex.isValidHex)('#00cc88')).toEqual(true);
    expect((0, _is_valid_hex.isValidHex)('#00CC88')).toEqual(true);
    expect((0, _is_valid_hex.isValidHex)('00cc88')).toEqual(false);
    expect((0, _is_valid_hex.isValidHex)('#MMMMMM')).toEqual(false);
  });
  test('hex8', function () {
    expect((0, _is_valid_hex.isValidHex)('FFFFFFFF')).toEqual(false);
    expect((0, _is_valid_hex.isValidHex)('#FFFFFFFF')).toEqual(false);
    expect((0, _is_valid_hex.isValidHex)('#000000ff')).toEqual(false);
  });
  test('misc', function () {
    expect((0, _is_valid_hex.isValidHex)('test')).toEqual(false);
    expect((0, _is_valid_hex.isValidHex)('#test')).toEqual(false);
    expect((0, _is_valid_hex.isValidHex)('red')).toEqual(false);
    expect((0, _is_valid_hex.isValidHex)('whitesmoke')).toEqual(false);
  });
});