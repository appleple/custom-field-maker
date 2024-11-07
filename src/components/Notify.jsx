import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../store/MakerContext';

export function Notify(props) {
  const { message, onFinish = () => {} } = props;
  const {
    clipboard: { copied },
  } = useMakerContext();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setActive(true);
      }, 1);
      setTimeout(() => {
        setActive(false);
      }, 800);
      setTimeout(() => {
        if (onFinish) {
          onFinish();
        }
      }, 1100);
    }
  }, [copied, setActive, onFinish]);

  if (!copied) {
    return null;
  }

  return <p className={classnames('customFieldCopied', { active })}>{message}</p>;
}
