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
        <Link href={{ pathname: "AddOwner" }} asChild>
          <Pressable>
            <Text
              style={{
                textAlign:"right",
                fontSize: 15,
                fontFamily: "Unbounded",
                marginTop:50,
                marginRight:230
              }}
            >
              Back
            </Text>
          </Pressable>
        </Link>

        <View style={{ flexDirection:'row', marginTop:20,}}>
        <View style={{  backgroundColor: colors["yellow.500"],height:45,width:45,borderWidth:2,borderRadius:30,paddingTop:5,alignItems:'center'}}>
        <Image
        style={{marginTop:0 ,height:30,width:30,}}
        source={require("../res/images/pngs/black-foot.png")}
      />
      </View>

      
        <Text
          style={{
            fontSize: 22,
            color: colors["brown.900"],
            fontWeight: "bold",
            textAlign:'center',
            marginTop:6,
            marginLeft:10
           
            
          }}
        >
        Profile Settings
        </Text>
        </View>
        
        <View
          style={{
            borderBottomColor: colors["brown.900"],
            borderBottomWidth: 2,
            marginVertical: 20,
            alignItems: "center",
            marginTop:0,
          }}
        >
          <Text
            style={{
              width: 360,
              fontSize: 14,
              padding: 10,
              color: colors["brown.900"],
              textAlign: "center",
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 12,
            color: colors["brown.900"],
            fontWeight: "600",
            marginRight:140,
          }}
        >
          Change Name
        </Text>

        <View
          style={{
            borderBottomColor: colors["brown.900"],
            borderBottomWidth: 1,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: 230,
              fontSize: 14,
              padding: 10,
              color: colors["brown.900"],
              textAlign: "center",
              marginTop:-30
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 12,
            color: colors["brown.900"],
            fontWeight: "600",
            marginRight:120,
            marginTop:40,
          }}
        >
          Change Dog Breed
        </Text>

        <View
          style={{
            borderBottomColor: colors["brown.900"],
            borderBottomWidth: 1,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: 230,
              fontSize: 14,
              padding: 10,
              color: colors["brown.900"],
              textAlign: "center",
              marginTop:-30
            }}
          />
        </View>

       
        <Text
          style={{
            fontSize: 12,
            color: colors["brown.900"],
            fontWeight: "600",
            marginRight:120,
            marginTop:40,
          }}
        >
          Change Dog Image
        </Text>

        <View
          style={{
            borderBottomColor: colors["brown.900"],
            borderBottomWidth: 1,
            marginVertical: 20,
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              width: 230,
              fontSize: 14,
              padding: 10,
              color: colors["brown.900"],
              textAlign: "center",
              marginTop:-30
            }}
          />
        </View>

      <View style={{height:50}}></View>
        
          <Link href={{ pathname: "ChangePassword" }} asChild>
            <Pressable>
              <PrimaryButton title="Submit" />
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
  