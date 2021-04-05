# Steps to reproduce

- `npm install`
- `npm run dev`
- `npm test`
- Run the `test-bug.spec.js` test
- Test should fail on command 9. Because the app code has caused the aliased DOM element to be recreated, the DOM is required to find the element again, but it re-runs the line before the alias as well.