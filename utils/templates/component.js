module.exports = componentName => ({
  content: `import React, { FC } from 'react';

import { Wrapper } from "./${componentName}.styles"

import { ${componentName}Props } from "./${componentName}.types";

const ${componentName}: FC<${componentName}Props> = ({ foo }) => (
    <Wrapper data-testid="${componentName}">{foo}</Wrapper>
);
export default ${componentName};
`,
  extension: `.tsx`,
});
