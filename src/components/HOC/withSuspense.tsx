import React, { ReactElement } from 'react';

import { Preloader } from '../Common/Preloader/Preloader';

function withSuspense<T>(Component: React.ComponentType & any) {
  return (props: T): ReactElement => (
    <React.Suspense fallback={<Preloader />}>
      <Component {...props}>{}</Component>
    </React.Suspense>
  );
}
export default withSuspense;
