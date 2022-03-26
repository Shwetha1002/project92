import * as React from 'react';
import { Text, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native'
import App from "../navigation/stacknavigation"
const image = { uri: "https://lovelytab.com/wp-content/uploads/2019/01/Tumblr-Aesthetic-Wallpapers-Free.jpg" };
import ChooseSubj from "./chooseSubj"
export default class HomeScreen extends React.Component{
  constructor(){
    super();
    this.state = {

      text : '',
      textt : ''
    }
  }

  locate = ()=>{
    this.props.navigation.navigate('ChooseSubj')
    }

render(){
return(
  <View style={{ flex: 1}}>
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1,
    justifyContent: "center"}}>
    <View>
<Text style = {{textAlign : 'center', marginTop : 20, fontSize : 30}}>Welcome</Text>

<View style >
<Text style = {{ fontSize: 20, marginTop : 50}}>Username :</Text>
<TextInput style = {{borderColor: 'black', borderWidth : 2 , marginTop : 20, backgroundColor : 'white', height : 40}}onChangeText = {(text) => { this.setState({ text : text});
}}

value = {this.state.text}
placeholder = "type here"
placeholderTextColor = "#5e5959"/>


<Text style = {{fontSize : 20, marginTop : 30}}>Password:</Text>
<TextInput style = {{borderColor: 'black', borderWidth : 2, marginTop : 20, backgroundColor : 'white', height : 40}}onChangeText = {(text) => { this.setState({ textt : text});
}}
value = {this.state.textt}
placeholder = "type here"
placeholderTextColor = "#5e5959"/>
<View>
<TouchableOpacity style = {{ alignSelf : 'center', marginTop : 100, backgroundColor : 'orange', borderRadius : 20, width : 100, height : 50}} onPress= {this.locate}>
<Text style = {{ alignSelf : 'center', marginTop : 12, fontSize : 20}}>Sign In</Text>
</TouchableOpacity>
<Text style = {{ alignSelf : 'center',  marginTop : 12, fontSize : 20}}> OR </Text>


<TouchableOpacity style = {{ alignSelf : 'center', marginTop : 10, backgroundColor : 'orange', borderRadius : 20, width : 100, height : 50}}>
<Text style = {{ alignSelf : 'center', marginTop : 12, fontSize : 20}}>Log in</Text>
</TouchableOpacity>
</View>
</View>
</View>
    </ImageBackground>

  
</View>



)

}

}