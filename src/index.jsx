/** @jsx createElement */
//  ^ here we define our custom JSX pragma, the function that will be called
//    to create new elements

import { createElement } from "./createElement";
import { render } from "./renderToText";
import { render as renderToDOM } from "./renderToDOM";

// This is our "component"
// very similar to React pure functional components, but in fact, could
// hold some state on the closure
function Header(props) {
  return (
    <h1 style={{ color: props.color }} className="foo">
      {[
        "Hello ", 
        <em>world</em>, 
        ...props.children
      ]}
    </h1>
  );
}

// here we create a new instance of our component. `el` will be an
// tree-like object
const el = (
  <Header color="green">
    <h2>EITA</h2>
  </Header>
);

console.log('Element:', el);
console.log('HTML text:', render(el));

// conditionally render on browser
if ('document' in global) {
  document.body.appendChild(renderToDOM(el));
}
