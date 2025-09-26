export function generateSafeId(input: string): string {
  return Array.from(input)
    .map((ch) => {
      if (ch.charCodeAt(0) < 128) {
        // ASCII はそのまま
        return ch;
      } else {
        // 日本語など非ASCIIだけエンコード
        const encoded = btoa(encodeURIComponent(ch))
          .replace(/=/g, '') // = を除去
          .replace(/\+/g, '-') // + → -
          .replace(/\//g, '_'); // / → _
        return encoded;
      }
    })
    .join('');
}
