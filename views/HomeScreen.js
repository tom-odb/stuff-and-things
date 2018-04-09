import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

import { palette } from '../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    handleFloatingActionPressed() {
        console.log('pressed');
    }

    render() {
        const floatingActions = [{
            name: 'newItem',
            icon: <Image source={require('../icons/camera_alt.png')} style={{
                height: 32,
                width: 32,
            }} />,
        }];

        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>

                <FloatingAction
                    actions={floatingActions}
                    overrideWithAction={true}
                    color={palette.primary}
                    position="center"
                    onPressItem={() => this.handleFloatingActionPressed()}
                />
            </View>
        );
    }
}