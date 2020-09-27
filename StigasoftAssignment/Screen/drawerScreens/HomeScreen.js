/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { View, Text } from 'react-native';
import TodoList from '../Todo/TodoList';
import AddTodoItem from '../Todo/AddTodoItem';

const HomeScreen = () => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
     <AddTodoItem />
     <TodoList />
      
    </View>
  );
};
export default HomeScreen;