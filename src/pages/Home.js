import React, { useState, useEffect } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList
 } from 'react-native';
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [gretting, setGreeting] = useState('');

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if(currentHour < 12) {
            setGreeting('Bom dia');
        }else if(currentHour >= 12 && currentHour < 18) {
            setGreeting('Boa tarde');
        }else {
            setGreeting('Boa Noite');
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem vindo, Gregory
            </Text>

            <Text style={styles.greetings}>
                {gretting}
            </Text>
            
            <TextInput
                style={styles.input}
                placeholder="Nova Habilidade"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />
            
            <Button onPress={handleAddNewSkill} />

            <Text style={[styles.title, {marginVertical: 50}]}>
                Minhas Habilidades
            </Text>

            <FlatList
                data={mySkills}
                KeyExtractor={item => item}
                renderItem={({ item })  => (
                    <SkillCard skill={item}/>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    greetings: {
        color: '#FFF'
    }
});