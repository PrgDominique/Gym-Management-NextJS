type hasButton = {
  name: string | number;
};

export const Button = ({ name }: hasButton) => {
  return <h1>{name}</h1>;
};
