import { Children } from 'react';
import type { FC, ReactNode } from 'react';
import { Component1 } from './Component1';
import { Component2 } from './Component2';

type Props = {
  children: ReactNode;
};

type CompoundComponentProps = {
  Component1: typeof Component1;
  Component2: typeof Component2;
};

const getDisplayName = (value: unknown) => {
  if (
    value &&
    typeof value === 'object' &&
    'type' in value &&
    typeof value.type === 'function' &&
    'displayName' in value.type &&
    typeof value.type.displayName === 'string'
  ) {
    return value.type.displayName;
  }

  return '';
}

const CompoundComponent: FC<Props> & CompoundComponentProps = ({ children }) => {
  const allowedChildren = ['Component1', 'Component2'];
  const childrenArray = Children.toArray(children);

  const isUnknownChildrenPresent = childrenArray.some((child) => {
    return !allowedChildren.includes(getDisplayName(child));
  });

  Children.forEach(children, (child, idx) => {
    console.log(idx, getDisplayName(child));
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

