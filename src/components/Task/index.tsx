import { Text, TouchableOpacity, View } from "react-native";
import { Trash } from 'phosphor-react-native'
import { styles } from "./styles";

import Check from '../../assets/check.svg'
import UnCheck from '../../assets/uncheck.svg'

export interface TaskProps {
  id: string;
  description: string;
  done: boolean;
}

type Props = {
  task: TaskProps;
  onToggle: () => void;
  onRemove: () => void;
}

export function Task({ task,  onToggle, onRemove }: Props) {
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={onToggle}>
        {
          task.done ? <Check /> : <UnCheck />
        }
      </TouchableOpacity>

      <Text style={[styles.name, { textDecorationLine: task.done ? 'line-through' : 'none' }]}>{task.description}</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={onRemove}
      >
        <Trash size={22} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}