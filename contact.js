import React, { Component } from 'react';
import { StyleSheet,View, Text,Image,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import t from 'tcomb-form-native';

var Form = t.form.Form;

var Person = t.struct({
  tel: t.String,
  date : t.String,
  Time : t.String              
});

var options = { auto: 'placeholders'};


export default class contact extends Component {
    constructor(props){
        super(props)
        
    }

 render() {
     
    return (
    <View style={styles.container} >
        {/*<Text style={styles.head}>เบอร์ติดต่อ</Text>*/}
         <Form
          ref="form"
          type={Person}
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
    alignSelf:'center',
  },
  image:{
      width:80
  },
  buttonContainer:{
    flexDirection:'row',
  }

})