import { Children, isValidElement } from 'react';
import type { ReactNode, JSXElementConstructor } from 'react';

export const useValidateChildren = (children: ReactNode, allowedChildren: Array<string | JSXElementConstructor<never>>) => {
  const isUnknownChildrenPresent = Children.toArray(children).some((child) => {
    if (!isValidElement(child)) {
      return true;
    }

    return !allowedChildren.includes(child.type);
  });

  return isUnknownChildrenPresent ? <p>Unknown children were detected</p> : children;
}