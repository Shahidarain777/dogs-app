import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Pressable,
    Button,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  
  import PrimaryButton from "../common/components/PrimaryButton";
  import { Link } from "expo-router";
  import FontAwesome from "react-native-vector-icons/FontAwesome";
  import colors from "../res/colors";
import PrimaryButtonSquare from "../common/components/PrimaryButtonSquare";
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  export default function Registration() {
    return (
      
        const [count, setCount] = useState(0);
 
      <View style={{ flex: 1, }}>
        
        <ScrollView contentContainerStyle={styles.container}>
        <Link href={{ pathname: "AddOwner" }} asChild>
          <Pressable>
            <Text
              style={{
                textAlign:"right",
                fontSize: 15,
                fontFamily: "Unbounded",
                marginTop:50,
                marginLeft:250,
              }}
            >
              Back
            </Text>
          </Pressable>
        </Link>

        <Image
        style={{marginTop:10 ,height:50,width:60,marginRight:250, transform: [{ rotate: '-50deg' }]}}
        source={require("../res/images/pngs/foot.png")}
      />

        
      
        <Text
          style={{
            fontSize: 18,
            color: colors["brown.900"],
            fontWeight: "bold",
            marginTop:35,
           marginRight:40,
        
          }}
        >
           What breed is your dog?
        </Text>

        <Text
          style={{
            fontSize: 13,
            color: colors["brown.200"],
            fontWeight: "bold",
            marginTop:15,
            marginLeft:10
        
          }}
        >
        Get individual tips based on the dog's breed
        </Text>
       
       
        <TextInput
          style={{
            fontSize: 15,
            color: colors["brown.900"],
            fontWeight: "600",
            textAlign: "center",
            marginTop:90,
          }}
          placeholder="Password"
        >
        </TextInput>

        

        <View style={{flexDirection:'row',marginTop:30}}>
       <TouchableOpacity >
        <Text 
          style={{
            fontSize: 14,
            color: colors["brown.900"],
            fontWeight: "600",
            textAlign: "center",
            marginHorizontal:22,
            height:50,
            paddingTop:13,
            width:120,
           borderRadius:17,
            borderWidth:1,
          }}
        >
        Mixed Breed
        </Text>
      </TouchableOpacity>
 
    
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 14,
            color: colors["brown.900"],
            fontWeight: "600",
            textAlign: "center",
            marginTop:0,
            height:50,
            paddingTop:13,
            width:120,
           borderRadius:17,
            borderWidth:1,
          }}
        >
        Pure Breed
        </Text>
      </TouchableOpacity>
      </View>
       
      
      <View style={{flexDirection:'row',marginTop:30}}>
       <TouchableOpacity>
        <Text
          style={{
            fontSize: 14,
            color: colors["brown.900"],
            fontWeight: "600",
            textAlign: "center",
            marginHorizontal:12,
            height:50,
            paddingTop:13,
            width:150,
           borderRadius:17,
            borderWidth:1,
          }}
        >
        Champion Breed
        </Text>
      </TouchableOpacity>
 
    
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 14,
            color: colors["brown.900"],
            fontWeight: "600",
            textAlign: "center",
            marginTop:0,
            height:50,
            paddingTop:13,
            width:120,
           borderRadius:17,
            borderWidth:1,
            backgroundColor: colors["yellow.500"],
          }}
        >
        Indie Breed
        </Text>
      </TouchableOpacity>
      </View>
       
       

       
      
    
      <View style={{height:100}}></View>
          <Link href={{ pathname: "" }} asChild>
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
  