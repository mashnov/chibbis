const headOptions = require('~/config/head.config');

const isClient = process.client;
const breakpoints = { xs: 320, sm: 576, md: 768, lg: 992, xl: 1200 };

export const generateMeta = headOptions.generateMeta;
export const getViewportWidth = () => {
  return window.innerWidth;
};
export const getCurrentBreakpoint = () => {
  const width = getViewportWidth();
  const breakpointList = Object.keys(breakpoints);
  return breakpointList.filter((item) => (width >= breakpoints[item])).reverse()[0] || breakpointList[0];
};
export const getScrollTop = () => {
  return window.document.documentElement.scrollTop || window.document.body.scrollTop;
};
export const getScrollDir = ({ scrollValue, currentValue }) => {
  return currentValue <= scrollValue ? 'down' : 'up';
};
export const getWindowIsFocused = () => {
  return document.hasFocus();
};
export const getViewportHeight = () => {
  return window.innerHeight;
};
export const setScrollTop = (scrollPosition) => {
  if (isClient) {
    window.scrollTo(0, scrollPosition);
  }
};
