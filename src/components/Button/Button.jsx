import { Btn } from './Button.styed';

export default function Button({ onClick, styled = {}, children }) {
  return (
    <Btn type="button" onClick={onClick} stylesetting={styled}>
      {children}
    </Btn>
  );
}
