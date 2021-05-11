/* eslint-disable */

import {
  DivideAndConquer
} from '../../src/utilities/calculations'

test('Test DivideAndConquer', () => {
  let aNumber = 5
  let bNumber = 2
  let result = DivideAndConquer(aNumber, bNumber)
  expect(result).toBe(3.5)
})
