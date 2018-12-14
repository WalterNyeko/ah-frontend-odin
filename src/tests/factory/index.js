import faker from 'faker';
import range from 'lodash/range';
import isFunction from 'lodash/isFunction';
/**
 * This Factory is responsible for generating test dummy data.
 * Just like factories in real life that manufacture products like Cars,
 * phones etc, our factories are  generating entities eg Articles, Users,Profiles etc.
 */
class Factory {
  /**
   * Creates an instance of the factory class
   * @param  {Function|String} entity
   * @return {Factory}
   */
  constructor(entity) {
    this.prepareEntity(entity);
  }

  /**
   * Prepares a given entity
   * @param  {Function|String} entity
   */
  prepareEntity(entity) {
    // if the entity is a callback , we will set it and return right away
    if (isFunction(entity)) {
      this.entityFunction = entity;
      this.entityName = entity.name || '';
      return;
    }
    // otherwise, we will assume the user defined the entity module in this directory,
    // and we will attempt to import it dynamically.

    try {
      /* eslint-disable import/no-dynamic-require, global-require */
      this.entityName = entity;
      this.entityFunction = require(`./${entity}`).default;
    } catch (e) {
      // we will have to let the user know if we were unsuccessful
      throw new Error(`No factory defined for the entity ${entity} in test/factories`);
    }
  }

  /**
   * Creates an instance of the Factory class
   * @param  {Function|String} entity
   * @return {Factory}
   */
  static of(entity) {
    return new Factory(entity);
  }

  /**
   * Manufactures given entities
   * @param  {Number} count    the number of entities
   * @param  {Object} overrides
   * @return {Mixed}
   */
  make(count = 1, overrides = {}) {
    const results = range(count).map(() => {
      const result = this.entityFunction(faker, Factory);

      if (result === undefined) {
        throw new Error(`Your entity ${this.entityName} returned nothing`);
      }

      return { ...result, ...overrides };
    });

    return count === 1 ? results[0] : Object.values(results);
  }
}

export default Factory;
