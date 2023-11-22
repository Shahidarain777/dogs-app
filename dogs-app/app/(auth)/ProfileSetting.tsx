import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Pressable,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  
  import PrimaryButton from "../common/components/PrimaryButton";
  import { Link } from "expo-router";
  import FontAwesome from "react-native-vector-icons/FontAwesome";
  import colors from "../res/colors";
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  export default function Registration() {
    return (
      
      <View style={{ flex: 1, }}>
        
        <ScrollView contentContainerStyle={styles.container}>
          
        <View style={{ flexDirection:'row', marginTop:20,}}>
        <View style={{  backgroundColor: colors["yellow.500"],height:45,width:45,borderWidth:2,borderRadius:30,paddingTop:5,alignItems:'center'}}>
        <Image
        style={{marginTop:0 ,height:30,width:30,}}
        source={require("../res/images/pngs/black-foot.png")}
      />
      </View>
        <Text
          style={{
            fontSize: 30,
            color: colors["brown.900"],
            fontWeight: "bold",
            textAlign:'center',
           
            
          }}
        >
        Profile Settings
        </Text>
        </View>
        

       
     
          
  
        
          <Link href={{ pathname: "Login" }} asChild>
            <Pressable>
              <PrimaryButton title="Next" />
            </Pressable>
          </Link>
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      backgroundColor: colors["yellow.200"],
      flex: 1,
      alignItems: "center",
    },
  });
  