import { useQueryCache } from "react-query";

const { useState, useEffect } = require("react");

function usePageLoading() {
  const [loading, setLoading] = useState(true);
  const { isFetching } = useQueryCache();

  useEffect(() => {
    if (isFetching && !loading) {
      setLoading(true);
    } else if (!isFetching && loading) {
      setLoading(false);
    }
  }, [isFetching, setLoading, loading]);

  return [loading, setLoading];
}

export default usePageLoading;
