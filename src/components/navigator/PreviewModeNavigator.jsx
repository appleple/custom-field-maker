import { useRef } from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../stores/MakerContext';

export function PreviewModeNavigator() {
  const {
    setEditMode,
    preview: { editMode },
  } = useMakerContext();

  const tabRefs = useRef({
    source: null,
    preview: null,
    confirm: null,
  });

  const tabOrder = ['source', 'preview', 'confirm'];

  const updateMode = (editMode) => {
    setEditMode(editMode);
  };

  const handleKeyDown = (event, currentTab) => {
    const currentIndex = tabOrder.indexOf(currentTab);
    let nextIndex = currentIndex;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        nextIndex = currentIndex > 0 ? currentIndex - 1 : tabOrder.length - 1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        nextIndex = currentIndex < tabOrder.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        event.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        nextIndex = tabOrder.length - 1;
        break;
      default:
        return;
    }

    const nextTab = tabOrder[nextIndex];
    updateMode(nextTab);

    // Focus the next tab after a short delay to ensure state update
    setTimeout(() => {
      if (tabRefs.current[nextTab]) {
        tabRefs.current[nextTab].focus();
      }
    }, 0);
  };

  return (
    <ul className="customFieldTabs acms-admin-tabs-inner" role="tablist">
      <li role="presentation">
        <button
          ref={(el) => (tabRefs.current.source = el)}
          id="source-tab"
          className={classnames({ 'acms-admin-tab-active': editMode === 'source' })}
          onClick={() => updateMode('source')}
          onKeyDown={(e) => handleKeyDown(e, 'source')}
          type="button"
          role="tab"
          aria-controls="source"
          aria-selected={editMode === 'source'}
        >
          入力用コード
        </button>
      </li>
      <li role="presentation">
        <button
          ref={(el) => (tabRefs.current.preview = el)}
          id="preview-tab"
          className={classnames({ 'acms-admin-tab-active': editMode === 'preview' })}
          onClick={() => updateMode('preview')}
          onKeyDown={(e) => handleKeyDown(e, 'preview')}
          type="button"
          role="tab"
          aria-controls="preview"
          aria-selected={editMode === 'preview'}
        >
          入力用プレビュー
        </button>
      </li>
      <li role="presentation">
        <button
          ref={(el) => (tabRefs.current.confirm = el)}
          id="confirm-tab"
          className={classnames({ 'acms-admin-tab-active': editMode === 'confirm' })}
          onClick={() => updateMode('confirm')}
          onKeyDown={(e) => handleKeyDown(e, 'confirm')}
          type="button"
          role="tab"
          aria-controls="confirm"
          aria-selected={editMode === 'confirm'}
        >
          出力用コード
        </button>
      </li>
    </ul>
  );
}
