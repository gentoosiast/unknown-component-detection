import type { FC, ReactNode } from 'react';
import { useAllowedComponents } from './hooks/useAllowedComponents';
import { ComponentWithDisplayName } from './ComponentWithDisplayName';
import { ComponentWithoutDisplayName } from './ComponentWithoutDisplayName';

type Props = {
  children: ReactNode;
};

type CompoundComponentProps = {
  Component1: typeof ComponentWithDisplayName;
  Component2: typeof ComponentWithoutDisplayName;
};

const CompoundComponent: FC<Props> & CompoundComponentProps = ({ children }) => {
  const inconsistent = useAllowedComponents(children, [ComponentWithDisplayName, ComponentWithoutDisplayName]);

  if (inconsistent) {
    return inconsistent
  }

  return (
    <div>
      {children}
    </div>
  );
};

CompoundComponent.Component1 = ComponentWithDisplayName;
CompoundComponent.Component2 = ComponentWithoutDisplayName;

export { CompoundComponent }

