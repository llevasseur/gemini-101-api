export function isValidEmoji(emoji) {
  const emojiRegex = /^(?:\p{Emoji_Presentation}|\p{Emoji}\uFE0F)$/u;
  return emojiRegex.test(emoji);
}

export function makeOneEmoji(text) {
  const emojiRegex = /\p{Emoji_Presentation}|\p{Emoji}/gu;
  const match = text.match(emojiRegex);
  return match ? match[0] : "";
}
