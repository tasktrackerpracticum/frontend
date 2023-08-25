import { objectType, stringType } from "../../constatnts/prop-types";
import AvatarLetter from '../../ui/AvatarUser/AvatarLetter';
import AvatarPic from '../../ui/AvatarUser/AvatarPic';

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
        {data.photo ? (
            <AvatarPic pic={data.photo} size={24} />
          ) : (
            <AvatarLetter
              nameUser={data.first_name}
              surnameUser={data.last_name}
              size={24}
            />
          )}
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
