import React, { lazy, Suspense, useState } from 'react'

const LazyForm = lazy(() => import('./LazyForm'));
const LazyApp = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <h1>Lazy Loading Form...</h1>
            <button onClick={() => setShow(true)}>Open</button><br /><br />
            {show == true && (
                <Suspense>
                    <LazyForm />
                </Suspense>
            )}
        </div>
    )
}

export default LazyApp