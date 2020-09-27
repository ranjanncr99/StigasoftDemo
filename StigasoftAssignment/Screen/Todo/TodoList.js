//import React in our code
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteItem } from '../../Actions/ItemsActions';
//import all the components we are going to use
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';

const { heigh, width } = Dimensions.get('window');
    
    const TodoList = ({items, deleteItem}) => {
 
  

  const ItemView = ({ item }) => {
    return (
      // Single Comes here which will be repeatative for the FlatListItems
      <View>
        
          <Text style={styles.item} onPress={() => getItem(item)}>
            {item.name}
          </Text>
         
        
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      //Item Separator
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
      />
    );
  };

  const getItem = (item) => {
    //Function for click on an item
    //alert('Id : ' + item.id + ' Name : ' + item.name);
    deleteItem(item.id);
  };

  const compareId = (a, b) => {
    let comparison = 0;
    if (a.id > b.id) {
      comparison = -1;
    } else if (a.id < b.id) {
      comparison = 1;
    }
    return comparison;
  }


  return (
    
     <View style={styles.container}>
        <Text>Todo List</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={items.sort(compareId)}
            //data defined in constructor
            ItemSeparatorComponent={ItemSeparatorView}
            //Item Separator View
            renderItem={ItemView}
            keyExtractor={(item, index) => item.id.toString()}
            
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const mapStateToProps = (state) => {
  const { items } = state
  return { items }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    deleteItem
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


