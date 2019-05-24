describe("A suite of basic functions", function () {
  var name;

  it("sayHello", function () {
    name = "Conan";
    var exp = "Hello Conan";
    expect(exp).toEqual(sayHello(name));
  });
  it("reverse word", function () {
    expect("DCBA").toEqual(reverse("ABCD"));
    expect("Conan").toEqual(reverse("nanoC"));
  });
  it("toBe and not.toBe", function () {
    expect(2).toBe(2);
    expect('a').not.toBe('b');
  });
});