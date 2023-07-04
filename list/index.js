/* eslint-disable prefer-destructuring */

import { complement, curry, equals, includes, length, lt, pipe } from "ramda"

export const notIncludes = complement(includes)

/**
 * Combines multiple lists and/or items into one new list.
 */
export const merged = Array.prototype.concat

/**
 *
 * @param {Array} list
 *
 * @param  {...any} items
 * Additional items to add to the end of the list.
 *
 * @returns {Array}
 */
export const extended = (list, ...elements) => merged(list, elements)

/**
 * Returns a new list from a set of elements.
 */
export const of = Array.of

export const size = {
  /**
   *
   * @param {number} count
   * @param {array} list Array or Tuple
   * @returns {boolean}
   */
  is: curry((count, list) => equals(count, length(list))),
  isMultiple: pipe(length, lt(1)),
  value: length,
}
