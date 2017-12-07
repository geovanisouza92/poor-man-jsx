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

  if (typeof element.tag === 'function') {
    var _props = element.props || {};
    _props.children = element.text && [element.text] || element.children;
    element = element.tag(_props);
    return render(element);
  }

  const el = document.createElement(element.tag);

  if (element.props) {
    Object.keys(element.props).forEach((prop) => {
      switch (prop) {
        case "htmlFor":
          el["for"] = element.props[prop];
          break;

        case "className":
          el.classList.add(element.props[prop]);
          break;

        case "style":
          el.style = Object.keys(element.props[prop]).reduce(function (s, it) {
            return s + (it + ":" + element.props[prop][it] + ";");
          }, '');
          break;

        default:
          el[prop] = element.props[prop];
          break;
      }
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
