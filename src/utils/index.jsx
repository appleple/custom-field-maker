export function generateSafeId(input) {
  return btoa(encodeURI(encodeURIComponent(input)))
    .replace(/=/g, '') // = 記号を除去
    .replace(/\+/g, '-') // + をハイフンに置換
    .replace(/\//g, '_'); // / をアンダースコアに置換
}
