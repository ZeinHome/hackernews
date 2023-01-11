import { Btn } from './Button.styed';

export default function Button({
  onClick,
  type = 'button',
  styled = {},
  children,
}) {
  return (
    <Btn type={type} onClick={onClick} stylesetting={styled}>
      {children}
    </Btn>
  );
}
