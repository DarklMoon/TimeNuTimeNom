import React from "react";

import { StyleSheetm, Text, TextInput, View } from "react-native";

const InputField = ({value, setValue, Placeholder}) => {
    return(
        <View>
            <TextInput placeholder={Placeholder} value={value} onChange={setValue}></TextInput>
        </View>
    )
}

export default InputField;
