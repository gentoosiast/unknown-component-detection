import { Children, isValidElement } from 'react';
import type { ReactNode, JSXElementConstructor } from 'react';

const getJSXElementConstructorName = (jsxElemConstructor: JSXElementConstructor<never>) => {
  const componentDisplayName = 'displayName' in jsxElemConstructor &&
    typeof jsxElemConstructor.displayName === 'string' &&
    jsxElemConstructor.displayName;
  const componentName = jsxElemConstructor.name;

  return componentDisplayName || componentName;
}

const getChildName = (node: Exclude<ReactNode, boolean | null | undefined> | JSXElementConstructor<never>) => {
  if (typeof node === 'string' || typeof node === 'number' || typeof node === 'bigint') {
    return `${node}`;
  }

  if (isValidElement(node)) {
    const { type } = node;

    return typeof type === 'string' ? type : getJSXElementConstructorName(type);
  }

  return 'unknown child';
};

export const useAllowedComponents = (children: ReactNode, allowedChildren: Array<string | JSXElementConstructor<never>>) => {
  const unknownChildren = Children.toArray(children).filter((child) => {
    if (typeof child === 'string' && allowedChildren.includes(child)) {
      return false;
    }

    if (!isValidElement(child)) {
      return true
    }

    return !allowedChildren.includes(child.type)
  });

  if (unknownChildren.length === 0) {
    return null;
  }

  const allowedChildrenNames = allowedChildren.map((child) => {
    return typeof child === 'string' ? child : getJSXElementConstructorName(child)
  });
  const unknownChildrenNames = unknownChildren.map((child) => getChildName(child));

  return (
    <>
      <p>Only whitelisted components are allowed as children: {allowedChildrenNames.join(', ')}</p>
      <p>Unknown components: {unknownChildrenNames.join(', ')}</p>
    </>
  );
}