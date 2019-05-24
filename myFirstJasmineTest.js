describe("My first Jasmine test", function() {
  it("a spec with an expectation", function() {
    expect(1).toBe(2);
    expect(1===1).toBe(true);
    expect('a').not.toBe('b');
  });
  
  it("an other spec in current suite", function() {
      expect(true).toBe(true);
  });
});

describe("My first Jasmine test", function() {
  it("nothing", function() {
  });
});