import { objectType, stringType } from "../../constatnts/prop-types";

export const Option = (props) => {
    const {
      children,
      innerProps,
      data,
    } = props;
    return (
      <div
        {...innerProps}
      >
        <div className="option">
        <img src={data.photo} className="option__avatar" />
        {children}
      </div>
      </div>
    );
  };

  
  Option.propTypes = {
    children: stringType,
    innerProps: objectType,
    data: objectType
  }
