import React, { useCallback, useEffect, useState } from 'react'
import { Image, StyleSheet, TextInput, View, Text, FlatList, Button, TouchableOpacity } from 'react-native'
import COLORS from '../../constants/colors'
import { FONT_FAMILIES } from '../../constants/fonts'
import { MyState } from '../../utils/createReducer'
import { NAVIGATORS } from '../../constants/navigators';
import { UserType } from '../login/Login'

interface Item {
    index: number
    item: string
}
export interface HistoryProps extends MyState {
    getBrushHistoryResult?: BrushRecord[]
    error: any
    route: any
    navigation: any
    getBrushHistory?: () => void
}

export type BrushRecord = {
    date: string;
    interrupted: string;
    arch: string;
}

const History = (props: HistoryProps) => {

    const [lines, setLines] = useState<string[]>([])
    const [user, setUser] = useState<UserType>()
    useEffect(() => {
        const userInfo: UserType = props.route.params.userData
        setUser(userInfo)
        if (props.getBrushHistory) props.getBrushHistory()
    }, [])

    useEffect(() => {
        if (props.getBrushHistoryResult) {
            let temp: string[] = []
            props.getBrushHistoryResult.map((brushRecord, index) => {
                temp = [...temp, user?.name + ' brushed ' + brushRecord.arch + ' teetch at ' + brushRecord.date]
            })
            setLines(temp)
        }
    }, [props.getBrushHistoryResult])

    const onPressLogout = () => {
        props.navigation.navigate(NAVIGATORS.LOGIN.name)
    }

    const renderEmptyContainer = () => {
        return (
            <View style={styles.emptyMessageContainer}>
                <Text style={styles.emptyMessage}>No results found</Text>
            </View>
        )
    }

    const renderListItem = (item: Item) => {
        return (
            <Text style={styles.item}>{item.item}</Text>
        )
    }
    return (
        <View style={styles.parent}>
            <View style={styles.toolbar} />
            <Text style={styles.title}>Home</Text>
            <View style={styles.space} >
                <FlatList 
                    style={[styles.listContainer]}
                    data={lines}
                    renderItem={renderListItem}
                    ListEmptyComponent={() => renderEmptyContainer()}/>
            </View>
            <View style={styles.buttonLayout}>
                <Button
                    title={"LOG OUT"}
                    color={COLORS.blue}
                    accessibilityLabel="Learn more about this purple button"
                    onPress={onPressLogout} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    emptyMessageContainer: {
        textAlign: 'center',
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    listContainer: {

    },
    emptyMessage: {
        flex: 1,
        paddingVertical: 50,
        height: '100%',
        color: COLORS.black,
    },
    parent: {
        flex: 1
    },
    space: {
        flex: 1,
        marginHorizontal: 15
    },
    buttonLayout: {
        marginHorizontal: 80,
        marginTop: 40,
        marginBottom: 20
    },
    toolbar: {
        backgroundColor: COLORS.colorPrimary,
        height: 56,
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    item: {
        fontSize: 13,
        alignSelf: 'auto',
        color: COLORS.black,
    },
    title: {
        alignSelf: 'auto',
        fontSize: 36,
        fontWeight: '300',
        marginStart: 40,
        marginVertical: 20
    }
});

export default History