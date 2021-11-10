import React, {Suspense} from 'react';
import Preloader from "../components/common/preloader/Preloader";


const withSuspense = (Component) => {

    return (props) => {
        return <Suspense fallback={<div><Preloader/></div>}>
            <Component {...props}/>
        </Suspense>
    }
}

export default withSuspense;
