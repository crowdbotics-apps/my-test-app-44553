import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import { api_v1_expenses_list } from "../../store/mytestappAPI/expenses.slice.js";
import { useDispatch } from "react-redux";
import { Pressable } from "react-native";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  const {
    entities: Expenses
  } = useSelector(state => state.Expenses);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(api_v1_expenses_list({}));
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={require("./logo.png")} />
          <Text style={styles.text}>
            Let's build something amazing together!
          </Text>
        </View>
        <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
        <Pressable onPress={onSubmit}>
          <View style={styles.YRDvuNlU}>
            <Text style={styles.jEYmZLBf}>{"test"}</Text>
          </View>
        </Pressable>
        <FlatList style={styles.GcyCGrRU} renderItem={({
        item
      }) => <View style={styles.VnItYQWd}></View>} ItemSeparatorComponent={() => <View style={styles.KZDduogU} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList>
        <Text style={styles.KikTIyBx}>{Expenses[0]?.name}</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: 700
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: 700,
    marginBottom: 20
  },
  YRDvuNlU: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  jEYmZLBf: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  GcyCGrRU: {
    position: "absolute",
    width: 100,
    height: 150
  },
  VnItYQWd: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  KZDduogU: {
    backgroundColor: "#000000",
    height: 1
  },
  KikTIyBx: {
    width: 231,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default WelcomeScreen;