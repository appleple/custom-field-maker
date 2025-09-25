export function generateSafeId(input: string): string {
  // マルチバイトでない場合はそのまま返す
  if (input === encodeURIComponent(input)) {
    return input;
  }

  return btoa(encodeURI(encodeURIComponent(input)))
    .replace(/=/g, '') // = 記号を除去
    .replace(/\+/g, '-') // + をハイフンに置換
    .replace(/\//g, '_'); // / をアンダースコアに置換
}
