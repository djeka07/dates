import { describe, expect, test } from 'vitest';
import { formatDate } from '.';

describe('GIVEN formatDate', () => {
  test('WHEN date is undefined THEN should return a formatted date now', () => {
    const date = formatDate(undefined);
    const today = new Date();
    const monthAndDate = `${today.toLocaleString('default', { month: 'long' })} ${today.getDate()}`;
    const yearAndTime = `${today.getFullYear()} ${today.toLocaleTimeString('default', { hour: 'numeric', minute: '2-digit' })}`;
    const expected = `${monthAndDate}, ${yearAndTime}`;
    expect(date).toEqual(expected);
  });

  test('WHEN date is null THEN should return a formatted date now', () => {
    const date = formatDate(null);
    const today = new Date();
    const monthAndDate = `${today.toLocaleString('default', { month: 'long' })} ${today.getDate()}`;
    const yearAndTime = `${today.getFullYear()} ${today.toLocaleTimeString('default', { hour: 'numeric', minute: '2-digit' })}`;
    const expected = `${monthAndDate}, ${yearAndTime}`;
    expect(date).toEqual(expected);
  });

  test('WHEN date is date object THEN should return a formatted date', () => {
    const date = formatDate(new Date('2023-02-02'));
    expect(date).toEqual('February 2, 2023 1:00 AM');
  });

  test('WHEN date is milliseconds THEN should return a formatted date', () => {
    const milliseconds = new Date('2024-02-02').getTime();
    const date = formatDate(milliseconds);
    expect(date).toEqual('February 2, 2024 1:00 AM');
  });

  test('WHEN date is string THEN should return a formatted date', () => {
    const date = formatDate('2024-02-02');
    expect(date).toEqual('February 2, 2024 12:00 AM');
  });
});
