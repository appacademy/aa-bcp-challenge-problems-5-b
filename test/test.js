const assert = require('assert');

const highestScore = require('../problems/1-highest-score.js');
const snakeToCamel = require('../problems/2-snake-to-camel.js');
const sum2DArray = require('../problems/3-sum-2d-array.js');
const minValueCallback = require('../problems/4-min-value-callback.js');
const mySelect = require('../problems/5-my-select.js');

describe('highestScore()', function () {
  it('should return a string representing the student with the highest score', function () {
    const result1 = highestScore([
      { name: 'Alvin Zablan', id: 128, score: -42 },
      { name: 'Eliot Bradshaw', id: 32, score: 57 },
      { name: 'Tommy Duek', id: 2, score: 99 },
      { name: 'Fred Sladkey', id: 256, score: 94 },
    ]);
    const expected1 = 'TD2';
    assert.equal(result1, expected1);

    const result2 = highestScore([
      { name: 'Fido Dog', id: 0, score: 1000 },
      { name: 'Whiskers Cat', id: 1, score: 750 },
    ]);
    const expected2 = 'FD0';
    assert.equal(result2, expected2);
  });
});

describe('snakeToCamel()', function () {
  it('should return a string, converted from snake-case to CamelCase', function () {
    assert.equal(snakeToCamel('snakes_go_hiss'), 'SnakesGoHiss');
    assert.equal(snakeToCamel('say_hello_world'), 'SayHelloWorld');
    assert.equal(snakeToCamel('bootcamp_prep_is_cool'), 'BootcampPrepIsCool');
    assert.equal(snakeToCamel('BOOtcamp_PREP_iS_cOol'), 'BootcampPrepIsCool');
    assert.equal(snakeToCamel('app_academy_!'), 'AppAcademy!');
  });
});

describe('sum2DArray()', function () {
  it('should return the sum of all numbers in the 2D array', function () {
    const arr1 = [[1, 2, 3], [4, 5], [6]];
    assert.equal(sum2DArray(arr1), 21);

    const arr2 = [[-10, 2, 3], [1], [10, -5], [2]];
    assert.equal(sum2DArray(arr2), 3);

    const arr3 = [[0, 0, 5], [-5]];
    assert.equal(sum2DArray(arr3), 0);
  });
});

describe('minValueCallback()', function () {
  it('should call `cb`, passing in the minimum value, and return the result of `cb`', function () {
    assert.equal(minValueCallback([-2, -7, 0, 8], Math.abs), 7);
    assert.equal(
      minValueCallback([12, 9, 20, 13, 14], function (n) {
        return n * 2;
      }),
      18
    );
    assert.strictEqual(
      minValueCallback([], function (n) {
        return n;
      }),
      null
    );
  });
});

describe('mySelect()', function () {
  it('should return elements of the array where `cb` returns a truthy value', function () {
    function isUpper(str) {
      return str.toUpperCase() === str;
    }

    function isEven(n) {
      return n % 2 === 0;
    }

    const result1 = mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper);
    const result2 = mySelect([1, 2, 4, 7, 8], isEven);
    assert.deepEqual(result1, ['BOOTCAMP', 'COOL']);
    assert.deepEqual(result2, [2, 4, 8]);
  });
});
