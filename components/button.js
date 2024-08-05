import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
// import adjustSize from "../utils/adjustSize";
import createStyles from "../utils/style";
import { useBearStore } from "../store/bear";
import { useEffect } from "react";

export default function Button({ label, theme, onPress }) {
  // const bears = useBearStore((state) => state.bears)
  const { bears, userInfo, addAccount } = useBearStore();
  const state = useBearStore()
  console.log('xxx', state);
  console.log('xxx', state.addAccount);

  useEffect(() => {

    // console.log(bears);
  }, [bears]);

  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => {
            addAccount();
            onPress();
          }}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.log('addAccount:', addAccount);
          addAccount();
        }}
      >
        <Text style={styles.buttonLabel}>
          {JSON.stringify(state)}
          {/* {label} -- {bears} -- {JSON.stringify(userInfo)} */}
        </Text>
      </Pressable>
    </View>
  );
}

// const styles = createStyles({

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: 100,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
