import { isPrimitive } from "./isPrimitive";

// Most of this function came from https://github.com/snabbdom/snabbdom/blob/2271b7bdf15577eabd8de961f4e5bba5bd1515fe/src/h.ts#L22
export function createElement(tag, maybeProps, maybeChildren) {
  let props = {};
  let children;
  let text;

  // This part came from https://github.com/facebook/react/blob/7d27851bf4aa8129276614b62edf9ade4aaa4cbd/packages/react/src/ReactElement.js#L202
  const cLen = arguments.length - 2;
  if (cLen > 1) {
    const cArr = Array(cLen);
    for (let i = 0; i < cLen; i++) {
      cArr[i] = arguments[2 + i];
    }
    maybeChildren = cArr;
  }

  if (maybeChildren !== undefined) {
    props = maybeProps;
    if (Array.isArray(maybeChildren)) { 
      children = maybeChildren; 
    } else if (isPrimitive(maybeChildren)) { 
      text = maybeChildren; 
    } else if (maybeChildren && maybeChildren.tag) { 
      children = [maybeChildren]; 
    }
  } else if (maybeProps !== undefined) {
    if (Array.isArray(maybeProps)) { 
      children = maybeProps; 
    } else if (isPrimitive(maybeProps)) { 
      text = maybeProps; 
    } else if (maybeProps && maybeProps.tag) { 
      children = [maybeProps]; 
    } else { 
      props = maybeProps;
    }
  }

  // TODO: SVG
  return { tag, props, children, text };
}
