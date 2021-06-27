import React, { useCallback, useEffect, useState } from 'react'
import { Image, StyleSheet, TextInput, View, Text, FlatList, TouchableOpacity } from 'react-native'
import COLORS from '../../constants/colors'
import { FONT_FAMILIES } from '../../constants/fonts'
import { MyState } from '../../utils/createReducer'

export interface HistoryProps extends MyState{
    getBrushHistoryResult?: BrushRecord[]
    error: any
    route: any
    getBrushHistory?: (email: string, password: string) => void
}

export type BrushRecord = {
    date: string;
    interrupted: string;
    arch: string;
}

const History = (props: HistoryProps) => {
    return (
        <View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    imageStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        resizeMode: 'cover',
    },
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
    wrapper: {
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.darkGrey
    },
    wrapperInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    childView: {
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center'
    },
    userAvatar: {
        width: 60,
        height: 60,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    userName: {
        fontFamily: FONT_FAMILIES.OPEN_SANS,
        alignSelf: 'auto',
        fontSize: 13,
        fontWeight: '700',
        marginLeft: 10,
        flex: 1,
    },
    newRatingBar: {
        flex: 1,
        marginLeft: 10,
    },
});

export default History