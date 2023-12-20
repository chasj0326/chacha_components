import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { InputBox, useInput, usePwInput } from '../input';

const meta: Meta = {
  title: 'Chacha/Input',
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryFn = () => {
  const { getInputProps, value } = useInput();
  return (
    <div>
      <h3>Normal Input Box</h3>
      <input
        {...getInputProps()}
        placeholder='내용을 입력해 보세요'
      />
      <div>value: {value}</div>
    </div>
  );
};
Default.parameters = {
  docs: {
    description: {
      story: '**`useInput`**을 호출하여 입력 기능을 UI와 결합하기',
    },
  },
};

export const Password: StoryFn = () => {
  const { getPwInputProps, password, toggleShow, show } =
    usePwInput();
  return (
    <div>
      <h3>Password Input Box</h3>
      <input
        {...getPwInputProps()}
        placeholder='비밀번호를 입력해 주세요'
      />
      <button onClick={toggleShow}>{show ? '😳' : '🫣'}</button>
      <div>password: {password}</div>
    </div>
  );
};
Password.parameters = {
  docs: {
    description: {
      story:
        '**`usePwInput`**을 호출하여 비밀번호 입력 기능을 UI와 결합하기',
    },
  },
};

export const Option: StoryFn = () => {
  const { value: range, getInputProps: getRangeProps } = useInput({
    type: 'range',
    initial: 0,
  });
  const { value: checked, getInputProps: getCheckProps } = useInput({
    type: 'checkbox',
  });
  return (
    <>
      <div>
        <h3>Range Input Box</h3>
        <input {...getRangeProps()} />
        <div>value: {range}</div>
      </div>
      <hr />
      <div>
        <h3>Check Input Box</h3>
        <label>is Good?</label>
        <input {...getCheckProps()} />
        <div>value: {checked ? 'Good!' : 'Soso'}</div>
      </div>
    </>
  );
};
Option.parameters = {
  docs: {
    description: {
      story: '**`useInput`** 옵션에 `type`, `initial` 추가하기',
    },
  },
};

export const Component: StoryFn = () => {
  const [color, setColor] = useState('#000000');
  const [text, setText] = useState('');

  return (
    <>
      <InputBox
        onInput={(value) => {
          typeof value === 'string' && setText(value);
        }}>
        <h3>InputBox : Search</h3>
        <InputBox.Label>🔎 </InputBox.Label>
        <InputBox.Input
          placeholder='내용을 입력해 보세요'
          type='search'
        />
        <div>keyword: {text}</div>
      </InputBox>
      <hr />
      <InputBox
        type='color'
        onInput={(value) => {
          typeof value === 'string' && setColor(value);
        }}>
        <h3>InputBox : Color</h3>
        <InputBox.Label style={{ color }}>COLOR </InputBox.Label>
        <InputBox.Input />
      </InputBox>
    </>
  );
};
Component.parameters = {
  docs: {
    description: {
      story: '**`InputBox`** 컴포넌트 사용하여 input 구성하기',
    },
  },
};
