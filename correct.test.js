describe("without .only, should show 'passed', 'todo', 'todo'", () => {
  test("passing test", () => {});

  test.todo("todo test 1");

  test.todo("todo test 2");
});
