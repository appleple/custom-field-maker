import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { RadioButton } from '../../components/html/RadioButton';
import { MakerContextProvider } from '../../stores/MakerContext';

/**
 * カスタムフィールドグループのラジオボタンが正しい要素で構成されているかどうか
 *
 * 【仕様】
 * - フィールドグループは行(row)ごとに `name="hoge[]"` で配列送信されるため、
 *   ある行でラジオボタンが未選択だとその行の配列要素自体が欠落し、
 *   他フィールドとの行インデックスがずれてしまう。
 * - 選択肢より前に同名・value=""のhidden inputを配置することで、
 *   未選択でも必ず配列要素が生成されるようにする。
 *
 * @example
 * <input type="hidden" name="hoge[]" value="" />
 * <input type="radio" name="hoge[]" value="a" />
 * <input type="radio" name="hoge[]" value="b" />
 */
describe('RadioButton: fieldgroup mode', () => {
  const mockItem = {
    name: 'group_field_radio',
    type: 'radio',
    option: [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
    ],
  };

  const mockPreview = {
    mode: 'fieldgroup',
    editMode: 'source',
    tag: 'section',
    acmscss: true,
    jsValidator: true,
    direction: 'horizontal',
    escapeSequence: false,
  };

  it('should render a hidden guard input with the same array name and empty value before the radio options', () => {
    const { container } = render(
      <MakerContextProvider preview={mockPreview}>
        <RadioButton item={mockItem} />
      </MakerContextProvider>
    );

    const inputs = Array.from(container.querySelectorAll('input'));
    const guardIndex = inputs.findIndex(
      (input) => input.type === 'hidden' && input.name === 'group_field_radio[]' && input.value === ''
    );
    const firstRadioIndex = inputs.findIndex((input) => input.type === 'radio');

    expect(guardIndex).toBeGreaterThanOrEqual(0);
    expect(firstRadioIndex).toBeGreaterThan(guardIndex);
  });

  it('should still render radio inputs with correct array name and value', () => {
    const { container } = render(
      <MakerContextProvider preview={mockPreview}>
        <RadioButton item={mockItem} />
      </MakerContextProvider>
    );

    const radios = container.querySelectorAll('input[type="radio"]') as NodeListOf<HTMLInputElement>;
    expect(radios.length).toBe(2);
    expect(radios[0].name).toBe('group_field_radio[]');
    expect(radios[0].value).toBe('a');
    expect(radios[1].value).toBe('b');
  });
});
