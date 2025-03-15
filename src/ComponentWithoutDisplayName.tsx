import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ComponentWithoutDisplayName: FC<Props> = ({ children }) => (
  <>
    <p>
      Component2
    </p>
    {children}
  </>
);

export { ComponentWithoutDisplayName };