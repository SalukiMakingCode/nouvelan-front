import {useMemo} from "react";
import {KeyboardTypeOptions} from "react-native";

interface TemplateProps {
    labelColor?: string;
    borderColor?: string;
    placeholderColor?: string;
    keyboardType?: KeyboardTypeOptions;
    inputStyle?: any;
    color?: string;
    fontSize?: number;
    fontWeight?: string;
    backgroundColor?: string;
    padding?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    textAlign?: string;
}

const templates = {
    h1: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    h2: {
        color: 'white',
        fontSize: 20,
        marginBottom: 10,
    },
    h3: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
    },
    title1Big: {
        color: 'black',
        fontSize: 26,
        fontWeight: 'bold',
    },
    title1: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
    },
    title3: {
        color: 'black',
        fontSize: 18,
    },
    default: {
        labelColor: 'white',
        borderColor: 'white',
        placeholderColor: 'white',
        keyboardType: 'default',
        color: 'white',
        inputStyle: {
            fontSize: 16,
            padding: 10,
        },
    },
    defaultButton: {
        color: 'white',
        bac: '#F15A5B',
        borderColor: '#F15A5B',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 15,
        padding: 10,
        backgroundColor: '#F15A5B',
    },
    defaultInput: {
        color: 'black',
    },
    defaultInputNumber: {
        color: 'black',
        keyboardType: 'default',
    },
    email: {
        labelColor: '#fba28c',
        borderColor: '#fba28c',
        placeholderColor: '#fba28c',
        keyboardType: 'email-address',
        inputStyle: {
            fontSize: 18,
            padding: 12,
        },
    },
    password: {
        labelColor: '#9b59b6',
        borderColor: '#8e44ad',
        placeholderColor: '#9b59b6',
        keyboardType: 'default',
        inputStyle: {
            fontSize: 18,
            padding: 10,
        },
    },
    menuOption: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 11,
    },
    container: {
        backgroundColor: '#FFDAB9',
        borderWidth: 2,
        borderColor: '#333',
        width: '95%',
        alignSelf: 'center',
        marginTop: 10,
    }
};

export const useTemplate = (templateName?: string): TemplateProps => {
    const template = useMemo(() => {
        return templates[templateName] || templates.default;
    }, [templateName]);

    return template;
};