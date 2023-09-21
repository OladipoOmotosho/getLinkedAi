import { CustomText } from '../components/CustomText';
import { colors, FONTFAMILY } from '../styles';

const CustomButton = ({
  text,
  disabled,
  width,
  height,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  textWeight,
  onClick,
  loading,
  color,
  background = colors.orange,
  border = 'none',
  borderRadius = 20,
  borderTopLeftRadius = 20,
  borderTopRightRadius = 20,
  borderEndEndRadius = 20,
  borderEndStartRadius = 20,
  fontSize,
}) => {

  return (
    <button
      disabled={disabled}
      style={{
        opacity: disabled ? '40%' : '100%',
        backgroundColor: background,
        borderRadius: borderRadius,
        textAlign: 'center',
        width: width,
        height: height,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        color: color,
        border: border,
        borderTopLeftRadius: borderTopLeftRadius,
        borderTopRightRadius: borderTopRightRadius,
        borderEndEndRadius: borderEndEndRadius,
        borderEndStartRadius: borderEndStartRadius,
        fontSize: fontSize,
      }}
      className={`py-[17px] text-white flex flex-row justify-center items-center`}
      onClick={loading || disabled ? () => null : onClick}
    >
      <CustomText text={text} className="text-center" weight={textWeight} />
    </button>
  );
};

export default CustomButton;
