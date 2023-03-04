import LabelStyled from "../atoms/LabelStyled";
import InputStyled from "../atoms/InputStyled";
function WrapperInput({label,type, typeStyle, placeholder,value}) {
    return ( 
        <>
        <div>
            <LabelStyled label={label} danger={false}/>
            <InputStyled value={value} type={type} typeStyle={typeStyle} placeholder={placeholder}/>
        </div>
        </>
     );
}

export default WrapperInput;