import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Component2: FC<Props> = ({ children }) => (
  <>
    <p>
      Component2
    </p>
    {children}
  </>
);

Component2.displayName = 'Component 2';

export { Component2 };