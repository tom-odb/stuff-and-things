import React, { Component } from 'react';
import { Text, View, FlatList, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import { DrawerItems } from 'react-navigation';

import { palette } from '../styles';

export default class Drawer extends Component {

    handleMenuItemPressed(item) {
        this.props.navigation.navigate(item.route);
    }

    render() {
        const { routes } = this.props;

        const menuItems = Object.keys(routes).reduce((items, route) => [
            ...items,
            {
                ...routes[route],
                route,
            },
        ], []);

        return (
            <ScrollView>
                <SafeAreaView style={{
                    flex: 1,
                }} forceInset={{
                    top: 'always',
                    horizontal: 'never',
                }}>
                    <View style={{
                        backgroundColor: palette.secondary,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        height: 200,
                    }}>
                        <Text style={{
                            color: '#FFF',
                            fontSize: 24,
                            padding: 24,
                        }}>Stuff and Things</Text>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <FlatList data={menuItems} renderItem={({ item, index }) => (
                            <TouchableHighlight
                                key={index}
                                onPress={() => this.handleMenuItemPressed(item)}>
                                <View style={{
                                    backgroundColor: '#FFF',
                                }}>
                                    <Text style={{
                                        padding: 24,
                                    }}>{item.screen.navigationOptions.title}</Text>
                                </View>
                            </TouchableHighlight>
                        )} />
                    </View>
                </SafeAreaView>
            </ScrollView>
        );
    }
};