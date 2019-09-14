import { relativeUnitsFromLargestToSmallest } from './relative_options';
describe('relativeUnitsFromLargestToSmallest', function () {
  test('relativeUnitsFromLargestToSmallest length', function () {
    expect(relativeUnitsFromLargestToSmallest.length).toBe(7);
  });
  test('relativeUnitsFromLargestToSmallest order', function () {
    expect(relativeUnitsFromLargestToSmallest).toEqual(['y', 'M', 'w', 'd', 'h', 'm', 's']);
  });
});