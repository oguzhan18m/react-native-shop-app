import React from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';

const EditProductScreen = () => {
    return (
        <ScrollView>
            <View>

            <View style={styles.formControl}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Image URL</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Price</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>Description</Text>
                <TextInput style={styles.input} />
            </View>
            
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({

});

export default EditProductScreen;
