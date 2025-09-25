import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BlockEditor } from '../../components/html/BlockEditor';
import { MakerContextProvider } from '../../stores/MakerContext';

/**
 * カスタムフィールドのブロックエディターが正しい要素で構成されているかどうか
 *
 * 【仕様】
 * - コンバーター使用不可
 * - バリデーター使用不可
 * - 検索対象外選択不可
 *
 * @example
 * <div class="js-block-editor" data-target=".js-target" data-html=".js-html">
 *  <div class="js-target acms-admin-form-width-full"></div>
 *  <input type="hidden" class="js-html" name="hoge" value="{hoge}">
 *  <input type="hidden" name="hoge:extension" value="block-editor" />
 *  <input type="hidden" name="field[]" value="hoge">
 * </div>
 */
describe('BlockEditor: customfield mode', () => {
  const mockItem = {
    name: 'custom_field_blockeditor',
    type: 'blockEditor',
  };

  const mockPreview = {
    mode: 'customfield',
    editMode: 'source',
    tag: 'section',
    acmscss: true,
    jsValidator: true,
    direction: 'horizontal',
    escapeSequence: false,
  };

  it('should render main input element with correct attributes', () => {
    const { container } = render(
      <MakerContextProvider preview={mockPreview}>
        <BlockEditor item={mockItem} />
      </MakerContextProvider>
    );

    const blockEditorContainer = container.querySelector('div.js-block-editor') as HTMLDivElement;
    expect(blockEditorContainer).toBeTruthy();
    expect(blockEditorContainer.getAttribute('data-target')).toBe('.js-target');
    expect(blockEditorContainer.getAttribute('data-html')).toBe('.js-html');

    const blockEditorDraw = blockEditorContainer.querySelector('div.js-target');
    expect(blockEditorDraw).toBeTruthy();

    const valueElement = blockEditorContainer.querySelector('input[type="hidden"].js-html') as HTMLInputElement;
    expect(valueElement).toBeTruthy();
    expect(valueElement.name).toBe('custom_field_blockeditor');
    expect(valueElement.defaultValue).toBe('{custom_field_blockeditor}');

    const extensionElement = blockEditorContainer.querySelector(
      'input[type="hidden"][name$=":extension"][value="block-editor"]'
    ) as HTMLInputElement;
    expect(extensionElement).toBeTruthy();
    expect(extensionElement.name).toBe('custom_field_blockeditor:extension');

    const hiddenInput = blockEditorContainer.querySelector('input[type="hidden"][name="field[]"]') as HTMLInputElement;
    expect(hiddenInput).toBeTruthy();
    expect(hiddenInput.defaultValue).toBe('custom_field_blockeditor');
  });
});
