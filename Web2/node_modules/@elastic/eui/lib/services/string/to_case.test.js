"use strict";

var _to_case = require("./to_case");

describe('toSentenceCase', function () {
  it("should return the same single word with the first letter capitalized for 'single'", function () {
    expect((0, _to_case.toSentenceCase)('single')).toBe('Single');
  });
  it("should return all the words with ony the first letter of the first word capitalized for 'two words'", function () {
    expect((0, _to_case.toSentenceCase)('two words')).toBe('Two words');
  });
  it("should return all the words with ony the first letter of the first word capitalized for 'opposite Of Sentence Case'", function () {
    expect((0, _to_case.toSentenceCase)('opposite Of Sentence Case')).toBe('Opposite of sentence case');
  });
});