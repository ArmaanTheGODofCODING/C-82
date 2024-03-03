import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();


let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class CreatePost extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false,
        previewImage: "image_1",
        dropdownHeight: 40,
      };
    }

    render(){
      if(!this.state.fontsLoaded){
        return<AppLoading/>;

      }else{
        let preview_images = {
          "image_1":require("../assets/image_1.jpg"),
          "image_2":require("../assets/image_2.jpg"),
          "image_3":require("../assets/image_3.jpg"),
          "image_4":require("../assets/image_4.jpg"),
          "image_5":require("../assets/image_5.jpg"),
          "image_6":require("../assets/image_6.jpg"),
          "image_7":require("../assets/image_7.jpg")

        }

        
      }
    }
  }
  

  return(
    <View style = {styles.container}>
      <SafeAreaView style ={styles.droidSafeArea}/>
      <View style = {styles.appTitle}>
        <View style = {styles.appIcon}>
          <Image
          source={require("../assets/logo_png")}
            style ={styles.iconImage}>
          </Image>
        </View>
        <View style = {styles.appTitleTextContainer}>
        <Text style = {styles.appTitleText}>New Post</Text>
        </View>
      </View>
      <View 
    </View>
      )
  
