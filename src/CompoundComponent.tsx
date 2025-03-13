import { Children, isValidElement } from 'react';
import type { FC, ReactNode, JSXElementConstructor } from 'react';
import { Component1 } from './Component1';
import { Component2 } from './Component2';

type Props = {
  children: ReactNode;
};

type CompoundComponentProps = {
  Component1: typeof Component1;
  Component2: typeof Component2;
};

const CompoundComponent: FC<Props> & CompoundComponentProps = ({ children }) => {
  const allowedChildren: Array<string | JSXElementConstructor<never>> = [Component1,  Component2];
  const childrenArray = Children.toArray(children);

  const isUnknownChildrenPresent = childrenArray.some((child) => {
    if (!isValidElement(child)) {
      return true;
    }

    return !allowedChildren.includes(child.type);
  });

  if (isUnknownChildrenPresent) {
    return <p>Unknown children are detected</p>
  }

  return (
    <div>
      {children}
    </div>
  );
};

CompoundComponent.Component1 = Component1;
CompoundComponent.Component2 = Component2;

export { CompoundComponent }

