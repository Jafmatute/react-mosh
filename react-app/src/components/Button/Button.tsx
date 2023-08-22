import styles from './Buttom.module.css';

interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'info' | 'warning';
  onClick: () => void;
}

const Buttom = ({ children, color = 'primary', onClick }: Props) => {
  return (
    <button
      className={[styles.btn, styles['btn-' + color]].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Buttom;
