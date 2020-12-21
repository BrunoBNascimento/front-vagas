const removeHtmlFromMarkdown = (markdown) => {
  return markdown.replace(/<[^>]*>?/gm, '');
};

export default removeHtmlFromMarkdown;
