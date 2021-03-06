import _ from 'lodash';
import { expect, assert } from 'chai';

import $forms, { up } from './data';

describe('Check validate() returns promise', () => {
  _.each($forms, (form, key) => it(`$${up(key)} validate() is promise`, () =>
    expect(form.validate()).to.be.a('promise')));
});

describe('Check values() returns object', () => {
  _.each($forms, (form, key) => it(`$${up(key)} values() is object`, () =>
    assert.isObject(form.values(), `$${up(key)}.values() is not object`)));
});

describe('Check errors() returns object', () => {
  _.each($forms, (form, key) => it(`$${up(key)} errors() is object`, () =>
    assert.isObject(form.errors(), `$${up(key)}.errors() is not object`)));
});

describe('Check eventsRunning() returns boolean', () => {
  _.each($forms, (form, key) => it(`$${up(key)} eventsRunning() is boolean`, () =>
    assert.isBoolean(form.eventsRunning(), `$${up(key)}.eventsRunning() is not boolean`)));
});

describe('Check hasError returns boolean', () => {
  _.each($forms, (form, key) => it(`$${up(key)} hasError is boolean`, () =>
    assert.isBoolean(form.hasError, `$${up(key)}.hasError is not boolean`)));
});

describe('Check isDirty returns boolean', () => {
  _.each($forms, (form, key) => it(`$${up(key)} isDirty is boolean`, () =>
    assert.isBoolean(form.isDirty, `$${up(key)}.isDirty is not boolean`)));
});

describe('Check isPristine returns boolean', () => {
  _.each($forms, (form, key) => it(`$${up(key)} isPristine is boolean`, () =>
    assert.isBoolean(form.isPristine, `$${up(key)}.isPristine is not boolean`)));
});

describe('Check isDefault returns boolean', () => {
  _.each($forms, (form, key) => it(`$${up(key)} isDefault is boolean`, () =>
    assert.isBoolean(form.isDefault, `$${up(key)}.isDefault is not boolean`)));
});

describe('Check isValid returns boolean', () => {
  _.each($forms, (form, key) => it(`$${up(key)} isValid is boolean`, () =>
    assert.isBoolean(form.isValid, `$${up(key)}.isValid is not boolean`)));
});

describe('Check isEmpty returns boolean', () => {
  _.each($forms, (form, key) => it(`$${up(key)} isEmpty is boolean`, () =>
    assert.isBoolean(form.isEmpty, `$${up(key)}.isEmpty is not boolean`)));
});
