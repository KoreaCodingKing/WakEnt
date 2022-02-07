export const enum LinkType {
  Common,
  YouTube,
  SoundCloud,
  Spotify,
}

export const getLinkType = (url: string): LinkType => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return LinkType.YouTube;
  } else if (url.includes('soundcloud.com')) {
    return LinkType.SoundCloud;
  } else if (url.includes('spotify.com')) {
    return LinkType.Spotify;
  } else {
    return LinkType.Common;
  }
};

/**
 * URL에서 YouTube ID를 추출합니다.
 * @param url YouTube URL
 * @returns YouTube ID
 */
export const getYouTubeId = (url: string): string => {
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;
  const match = url.match(regExp);

  if (match && match[0].length > 11) {
    return url.split('v=')[1];
  }

  return '';
};

/**
 * YouTube ID로 YouTube 썸네일 이미지 URL을 만듭니다.
 * @param url YouTube URL
 * @param maxRes 썸네일을 최고 화질로 설정할 지에 대한 여부
 * @returns YouTube 썸네일 이미지 URL
 */
export const youtubeThumbnailURLify = (id: string, maxRes: boolean): string => {
  return `https://img.youtube.com/vi/${id}/${maxRes ? 'maxresdefault' : 'mqdefault'}.jpg`;
};


/**
 * URL에서 YouTube 썸네일 이미지 URL을 추출합니다.
 * @param url YouTube URL
 * @param maxRes 썸네일을 최고 화질로 설정할 지에 대한 여부
 * @returns YouTube 썸네일 이미지 URL
 */
export const getYouTubeThumbnailURL = (url: string, maxRes = true): string => {
  const id = getYouTubeId(url);
  return youtubeThumbnailURLify(id, maxRes);
};
