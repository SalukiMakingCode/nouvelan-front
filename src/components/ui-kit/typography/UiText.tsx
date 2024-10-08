import React, {ReactNode} from 'react';
import {Text, TextProps} from 'react-native';

import {FlexShortcutProps} from '../layout/flex';
import {useTemplate} from "../../../hooks/useTemplate";

const fontMapping = {
    AntonRegular: 'Anton_400Regular',
};

type ComponentProps = TextProps & FlexShortcutProps;

interface Props extends ComponentProps {
    type?: 'AntonRegular',
    w?: number | string,
    fontSize?: number,
    color?: string,
    textAlign?: 'left' | 'right' | 'justify' | 'center',
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
    mr?: number,
    ml?: number,
    mt?: number,
    mb?: number,
    pr?: number,
    pl?: number,
    pt?: number,
    pb?: number,
    children: ReactNode | string,
    template?: string,
}

export default (props: Props) => {
    const template = useTemplate(props.template || 'default');
    return (
        <Text
            {...props}
            style={{
                width: props.w,
                fontFamily: props.type
                    ? fontMapping[props.type]
                    : fontMapping.AntonRegular,
                fontSize: props.fontSize || template.fontSize || 12,
                color: props.color || template.color || 'black',
                textTransform: props.textTransform ?? 'none',
                marginTop: props.mt || template.marginTop || 0,
                marginBottom: props.mb || template.marginBottom || 0,
                marginLeft: props.ml || template.marginLeft || 0,
                marginRight: props.mr || template.marginRight || 0,
                paddingTop: props.pt ?? undefined,
                paddingBottom: props.pb ?? undefined,
                paddingLeft: props.pl ?? undefined,
                paddingRight: props.pr ?? undefined,
                textAlign: props.textAlign || template.textAlign || 'auto',
                alignSelf: props.alignSelf,
                alignItems: props.alignItems,
                justifyContent: props.justifyContent,
                ...(props.style ? (props.style as object) : {}),
            } as any}
        >
            {props.children}
        </Text>
    );
};
