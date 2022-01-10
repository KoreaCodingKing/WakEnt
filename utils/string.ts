export const textShorten = (text: string, size: number) => {
  if (size <= 3) {
    throw new Error('Size should be greater than 3.');
  }

  if (text.length > size) {
    return `${text.substring(0, size - 3)}...`;
  }

  return text;
};

export const trimWhitespace = (text: string) => text.replace(/\s\s+/g, ' ');