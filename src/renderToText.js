import { isPrimitive } from "./isPrimitive";

/**
 * This function converts an JSX element representation into raw html
 * 
 * @param {object} element The element created by "createElement"
 */
export function render(element) {
  if (isPrimitive(element)) {
    return (element).toString();
  }

  let props = '';
  if (element.props) {
    props = Object.keys(element.props).map((prop) => {
      return `${prop}="${element.props[prop]}"`;
    });
  }

  let children = element.text || element.children.map(render).join('');

  const open = [element.tag, props].filter(Boolean).join(' ');
  return `<${open}>${children}</${element.tag}>`
}
