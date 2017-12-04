import React, { Component } from 'react';
import { StyleSheet,View, Text,Image,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import t from 'tcomb-form-native';

var Form = t.form.Form;
var House = t.enums({
  home: 'บ้านเดี่ยว',
  condo: 'คอนโด',
  build: 'ตึก'
});

var options = {};


export default class test extends Component {
    constructor(props){
        super(props)
         this.state = {styleIndex: 0};
    }

 render() {
     
     const _onPressButton = () => {
         this.setState({styleIndex:1});
     }
     
    
    return (
    <View style={styles.container} >
        <Text style={styles.head}>เลือกปัญหาแอร์</Text>
       
       
            <Button onPress={_onPressButton} style={this.state.styleIndex === 0? styles.btn : styles.btnClick} title="แอร์ไม่เย็น"/>
            <Button onPress={ _onPressButton} style={this.state.styleIndex === 0? styles.btn : styles.btnClick}title="แอร์มีน้ำหยด"/>
            <Button onPress={_onPressButton} style={this.state.styleIndex === 0? styles.btn : styles.btnClick}title="แอร์เปิดไม่ติด"/>
            <Button onPress={ _onPressButton} style={this.state.styleIndex === 0? styles.btn : styles.btnClick}title="แอร์มีเสียงดัง"/>
            <Button onPress={_onPressButton} style={this.state.styleIndex === 0? styles.btn : styles.btnClick}title="compressor ไม่ทำงาน "/>
            <Button onPress={ _onPressButton} style={this.state.styleIndex === 0? styles.btn : styles.btnClick}title="อื่นๆ"/>
        
        <Text style={styles.head}>เลือกสถานที่</Text>
         <Form
          ref="form"
          type={House}
          options={options}
        />
    </View>
    )
}
}

const styles = StyleSheet.create({
 container: {
    backgroundColor:"#ffffff",
    flex:1,
    flexDirection:'column',
    borderColor: '#ffffff',
    borderWidth:5,
  },
  head:{
    fontSize:20,
    marginLeft:50
  },
  image:{
      width:80
  },
  buttonContainer:{
    flexDirection:'row',
  },
  btn:{
    backgroundColor : '#000000'
  },
  btnClick:{
      backgroundColor : '#ffffff'
  }

})