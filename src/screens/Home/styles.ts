import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    // padding: 24
  },
  content: {
    padding: 24,
    marginTop: -90
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  form: {
    width: '100%',
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 6,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',

    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 20
  },
  amount: {
    flexDirection: 'row',
    alignItems: "center",
  },
  create: {
    fontSize: 14,
    color: '#4EA8DE',
    fontWeight: 'bold'
  },
  done: {
    fontSize: 14,
    color: '#8284FA',
    fontWeight: 'bold'
  },
  amountCircle: {
    alignItems: "center",
    justifyContent: "center",

    width: 24,
    height: 19,
    borderRadius: 999,
    color: "#FFF",

    backgroundColor: "#333333",
    textAlign: 'center',

    marginLeft: 8
  },
  listEmptyContainer: {
    borderTopWidth: 1,
    borderTopColor: '#808080',
    alignItems: 'center',
    paddingTop: 48
  },
  listEmptyTextBold: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 16
  },
  listEmptyText: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center'
  }
})