import {countdown} from 'learn-js-master/js-countDown';

describe("tests for countdown function", () => {
    it("should count from biggest number to smallest", () => {
        expect(countdown(10)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    });

    it("should count from 5 to 0", () => {
        expect(countdown(5)).toEqual([5, 4, 3, 2, 1, 0]);
    });

    it("should count from 0 to 0", () => {
        expect(countdown(0)).toEqual([0]);
    });
});
