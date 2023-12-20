import { InputBox, useInput, usePwInput } from './input';

const App = () => {
  const { value, getInputProps } = useInput('first');

  const { password, getPwInputProps, show, toggleShow } =
    usePwInput();

  const { value: range, getInputProps: getRangeInputProps } =
    useInput({ type: 'range', initial: 0 });

  const { checked, getInputProps: getCheckedInputProps } = useInput({
    type: 'checkbox',
    onInput: (checked) => console.log(checked),
  });

  return (
    <>
      <div>
        <h2>Normal Input Box</h2>
        <input {...getInputProps()} />
        <div>value : {value}</div>
      </div>
      <hr />

      <div>
        <h2>Password Input Box</h2>
        <input {...getPwInputProps()} />
        <button onClick={toggleShow}>{show ? '😳' : '🫣'}</button>
        <div>password: {password}</div>
      </div>
      <hr />

      <div>
        <h2>Another Input Box</h2>
        <input {...getRangeInputProps()} />
        <div>value: {range}</div>
      </div>
      <hr />

      <div>
        <h2>Check Input Box</h2>
        <input {...getCheckedInputProps()} />
        <div>value: {String(checked)}</div>
      </div>
      <hr />

      <InputBox type='search'>
        <h2>Input Component</h2>
        <InputBox.Label>input</InputBox.Label>
        <InputBox.Input />
      </InputBox>

      <InputBox
        type='checkbox'
        onInput={(value) => console.log(value ? 'good!' : 'nono')}>
        <h2>Check Component</h2>
        <InputBox.Label>is good : </InputBox.Label>
        <InputBox.Input />
      </InputBox>
    </>
  );
};

export default App;
