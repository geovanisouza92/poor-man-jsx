import { isPrimitive } from "./isPrimitive";

/**
 * This function create DOM elements from JSX element representations
 * 
 * There's no support for event listeners... yet.
 * 
 * @param {object} element The element created by "createElement"
 */
export function render(element) {
  if (isPrimitive(element)) {
    return document.createTextNode((element).toString());
  }

  const el = document.createElement(element.tag);
  
  if (element.props) {
    Object.keys(element.props).forEach((prop) => {
      el[prop] = element.props[prop];
    });
  }

  if (element.text) {
    el.innerText = element.text;
  } else {
    element.children.forEach((child) => {
      el.appendChild(render(child));
    });
  }

  return el;
}
