import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default function IngredientHistory(){
    return (
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Added Ingredients</Text>

                <View style={styles.items}>
                    <Added text = {'ingredient1'}/>
                    <Added text = {'ingredient2'}/>
                    <Added text = {'ingredient3'}/>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    comntainer:{
        flex = 1,
        backgroundColor: '#E8EAED',
    },
    taskWrapper:{
        paddingTop: 80,
        paddingHorizontal: 20,
        
    }
})