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

  if (typeof element.tag === 'function') {
    const props = element.props || {};
    props.children = (element.text && [element.text]) || element.children;
    element = element.tag(props);
    return render(element);
  }

  let props = [];
  if (element.props) {
    props = Object.keys(element.props).map((prop) => {
      switch (prop) {
        case "htmlFor": return `for="${element.props[prop]}"`;
        case "className": return `class="${element.props[prop]}"`;
        case "style": {
          return Object.keys(element.props[prop]).reduce((s, it) => {
            return s + `${it}:${element.props[prop][it]};`;
          }, 'style="') + '"';
        }
        default: return `${prop}="${element.props[prop]}"`;
      }
    });
  }

  let children = element.text || element.children.map(render).join('');

  const open = [element.tag].concat(props).filter(Boolean).join(' ');
  return `<${open}>${children}</${element.tag}>`
}
