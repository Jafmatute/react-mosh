interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'info' | 'warning';
  onClick: () => void;
}

const Buttom = ({ children, color = 'primary', onClick }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Buttom;
