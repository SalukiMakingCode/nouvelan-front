import {router} from 'expo-router';
import React, {ReactNode} from 'react';
import PressableHStack from '../layout/flex/PressableHStack';
import UiText from '../typography/UiText';
import {useTemplate} from "../../../hooks/useTemplate";

interface Props {
    text?: string,
    children?: ReactNode,
    to?: string,
    mt?: number,
    mb?: number,
    mr?: number,
    ml?: number,
    onPress?: () => void,
    textColor?: string,
    bgColor?: string,
    borderColor?: string,
    borderWidth?: number,
    style?: any,
    _textStyle?: any,
    disabled?: boolean,
}

const UiButton = (props: Props) => {
    const template = useTemplate('defaultButton');

    return (
        <PressableHStack
            onPress={() => {
                if (props.disabled) {
                    return;
                }

                if (props.to && props.to !== '') {
                    router.push(props.to);

                    return;
                }

                props.onPress?.();
            }}
            alignSelf="center"
            padding={template.padding || 10}
            pl={20}
            pr={20}
            mt={props.mt || 20}
            mb={props.mb || 0}
            mr={props.mr || 0}
            ml={props.ml || 0}
            style={{
                borderColor: props.disabled ? 'grey' : props.borderColor || template.borderColor,
                borderWidth: props.borderWidth || 0,
                backgroundColor: props.disabled ? 'grey' : props.bgColor || template.backgroundColor || '#F15A5B',
                borderRadius: 30,
                ...props.style,
            }}
        >
            {props.children === undefined && props.text !== undefined &&
                <UiText color={props.textColor || template.color || 'white'} fontSize={15}
                        style={props._textStyle}>{props.text}</UiText>}
            {props.children !== undefined && props.text === undefined && props.children}
        </PressableHStack>
    );
};

export default UiButton;
