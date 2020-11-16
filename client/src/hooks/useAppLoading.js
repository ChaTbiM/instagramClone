const { useEffect, useState } = require("react");

function useAppLoading(queryCache) {
  const [loadingApp, setLoadingApp] = useState(true);

  const callback = (cache, query) => {
    if (!cache.isFetching) {
      setLoadingApp(false);
    }
  };

  const unsubscribe = queryCache.subscribe(callback);

  useEffect(() => {
    if (queryCache.queriesArray.length === 0 || !queryCache.isFetching) {
      setLoadingApp(false);
    }
  }, [queryCache]);

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, [unsubscribe]);

  return [loadingApp, setLoadingApp];
}

export default useAppLoading;
