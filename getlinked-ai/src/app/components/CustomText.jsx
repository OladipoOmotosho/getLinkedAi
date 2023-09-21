const CustomText = ({
  text,
  className,
  color,
  weight,
  fontFamily,
  onClick,
}) => {
  const style = {
    color,
    fontWeight: weight,
    fontFamily,
  };

  return (
    <p className={`${className}`} style={style} onClick={onClick}>
      {text}
    </p>
  );
};

export default CustomText;
