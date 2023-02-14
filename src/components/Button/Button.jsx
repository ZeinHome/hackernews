import { Btn } from './Button.styed';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  styled: PropTypes.object,
  children: PropTypes.node.isRequired,
};
