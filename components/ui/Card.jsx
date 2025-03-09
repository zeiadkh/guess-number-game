import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";
export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 42,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 16,
    shadowColor: "#black",
    shadowOffest: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
});
