import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
export default function Loading() {
  return (
    <FontAwesomeIcon
      icon="fa-solid fa-spinner"
      spin
      style={{
        fontSize: '120px',
        color: '#cd6032',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '40%',
      }}
    />
  );
}
