import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { PlusCircle, ClipboardText } from 'phosphor-react-native';
import uuid from 'react-native-uuid';

import { Header } from "../../components/Header";
import { Task, TaskProps } from "../../components/Task";

import { styles } from "./styles";

export function Home() {
  const [ tasks, setTasks ] = useState<TaskProps[]>([])
  const [ task, setTask ] = useState('');

  function handleParticipantAdd() {
    if (tasks.filter(taskData => taskData.description === task).length > 0) {
      return Alert.alert('Tarefa Existe', 'Já existe uma tarefa na lista com essa descrição.')
    }

    setTasks(prevState => [...prevState, { id: uuid.v4() as string, description: task, done: false }])

    setTask('')
  }

  function handleToggleTask(id: string) {
    setTasks(prevState => prevState.map(task => {
      if(task.id === id) {
        task.done = !task.done
      }

      return task
    }))
  }

  function handleParticipantRemove(id: string) {
    return Alert.alert('Remover', `Realmente deseja excluir essa tarefa?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task.id !== id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTask}
            value={task}
          />

          <TouchableOpacity 
            style={styles.button}
            onPress={handleParticipantAdd}
          >
            <PlusCircle size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.amountContainer}>
          <View style={styles.amount}>
            <Text style={styles.create}>Criadas</Text>
            <View style={styles.amountCircle}><Text style={{ color: '#FFF' }}>{tasks.length}</Text></View>
          </View>

          <View style={styles.amount}>
            <Text style={styles.done}>Concluídas</Text>
            <View style={styles.amountCircle}><Text style={{ color: '#FFF' }}>{tasks.filter(task => task.done).length}</Text></View>
          </View>
        </View>

        <FlatList 
          data={tasks}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Task 
              key={item.description} 
              task={item} 
              onToggle={() => handleToggleTask(item.id)} 
              onRemove={() => handleParticipantRemove(item.id)} 
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.listEmptyContainer}>
              <ClipboardText size={56} color="#808080" />
              <Text style={styles.listEmptyTextBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}