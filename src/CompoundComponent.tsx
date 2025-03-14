import type { FC, ReactNode } from 'react';
import { useValidateChildren } from './hooks/useValidateChildren';
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
  const validatedChildren = useValidateChildren(children, [Component1, Component2]);

  return (
    <div>
      {validatedChildren}
    </div>
  );
};

CompoundComponent.Component1 = Component1;
CompoundComponent.Component2 = Component2;

export { CompoundComponent }

