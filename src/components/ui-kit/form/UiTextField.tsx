import React, {useEffect, useState} from 'react';
import {KeyboardTypeOptions, TextInput, View} from 'react-native';
import UiText from '../typography/UiText';
import {useTemplate} from "../../../hooks/useTemplate";

interface Props {
    color?: string,
    label?: string,
    labelColor?: string,
    borderColor?: string,
    defaultValue?: string,
    value?: string,
    secureTextEntry?: boolean,
    required?: boolean,
    placeholder?: string,
    placeholderColor?: string,
    multiline?: boolean,
    numberOfLines?: number,
    keyboardType?: KeyboardTypeOptions,
    onChange?: (value: string) => void,
    inputStyle?: any,
    mr?: number,
    ml?: number,
    mt?: number,
    mb?: number,
    template?: string,
}

const UiTextField = (props: Props) => {
    const [value, setValue] = useState<undefined | string>(props.value);

    const template = useTemplate(props.template || 'default');

    useEffect(() => {
        if (props.value !== value) {
            setValue(props.value);
        }
    }, [props.value]);

    return (
        <View
            style={{
                marginTop: props.mt || template.marginTop || undefined,
                marginBottom: props.mb || template.marginBottom || undefined,
                marginLeft: props.ml || template.marginLeft || undefined,
                marginRight: props.mr || template.marginRight || undefined,
            }}
        >
            {
                props.label && (
                    <UiText textAlign="left" color={props.labelColor || template.labelColor || 'black'} mb={2} w="100%"
                            fontSize={15}>
                        {props.label}
                        {
                            props.required && (
                                <>
                                    {' '}
                                    <UiText color="red" fontSize={15}>*</UiText>
                                </>
                            )
                        }
                    </UiText>
                )
            }
            <TextInput
                keyboardType={props.keyboardType}
                style={{
                    width: '100%',
                    borderColor: props.borderColor || template.borderColor || 'black',
                    borderWidth: 1,
                    borderRadius: 5,
                    textAlignVertical: props.multiline ? 'top' : 'center',
                    padding: 5,
                    ...(props.inputStyle ? {...props.inputStyle} : {}),
                    color: props.color || template.color || 'black',
                }}
                secureTextEntry={props.secureTextEntry ?? false}
                numberOfLines={props.numberOfLines}
                onChangeText={(text) => {
                    setValue(text);
                    props.onChange?.(text);
                }}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderColor || template.placeholderColor || 'black'}
                defaultValue={props.defaultValue}
                multiline={props.multiline}
                value={value}
            />
        </View>
    );
};

export default UiTextField;
