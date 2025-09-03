import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { TextInput } from '../../components/html/TextInput';
import { MakerContextProvider } from '../../stores/MakerContext';

/**
 * カスタムフィールドのテキストが正しい要素で構成されているかどうか
 * @example
 * <input type="text" name="hoge" class="acms-admin-form-width-full" data-validator="hoge" value="{hoge}" />
 * <input type="hidden" name="field[]" value="hoge" />
 */
describe('TextInput: customfield mode', () => {
  const mockItem = {
    name: 'custom_field_text',
    type: 'text',
    placeholder: 'Enter text',
  };

  const mockPreview = {
    mode: 'customfield',
    editMode: 'source',
    tag: 'section',
    acmscss: true,
    jsValidator: true,
    direction: 'horizontal',
  };

  it('should render main input element with correct attributes', () => {
    const { container } = render(
      <MakerContextProvider preview={mockPreview}>
        <TextInput item={mockItem} />
      </MakerContextProvider>
    );

    const text = container.querySelector('input[type="text"]') as HTMLInputElement;
    expect(text).toBeTruthy();
    expect(text.id).toBe('custom_field_text');
    expect(text.name).toBe('custom_field_text');
    expect(text.defaultValue).toBe('{custom_field_text}');
    expect(text.placeholder).toBe('Enter text');
    expect(text.getAttribute('data-validator')).toBe('custom_field_text');

    const hiddenInput = container.querySelector('input[type="hidden"][name="field[]"]') as HTMLInputElement;
    expect(hiddenInput).toBeTruthy();
    expect(hiddenInput.defaultValue).toBe('custom_field_text');
  });
});
