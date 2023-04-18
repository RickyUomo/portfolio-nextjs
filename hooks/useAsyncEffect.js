import { useEffect } from "react";

const useAsyncEffect = (effect, dependents) => {
  useEffect(() => {
    return effect;
  }, dependents);
};

export default useAsyncEffect;
