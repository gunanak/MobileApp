import React, { Component } from 'react';
import { StyleSheet,View, Text,Image,Button,TouchableOpacity,TouchableHighlight, } from 'react-native';
import { Actions } from 'react-native-router-flux';


var  buttons = ['PayPal', 'Visa', 'MasterCard', 'BitCoin', 'CitiBank', 'AmericanExpress','Cash'];
var  buttonClick = [];

export default class cash extends Component {
    constructor(props){
        super(props)
        this.state={ styleIndex0:0,styleIndex1:0,styleIndex2:0,styleIndex3:0,styleIndex4:0,styleIndex5:0,styleIndex6:0}
    }


  onButtonPress(id){ 
      var button = buttons[id];
      buttonClick.push(button);
      console.log(buttonClick);
      switch(id){
        case 0 : this.setState({styleIndex0: 1}); break;
        case 1 : this.setState({styleIndex1: 1}); break;
        case 2 : this.setState({styleIndex2: 1}); break;
        case 3 : this.setState({styleIndex3: 1}); break;
        case 4 : this.setState({styleIndex4: 1}); break;
        case 5 : this.setState({styleIndex5: 1}); break;
        case 6 : this.setState({styleIndex6: 1}); break;
        default: this.setState({styleIndex6: 1}); break;

      }
  }  

 render() {
     
    return (
    <View style={styles.container} >
       <Text style={styles.head}>เลือกช่องทางชำระเงิน</Text>

       <View style={styles.buttonContainer}>
        <View style={styles.buttonUp}>
         <View style={styles.buttonUpIn}>
            <TouchableOpacity onPress={ () => this.onButtonPress(0) } style={this.state.styleIndex0 === 0 ? styles.buttonStyle : styles.buttonStyleClicked}>
            {/*<Text style={{ color: 'black', fontSize:22 }} >Click Me 1</Text>*/}
             <Image
         style={{width: 50, height: 50}}
          source={require('./img/Paypal.png')}
        />
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => this.onButtonPress(1) } style={this.state.styleIndex1 === 0 ? styles.buttonStyle : styles.buttonStyleClicked}>
            {/*<Text style={{ color: 'black', fontSize:22 }} >Click Me 4</Text>*/}
                <Image
         style={{width: 50, height: 50}}
          source={require('./img/Visa.png')}
        />
            </TouchableOpacity>
         
            <TouchableOpacity onPress={ () => this.onButtonPress(2) } style={this.state.styleIndex2 === 0 ? styles.buttonStyle : styles.buttonStyleClicked}>
            {/*<Text style={{ color: 'black', fontSize:22 }} >Click Me 5</Text>*/}
                <Image
         style={{width: 50, height: 50}}
          source={require('./img/MasterCard.png')}
        />
            </TouchableOpacity>
         </View>
         <View style={styles.buttonUpIn}>
         <TouchableOpacity onPress={ () => this.onButtonPress(3) } style={this.state.styleIndex3 === 0 ? styles.buttonStyle : styles.buttonStyleClicked}>
          {/*<Text style={{ color: 'black', fontSize:22 }} >Click Me 3</Text>*/}
                <Image
         style={{width: 50, height: 50}}
          source={require('./img/bitcoin.png')}
        />
         </TouchableOpacity>
         <TouchableOpacity onPress={ () => this.onButtonPress(4) } style={this.state.styleIndex4 === 0 ? styles.buttonStyle : styles.buttonStyleClicked}>
          {/*<Text style={{ color: 'black', fontSize:22 }} >Click Me 6</Text>*/}
                <Image
         style={{width: 50, height: 50}}
          source={require('./img/citibank.png')}
        />
         </TouchableOpacity>
         <TouchableOpacity onPress={ () => this.onButtonPress(5) } style={this.state.styleIndex5 === 0 ? styles.buttonStyle : styles.buttonStyleClicked}>
          {/*<Text style={{ color: 'black', fontSize:22 }} >Click Me 7</Text>*/}
            <Image
         style={{width: 50, height: 50}}
          source={require('./img/AmericanExpress.png')}
        />
        
         </TouchableOpacity>
         </View>
        </View>

      <TouchableOpacity onPress={ () => this.onButtonPress(6) } style={this.state.styleIndex6 === 0 ? styles.buttonStyle : styles.buttonStyleClicked}>
          {/*<Text style={{ color: 'black', fontSize:22 }} >Click Me 2</Text>*/}
         <Image
         style={{width: 50, height: 50}}
          source={require('./img/cash.png')}
        />
        </TouchableOpacity>
    
        </View>

    


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
    color:'black',
    alignSelf:'center',

  },
  buttonContainer:{
    flex : 1,
    flexDirection:'column',
  },
  buttonUp:{
    flex : 1,
    flexDirection:'column',
    borderColor: '#757575',
    borderWidth:2
  },
  buttonUpIn:{
    flex:1,
    flexDirection:'row',
  },
  buttonStyle:{
      flex:1,
      backgroundColor:'#E0E0E0',
      flexDirection: 'row', 
      alignItems:'center', 
      justifyContent: 'center'
  },
  buttonStyleClicked:{
      flex:1,
      backgroundColor:'#FF9800',
      flexDirection: 'row', 
      alignItems:'center', 
      justifyContent: 'center'
  }

})