import {FormControl,FormLabel,Input} from "@chakra-ui/react";

function FormInput({label, type="text", onChange, value }){
    return(
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input type={type} value={value} onChange={onChange} width="100%" />
        </FormControl>
    );
}

export default FormInput;