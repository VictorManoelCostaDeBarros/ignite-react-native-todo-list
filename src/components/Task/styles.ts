import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
    padding: 12
  }, 
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginHorizontal: 8
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF',
  }
})