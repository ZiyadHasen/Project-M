import React from 'react';

interface MainButtonProps {
  text: string; // Define the type of the text prop
}

const MainButton: React.FC<MainButtonProps> = ({ text }) => {
  return (
    <button className='flex px-4 justify-center items-center h-[44px] w-[350px] rounded-xl bg-bgYellow'>
      <div className='text-textYellow text-center'>{text}</div>
    </button>
  );
};

export default MainButton;
