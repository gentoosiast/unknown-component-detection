import type { FC } from 'react';

const ComponentWithDisplayName: FC = () => <p>Component1</p>;

ComponentWithDisplayName.displayName = 'Component 1';

export { ComponentWithDisplayName };

