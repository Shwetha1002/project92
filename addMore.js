import * as React from 'react';
import { Text, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native'
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";
const image = { uri: "https://png.pngtree.com/thumb_back/fh260/background/20210823/pngtree-beautiful-aesthetic-wallpapers-image_768352.jpg" };
export default class AddMore extends React.Component{
  constructor(){
    super();
    this.state = {

      textt : '',
      texttt: ''
    }
  }
render(){
return(
<ImageBackground source={image} resizeMode="cover" style={{
    justifyContent: "center"}}>
<Text style = {{marginTop : 30, fontSize: 25}}> Add Resource: </Text>
<Text style = {{marginTop: 20, fontSize: 20}}> name: </Text>
<TextInput style = {{borderColor: 'black', borderWidth : 2, marginTop : 10, backgroundColor : 'white', height : 40}}onChangeText = {(text) => { this.setState({ textt : text});
}}
value = {this.state.textt}
placeholder = "type here"
placeholderTextColor = "#5e5959"/>

<Text style = {{marginTop: 20, fontSize: 20}}> url: </Text>
<TextInput style = {{borderColor: 'black', borderWidth : 2, marginTop : 10, backgroundColor : 'white', height : 40}}onChangeText = {(text) => { this.setState({ texttt : text});
}}
value = {this.state.texttt}
placeholder = "type here"
placeholderTextColor = "#5e5959"/>

<Text style = {{ marginTop: 30, fontSize: 24}}> Category </Text>
<Text style = {{fontSize: 15, marginTop: 10}}> Class: </Text>
<View style={{ height: RFValue(this.state.dropdownHeight) }}>
<DropDownPicker
                  items={[
                    { label: "Class 9", value: "class9" },
                    { label: "Class 10", value: "class10" },
                    { label: "Class 11", value: "class11" },
                    { label: "class 12", value: "class12" }
                   
                  ]}
                  defaultValue={"Class9"}
                  containerStyle={{
                    height: 40,
                    borderRadius: RFValue(20),
                    marginBottom: RFValue(20),
                    marginHorizontal: RFValue(10)
                  }}
                  
                  onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 40 });
                  }}
                  style={{ backgroundColor: "white" }}
                  itemStyle={{
                    justifyContent: "flex-start"
                  }}
                  onChangeItem={item =>
                    this.setState({
                      grade: item.value
                    })
                  }
                />
              </View>
<Text style = {{fontSize: 15, marginTop: 10}}>Subject: </Text>
              <View style={{ height: RFValue(this.state.dropdownHeight), marginTop : 10 }}>

<DropDownPicker
                  items={[
                    { label: "Chemistry", value: "Chemistry" },
                    { label: "Physics", value: "Physics" },
                    { label: "Math", value: "Math" },
                    { label: "Biology", value: "Biology" }
                   
                  ]}
                  defaultValue={"Class9"}
                  containerStyle={{
                    height: 40,
                    borderRadius: RFValue(20),
                    marginBottom: RFValue(20),
                    marginHorizontal: RFValue(10)
                  }}
                  
                  onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 40 });
                  }}
                  style={{ backgroundColor: "white" }}
                  itemStyle={{
                    justifyContent: "flex-start"
                  }}
                  onChangeItem={item =>
                    this.setState({
                      grade: item.value
                    })
                  }
                />
              </View>
              

           
              <TouchableOpacity style = {{width: 80, height: 40, borderRadius: 10, alignSelf: "center", marginTop: 50, backgroundColor: 'orange'}}>
              <Text style = {{ alignSelf:  "center", fontSize: 20}}> Add </Text>
              </TouchableOpacity>
</ImageBackground>




























)



}



}