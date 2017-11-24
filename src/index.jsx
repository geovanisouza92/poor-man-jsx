/** @jsx createElement */

import { createElement } from "./createElement";
import { render } from "./renderToText";
import { render as renderToDOM } from "./renderToDOM";

function Header() {
  return (
    <h1 style="color:red">
      Hello <em>world</em>
    </h1>
  );
}

const el = Header();

console.log('Element:', el);
console.log('HTML text:', render(el));

if ('document' in global) {
  document.body.appendChild(renderToDOM(el));
}
