import React from 'react';

export function OptionNoSearch(props) {
  const { noSearch, name } = props;

  return <>{noSearch && <input type="hidden" name={`${name}:search`} value="0" />}</>;
}
