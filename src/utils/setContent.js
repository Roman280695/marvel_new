

import Spinner from '../components/spinner/Spinner';
import ErrorMesage from '../components/errorMessage/ErrorMessage';
import Skeleton from '../components/skeleton/Skeleton';


const setContent = (process, Component, data) => {
    switch (process) {
        case 'waiting':
            return <Skeleton />;
            break;
        case 'loading':
            return <Spinner />;
            break;
        case 'confirmed':
            return <Component data={data} />
            break;
        case 'error':
            return <ErrorMesage />;
            break;
        default:
            throw new Error('Unexpected process state');
    }
}


export default setContent;