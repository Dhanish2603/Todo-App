import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,      
  View,
} from "react-native";
import Task from "./components/Task";
import { useState } from "react";
import { TextInput } from "react-native-web";
export default function App() {
  const [task, setTask] = useState(["Task1", "Task2"]);
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks </Text>
        <View style={styles.items}>
          {task.map((data) => {
            return <Task text={data} />;
          })}
        </View>
      </View>
      {/* <KeyboardAvoidingView style={styles.writeTaskWrapper}> */}
        {/* <TextInput style={styles.input} placeholder={"Enter text"} /> */}
        {/* <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity> */}
      {/* </KeyboardAvoidingView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    // color: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: { fontSize: 24 },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  // input: {
  //   paddingVertical: 15,
  //   paddingHorizontal: 15,
  //   backgroundColor: "#fff",
  //   borderRadius: 60,
  //   borderColor: "#C0C0C0",
  //   borderWidth: 1,
  //   width: 250,
  // },
  // addWrapper: {
  //   width: 60,
  //   height: 60,
  //   backgroundColor: "#fff",
  //   borderRadius: 60,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderColor: "#C0C0C0",
  //   borderWidth: 1,
  // },
  // addText: {},
});
