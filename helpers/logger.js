export const getAdBlockDetectedValue = () => {
  const blockedItem = document.getElementById('adBanner');
  return window.getComputedStyle(blockedItem).display === 'none';
};
