import * as React from 'react';
import { Text, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native'
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";
const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz0FMWb6ivu21mepg7ovwiE_3X438-G0PhCw&usqp=CAU" };
export default class ChooseSubj extends React.Component{
  constructor(){
    super();
    this.state = {
      grade : "",
      dropdownHeight : 40
    }
  }
  render(){
return(
<View>
<ImageBackground source={image} resizeMode="cover" style={{ flex: 1,
    justifyContent: "center"}}>
<Text style = {{marginTop : 100, fontSize : 20}}>Choose:</Text>
<Text style = {{ fontSize : 20}}>----------</Text>

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

              <View style={{ height: RFValue(this.state.dropdownHeight), marginTop : 50 }}>
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
              <Text style = {{marginTop : 50, fontSize: 20}}> Results: </Text>
              <TouchableOpacity style = {{ marginTop : 30, backgroundColor: 'white', height : 80, width : 80, borderRadius: 10}}>
              <Text style ={{ alignSelf: "center", marginTop : 30, fontSize : 26, color: 'blue'}}> Em </Text>
              </TouchableOpacity>

              
              <TouchableOpacity style = {{ marginTop : -80,marginLeft: 180, backgroundColor: 'white', height : 80, width : 80, borderRadius: 10}}>
              <Text style ={{ alignSelf: "center", marginTop : 30, fontSize : 26, color: 'green'}}> KhAc </Text>
              </TouchableOpacity>
            <TouchableOpacity style = {{marginTop: 30, backgroundColor: 'white', height : 80, width : 80, borderRadius: 10}}>
            <Text style = {{ marginTop: 35}}> Add more </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 40}}>
            </TouchableOpacity>
</ImageBackground>
</View>



)

  }
}