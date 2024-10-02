import { describe, expect, test } from 'vitest';
import { isBefore } from '.';

describe('GIVEN isBefore', () => {
  test('WHEN date and date to compare is undefined THEN should return false', () => {
    const result = isBefore(undefined, undefined);
    expect(result).toBeFalsy();
  });

  test('WHEN date is a correct date and date to compare is undefined THEN should return false', () => {
    const result = isBefore('2023-02-02', undefined);
    expect(result).toBeFalsy();
  });

  test('WHEN date is undefined and date to compare is is before todays date THEN should return true', () => {
    const result = isBefore(undefined, '2023-02-02');
    expect(result).toBeTruthy();
  });

  test('WHEN date is undefined and date to compare is is after todays date THEN should return false', () => {
    const result = isBefore(undefined, '2025-02-02');
    expect(result).toBeFalsy();
  });

  test('WHEN date is a date before date to compare THEN should return true', () => {
    const result = isBefore('2024-02-02', '2023-02-02');
    expect(result).toBeTruthy();
  });

  test('WHEN date is a date after date to compare THEN should return true', () => {
    const result = isBefore('2024-02-02', '2025-02-02');
    expect(result).toBeFalsy();
  });
});
