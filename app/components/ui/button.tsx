type hasButton = {
  name: string;
};

export const Button = ({ name }: hasButton) => {
  return (
    <div>
      <button className='rounded-full w-5 h-5 bg-slate-500'>{name}</button>
    </div>
  );
};
