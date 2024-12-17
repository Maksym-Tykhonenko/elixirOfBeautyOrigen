import React, { useState } from 'react';
import { View } from "react-native"
import Home from "../components/Home"
import MenuPanel from "../components/MenuPanel";
import WelcomeModal from "../components/WelcomeModal";

const HomeScreen = () => {

     const [modalVisible, setModalVisible] = useState(true);
    
        const handleWelcomeVisible = () => {
            setModalVisible(!modalVisible);
        };
    return (
        <View style={styles.container}>
             <WelcomeModal visible={modalVisible} onClose={handleWelcomeVisible}/>
            <Home />
            <View style={styles.menu}>
                <MenuPanel />
            </View>
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    },
    menu: {
        position: 'absolute',
        width: "100%",
        bottom: 0
    }
}

export default HomeScreen;