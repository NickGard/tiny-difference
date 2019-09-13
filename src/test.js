const { difference } = require("./index");
const { expect } = require("chai");

describe("difference", () => {
  it("should return an empty array if any non-array is passed", () => {
    expect(difference([1,2], 1)).to.deep.equal([]);
    expect(difference()).to.deep.equal([]);
    expect(difference(null)).to.deep.equal([]);
    expect(difference({0: 'a', 1: 'b'})).to.deep.equal([]);
  });
  it('should return a copy of the original array if no other arguments are passed', () => {
    var arr = [1,2];
    expect(difference(arr)).to.deep.equal(arr);
    expect(difference(arr)).to.not.equal(arr);
  });
  it('should return the difference of all arrays passed', () => {
    expect(difference([1,2], [1])).to.deep.equal([2]);
    expect(difference([1,2,3,4], [1,2], [4])).to.deep.equal([3]);
    expect(difference([1,2], [3,4,5])).to.deep.equal([1,2]);
    expect(difference([1,2,3,4], [2,2], [3,1], [5,6])).to.deep.equal([4]);
  });
});
