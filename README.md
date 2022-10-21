# Jest Bug

To reproduce, install the dependencies and run `npx jest --verbose`. You'll see the following output:

```
 PASS  ./correct.test.js
  without .only, should show 'passed', 'todo', 'todo'
    ✓ passing test
    ✎ todo todo test 1
    ✎ todo todo test 2

 PASS  ./bug.test.js
  with .only, should show 'passed', 'todo', 'todo'
    ✓ passing test (1 ms)
    ○ skipped todo test 1
    ○ skipped todo test 2

Test Suites: 2 passed, 2 total
Tests:       2 skipped, 2 todo, 2 passed, 6 total
Snapshots:   0 total
Time:        0.393 s, estimated 1 s
Ran all test suites.
```

# Expected behavior

Independently of using `.only` or not, the tests marked as `.todo` should be shown as such in the terminal

# Environment

```
 System:
    OS: Linux 5.10 Ubuntu 20.04 LTS (Focal Fossa)
    CPU: (8) x64 Intel(R) Core(TM) i3-10100F CPU @ 3.60GHz
  Binaries:
    Node: 16.13.1 - ~/.nvm/versions/node/v16.13.1/bin/node
    Yarn: 1.22.19 - /mnt/c/Users/Pedro Ramos/AppData/Roaming/npm/yarn
    npm: 8.1.2 - ~/.nvm/versions/node/v16.13.1/bin/npm
  npmPackages:
    jest: ^29.2.1 => 29.2.1
```
