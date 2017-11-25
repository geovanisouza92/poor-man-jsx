# poor man JSX implementation

Here I wrote a simple JSX elements implementation, that create elements from HTML markup and render them into raw HTML and simple DOM elements (without support for event listeners... yet).

JSX serves as a _template-free_ template language, that is resolved at compile time (using Babel, e.g.) and runs inside pure JavaScript.

Take a look at `src` files, especially [createElement.js](src/createElement.js) that has an explanation how JSX syntax is converted to function calls, and then elements representation (plain objects). Then, that elements are used by "renderers" ([renderToText.js](src/renderToText.js) and [renderToDOM.js](src/renderToDOM.js)) as an interchangeable format.
