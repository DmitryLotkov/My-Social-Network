import React, { ReactElement } from 'react';

import { Preloader } from '../Common/Preloader/Preloader';

function withSuspense<T>(Component: React.ComponentType<T>) {
  return (props: T): ReactElement => (
    <React.Suspense fallback={<Preloader />}>
      <Component {...props} />
    </React.Suspense>
  );
}
export default withSuspense;
