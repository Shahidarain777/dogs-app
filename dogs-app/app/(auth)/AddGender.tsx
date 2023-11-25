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
  
  import colors from "../res/colors";
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  export default function AdGender() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text
            style={{
              fontSize: 24,
              color: colors["brown.900"],
              fontWeight: "600",
              marginTop: 120,
            }}
          >
            How old is your dog?
          </Text>
  
          <Text
            style={{
              textAlign: "center",
              paddingHorizontal: 20,
              fontSize: 13,
              color: colors["brown.900"],
              fontWeight: "600",
              marginTop: 20,
            }}
          >
            Depending on the age,we will advise the best indivdual plan for
            traning and walking acitivities
          </Text>
  
          <View style={{ flexDirection:'row', marginTop:120,}}>
          <View
            style={{
              borderBottomColor: colors["brown.900"],
              borderBottomWidth: 2,
              marginVertical: 20,
              alignItems: "center",
              marginHorizontal:22,
            }}
          >
            <TextInput
              style={{
                width: 50,
                fontSize: 14,
                padding: 10,
                color: colors["brown.900"],
                textAlign: "center",
              }}
            />
          </View>
           <View
            style={{
              borderBottomColor: colors["brown.900"],
              borderBottomWidth: 2,
              marginHorizontal:22,
              marginVertical: 20,
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                width: 50,
                fontSize: 14,
                padding: 10,
                color: colors["brown.900"],
                textAlign: "center",
                marginRight:10,
              }}
            />
          </View>
          </View>
  
          <View style={{ flexDirection:'row', margin:50,}}>
          <Text
            style={{
              fontSize: 13,
              color: colors["brown.900"],
              fontWeight: "600",
              marginHorizontal:20,
              marginTop:-65,
            }}
          >
            Years (s)
          </Text>
  
          <Text
            style={{
              fontSize: 13,
              color: colors["brown.900"],
              fontWeight: "600",
              marginHorizontal:31,
              marginTop:-65,
            }}
          >
            Month (s)
          </Text>
          </View>
  
  
  
        
          <Link href={{ pathname: "DogAge" }} asChild>
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
  