import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, FlatList, Modal, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'

const Home = () => {

  const  [input , setInput] = useState('')

  const [todo, setTodo] = useState<string[]>(['hello world']);

  const [modalVisible, setModalVisible] = useState(false);

  const [updateInput , SetUpdateInput] = useState('')

  const [index, setIndex] = useState(0);

  // addtodo 

  const addTodo = ()=> {
    console.log(input);
    todo.push(input);
    setTodo([...todo])
    setInput('')
    
  }

  // delete todo function

  const deleteTodo = (index : number)=>{
    console.log('todo deleted');
    todo.splice(index,1);
    setTodo([...todo])
    
  }

  // edit todo
  const editTodo = (index : number)=>{
    console.log(updateInput , index);
    todo.splice(index, 1, updateInput)
    setTodo([...todo])
    setModalVisible(false)
    

  }
  return (
    <SafeAreaView style={(styles.container)}>
      <Text style={{
        fontSize: 30,
        textAlign: 'center'
      }}>Todo App</Text>
       <TextInput
        style={(styles.input)}
        onChangeText={setInput}
        value={input}
        placeholder='enter todo'
      />
       <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
      {todo.length > 0 ? <FlatList style={{
        marginTop: 20
      }}
        data={todo}
        renderItem={({item, index}) => {
          return   <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
          <TouchableOpacity style={styles.delBtn} onPress={()=> deleteTodo(index)}>
        <Text>delete</Text>
      </TouchableOpacity>
          <TouchableOpacity style={styles.editBtn} onPress={()=> {
            setIndex(index)
            setModalVisible(true)
          } }>
        <Text>edit todo</Text>
      </TouchableOpacity>
        </View>
      
        } }
        keyExtractor={(item, index) => index.toString()}
      /> : <Text style={{
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 30
      }}>data not found</Text>}

<View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Update todo</Text>
            <TextInput
        style={(styles.input)}
        onChangeText={SetUpdateInput}
        value={updateInput}
        placeholder='update todo'
      />
            <Pressable
              style={[styles.modalBtn, styles.buttonClose]}
              onPress={() => editTodo(index)
              
              }>
              <Text style={styles.textStyle}>Update todo</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
  },
  input: {
    height: 40,
    marginHorizontal: 30,
    marginVertical: 30,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#4dbcc3',
    padding: 10,
    marginHorizontal: 100
  },
  delBtn: {
    alignItems: 'center',
    backgroundColor: '#f44336',
    padding: 10,
    marginHorizontal: 10
  },
  editBtn: {
    alignItems: 'center',
    backgroundColor: '#4dbcc3',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  item: {
    backgroundColor: '#000000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center'
  },
  listBtn: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalBtn: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  
})

export default Home