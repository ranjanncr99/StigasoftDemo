import React, { useState} from 'react';
//import all the components we are going to use
import { View, TextInput, StyleSheet, Dimensions, Button, Keyboard } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItem } from '../../Actions/ItemsActions';

const { heigh, width } = Dimensions.get('window');
const AddTodoItem = ({addItem}) => {
  const [itemName, setItemName] = useState('')
  const onAddItem = ()=> {
    Keyboard.dismiss();

    if(itemName.trim().length == 0) {
       alert('Item name is empty');
       return;
    }

    addItem(itemName.trim());
    setItemName('');
    }
  return (
    <View style={styles.addItemContainer}>
      <TextInput style={styles.input} 
      placeholder="Add an item!" 
      onChangeText={ItemName => setItemName(ItemName)}
      value={itemName}
      />
      <View style={styles.buttonContainer}>
       <Button onPress={onAddItem} title="Add"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  addItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: width - 25,
    height: 75,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'space-between'
  },
  input: {
    
    padding: 20,
    flex: .8,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24
  },
  buttonContainer: {
   
    flex: .2,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});

//redux method to dispatch....
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addItem
  }, dispatch)
);



export default connect(null, mapDispatchToProps)(AddTodoItem);


