import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [like, setLike] = useState(false);

  const toggle = () => {
    setLike(!like);
    onClick();
  };

  return (
    <div>
      {like ? (
        <AiFillHeart onClick={toggle} size={25} color='red' />
      ) : (
        <AiOutlineHeart onClick={toggle} size={25} />
      )}
    </div>
  );
};

export default Like;
