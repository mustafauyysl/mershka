import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class CategoryContainer extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Men</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        margin: 15,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        justifyContent: 'center',
        padding: 25,
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Dosis'
    }
});

export default CategoryContainer;