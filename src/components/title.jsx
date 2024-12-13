export const Title = ({ text, subText }) => {
  return (
    <h2 className='title-text'>
      {text} <span>{subText}</span>
    </h2>
  );
};
