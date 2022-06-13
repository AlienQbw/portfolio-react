function useWindowSize() {
  const windowSize = {
    width: window.innerWidth,
    height: window.innerHeigh,
  };
  return windowSize;
}

export default useWindowSize;
