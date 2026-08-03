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
 * <acms-block-editor>
 *  <input type="hidden" name="hoge" value="{hoge}">
 * </acms-block-editor>
 * <input type="hidden" name="hoge:extension" value="block-editor" />
 * <input type="hidden" name="field[]" value="hoge">
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

    const blockEditorContainer = container.querySelector('acms-block-editor') as HTMLElement;
    expect(blockEditorContainer).toBeTruthy();
    expect(blockEditorContainer.getAttribute('data-target')).toBeNull();
    expect(blockEditorContainer.getAttribute('data-html')).toBeNull();
    expect(blockEditorContainer.className).toContain('acms-admin-form-width-full');

    // 子孫で最初に見つかる hidden input が HTML 同期対象になる（値を持たない input は要素外に出す）
    const hiddenInputs = blockEditorContainer.querySelectorAll('input[type="hidden"]');
    expect(hiddenInputs).toHaveLength(1);

    const valueElement = hiddenInputs[0] as HTMLInputElement;
    expect(valueElement).toBeTruthy();
    expect(valueElement.name).toBe('custom_field_blockeditor');
    expect(valueElement.defaultValue).toBe('{custom_field_blockeditor}');
    expect(valueElement.getAttribute('data-validator')).toBe('custom_field_blockeditor');

    const extensionElement = container.querySelector(
      'input[type="hidden"][name$=":extension"][value="block-editor"]'
    ) as HTMLInputElement;
    expect(extensionElement).toBeTruthy();
    expect(extensionElement.name).toBe('custom_field_blockeditor:extension');
    expect(blockEditorContainer.contains(extensionElement)).toBe(false);

    const hiddenInput = container.querySelector('input[type="hidden"][name="field[]"]') as HTMLInputElement;
    expect(hiddenInput).toBeTruthy();
    expect(hiddenInput.defaultValue).toBe('custom_field_blockeditor');
    expect(blockEditorContainer.contains(hiddenInput)).toBe(false);
  });
});
