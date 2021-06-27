import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Button } from 'react-native'
import COLORS from '../../constants/colors'
import { MyState } from '../../utils/createReducer'
import { NAVIGATORS } from '../../constants/navigators';

export interface LoginProps extends MyState {
    loginResult?: LoginResponseType
    error: any
    route: any
    navigation: any
    login?: (email: string, password: string) => void
}

export type LoginResponseType = {
    error: string;
    success: boolean;
    user: UserType
}

export type UserType = {
    _id: string;
    email: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}


const Login = (props: LoginProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onPressBottom = () => {
        props.navigation.navigate(NAVIGATORS.SIGN_UP.name)
    }
    useEffect(() => {
        if (props.loginResult) {
            const result = props.loginResult
            if (result.success) {
                props.navigation.navigate(NAVIGATORS.HISTORY.name, {
                    userData: result.user
                })
            }
        }
    }, [props.loginResult])
    return (
        <View style={styles.parent}>
            <View style={styles.toolbar} />
            <Text style={styles.title}>Sign in</Text>
            <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(text: string) => {
                    setEmail(text)
                }}
                keyboardType={'email-address'}
                placeholder={"Email"}
                value={email}
                style={styles.input}
            />
            <TextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(text: string) => {
                    setPassword(text)
                }}
                secureTextEntry
                placeholder={"Password"}
                value={password}
                style={styles.input}
            />
            <View style={styles.buttonLayout}>
                <Button
                    title={"LOGIN"}
                    color={COLORS.blue}
                    accessibilityLabel="Learn more about this purple button"
                    onPress={() => {
                        if (props.login) props.login(email, password)
                    }} />
            </View>
            <View style={styles.space} />
            <TouchableOpacity
                onPress={onPressBottom}
                style={styles.bottomLayout}
            >
                <Text style={styles.bottomText}>
                    Don't have an account? Sign Up
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1
    },
    space: {
        flex: 1
    },
    bottomLayout: {
        alignContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20
    },
    bottomText: {
        color: COLORS.blue,
        fontSize: 18,
        fontWeight: '300'
    },
    buttonLayout: {
        marginHorizontal: 80,
        marginTop: 40
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingStart: 10,
        fontSize: 20
    },
    toolbar: {
        backgroundColor: COLORS.colorPrimary,
        height: 56,
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    title: {
        alignSelf: 'auto',
        fontSize: 36,
        fontWeight: '300',
        marginStart: 40,
        marginVertical: 20
    }
});

export default Login