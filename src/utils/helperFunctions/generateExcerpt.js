function generateExcerpt(content, maxLength) {
  if (content.length <= maxLength) {
    return content;
  }
  const trimmedContent = content.substring(0, maxLength);
  const lastSpaceIndex = trimmedContent.lastIndexOf(" ");
  const excerpt = trimmedContent.substring(0, lastSpaceIndex) + " ...";
  return excerpt;
}

export default generateExcerpt;
