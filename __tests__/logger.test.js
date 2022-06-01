'use strict';
const logger = require('../src/middleware/logger');

describe('logger middleware', () => {

    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();
    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log');
    });

    test('Is it logging?', () => {
        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    });
    test('Is it calling next?', () => {
        expect(next).toHaveBeenCalled();
    });

})