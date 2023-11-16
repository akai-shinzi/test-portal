import { useEffect, useState } from 'react'

const useIsReady = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 1000);
    }, []);

    return !loading
}

export default useIsReady
