
export const isSupportWebM = () => {
  if (!process.browser) {
    return "";
  }

  const elem = document.createElement('video');

  return elem.canPlayType('video/webm');
};
