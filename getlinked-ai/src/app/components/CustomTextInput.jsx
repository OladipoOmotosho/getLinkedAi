import { useState } from 'react';
import { useAppSelector } from '../../state/hooks';
import { colors } from '../styles';

const CustomTextInput = ({
  placeholder,
  value,
  setValue,
  type,
  label,
  className,
  width,
  height,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showCalendar, setShowCalendar] = useState(true);

  const { windowSize, windowFit } = useAppSelector((state) => state.screensize);

  return (
    <div className={className}>
      <div className={`text-xs mb-[8px]`} style={{ color: colors.gray3 }}>
        {label}
      </div>
      <div
        className="md:w-[464px] w-[327px] py-[13px] px-[16px] text-sm flex flex-row"
        style={{
          color: colors.gray4,
          borderWidth: 1,
          borderColor: colors.gray4,
          borderRadius: 4,
          width: width ? width : windowSize < 641 ? windowFit : 464,
          height: height,
        }}
      >
        <input
          value={value}
          placeholder={placeholder && placeholder}
          type={showPassword ? type : 'text'}
          name={placeholder}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-inherit"
        />
        {type === 'password' ? (
          <div
            onClick={() => setShowPassword(!showPassword)}
            style={{ paddingLeft: 17, cursor: 'pointer' }}
          >
            {showPassword ? "" : ""}
          </div>
        ) : (
          type === 'calendar' && (
            <div
              onClick={() => setShowCalendar(!showCalendar)}
              style={{ paddingLeft: 17, cursor: 'pointer' }}
            >
              {showCalendar ? "" : ''}
            </div>
          )
        )}
       
      </div>
    </div>
  );
};

export default CustomTextInput;
