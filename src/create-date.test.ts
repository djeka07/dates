import { describe, expect, test } from 'vitest';
import createDate from './create-date';

describe('GIVEN createDate', () => {
  test('WHEN date is undefined THEN should return date now', () => {
    const date = createDate(undefined);
    const today = new Date();
    expect(date.year()).toEqual(today.getFullYear());
    expect(date.month()).toEqual(today.getMonth());
    expect(date.date()).toEqual(today.getDate());
  });

  test('WHEN date is null THEN should return date now', () => {
    const date = createDate(null);
    const today = new Date();
    expect(date.year()).toEqual(today.getFullYear());
    expect(date.month()).toEqual(today.getMonth());
    expect(date.date()).toEqual(today.getDate());
  });
  test('WHEN date is Date object THEN should return a DayJs object with correct dates', () => {
    const date = createDate(new Date('2022-10-10'));
    expect(date.year()).toEqual(2022);
    expect(date.month()).toEqual(9);
    expect(date.date()).toEqual(10);
  });
  test('WHEN date is milliseconds THEN should return a DayJs object with correct dates', () => {
    const milliseconds = new Date('2024-02-02').getTime();
    const date = createDate(milliseconds);
    expect(date.year()).toEqual(2024);
    expect(date.month()).toEqual(1);
    expect(date.date()).toEqual(2);
  });

  test('WHEN date is string THEN should return a DayJs object with correct dates', () => {
    const date = createDate('2024-02-02');
    expect(date.year()).toEqual(2024);
    expect(date.month()).toEqual(1);
    expect(date.date()).toEqual(2);
  });
});
