import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View, Text, TouchableOpacity, TextInputProps, Button } from 'react-native'
import COLORS from '../../constants/colors'
import { MyState } from '../../utils/createReducer'
import { LoginResponseType } from '../login/Login'
import { NAVIGATORS } from '../../constants/navigators';

export interface SignupProps extends MyState {
    signupResult?: LoginResponseType
    error: any
    route: any
    navigation: any
    signup?: (name: string, email: string, password: string) => void
}

const UselessTextInput = (props: TextInputProps) => {
    return (
        <TextInput
            {...props}
            editable
        />
    );
}

const Signup = (props: SignupProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onPressBottom = () => {
        props.navigation.navigate(NAVIGATORS.LOGIN.name)
    }
    useEffect(() => {
        if (props.signupResult) {
            const result = props.signupResult
            if (result.success) {
                props.navigation.navigate(NAVIGATORS.HISTORY.name, {
                    userData: result.user
                })
            }
        }
    }, [props.signupResult])
    return (
        <View style={styles.parent}>
            <View style={styles.toolbar} />
            <Text style={styles.title}>Sign Up</Text>
            <UselessTextInput
                multiline={false}
                numberOfLines={1}
                onChangeText={(text: string) => {
                    setName(text)
                }}
                keyboardType={'name-phone-pad'}
                placeholder={"Name"}
                value={name}
                style={styles.input}
            />
            <UselessTextInput
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
            <UselessTextInput
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
                    title={"SIGN UP"}
                    color={COLORS.blue}
                    accessibilityLabel="Learn more about this purple button"
                    onPress={() => {
                        if (props.signup) props.signup(name, email, password)
                    }}
                />
            </View>
            <View style={styles.space} />
            <TouchableOpacity
                onPress={onPressBottom}
                style={styles.bottomLayout}>
                <Text style={styles.bottomText}>
                    Already have an account? Sign in
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

export default Signup