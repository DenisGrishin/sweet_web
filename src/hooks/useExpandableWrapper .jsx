import { useState } from 'react';

const useExpandableWrapper = () => {
  const [childHeight, setChildHeight] = useState('');

  const onEnter = (element) => {
    const height = element.offsetHeight;
    setChildHeight(height);
  };

  const onEntered = () => {
    setChildHeight('auto');
  };

  const onExit = (element) => {
    const height = element.offsetHeight;
    setChildHeight(height);
  };

  const onExiting = () => {
    const height = 0;
    setChildHeight(height);
  };

  const state = {
    childHeight,
  };

  return {
    onEnter,
    onEntered,
    onExit,
    onExiting,
    state,
  };
};

export default useExpandableWrapper;
