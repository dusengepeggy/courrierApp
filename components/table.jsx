
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, FlatList, Pressable, TouchableWithoutFeedback, TouchableWithoutFeedbackComponent } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';


const TableTemplate = ({tData,act}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [dropdownData, setDropdownData] = useState([]);
  const buttonRefs = useRef([]);
  const [tableHead, setTableHead] = useState([]);

  useEffect(()=>{
    if (act===true) {

        setTableHead( ['No', 'Ticket code', 'Action']);
      }
      else {
        setTableHead( ['No', 'Ticket code',]);
      }
  },[act] 
  )



 


  const handleDropdownOpen = (index, buttonRef) => {
    buttonRef.measure((x, y, width, height, pageX, pageY) => {
      setDropdownPosition({ top: pageY + height, left: pageX });
      setDropdownData([index]);
      setModalVisible(true);
    });
  };

  const handleSelectOption = (option) => {
    setSelectedItem(option);
    setModalVisible(false);
  };


  const handlePressOutside = () => {
    console.log('Tapped outside');
    setModalVisible(false);
  };




  const renderDropdown = () => (

    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
      onDismiss={() => setModalVisible(false)}
    >

      <View style={[{ top: dropdownPosition.top, left: dropdownPosition.left }]}>
        <View style={styles.modalContainer}>
          <FlatList
            data={['package recieved', 'View']}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Pressable
                style={styles.dropdownItem}
                onPress={() => handleSelectOption(item)}
              >
                <Text>{item}</Text>
              </Pressable>
            )}
          />
        </View>
      </View>

    </Modal>
  );


  return (
    <TouchableWithoutFeedback onPressOut={handlePressOutside}>
      <View style={styles.container}>

        <Table borderStyle={{ borderColor: 'transparent' }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.textHead} />
          {
            tData.map((rowData, rowIndex) => (
              <TableWrapper key={rowIndex} style={rowData.index % 2 === 1 ? styles.row : styles.rowOdd}>
                <Cell data={rowData.index} textStyle={styles.text} />
                <Cell data={rowData.ticketCode} textStyle={styles.text} />
                {
                    act === true ? (
                        <Cell
                        data={
                          <TouchableOpacity
                            onPress={() => handleDropdownOpen(rowIndex, buttonRefs.current[rowIndex])}
                            ref={el => buttonRefs.current[rowIndex] = el}
                          >
                            <View style={styles.btn}>
                              <Text style={styles.btnText}>Action</Text>
                            </View>
                          </TouchableOpacity>
                        }
                        textStyle={styles.text}
                      />

                    ):(<></>)
                }
               
              </TableWrapper>
            ))
          }
        </Table>
        {renderDropdown()}

      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#2490A9',color:"white" },
  textHead: { textAlign: 'center', color: '#fff' ,fontWeight:500},
  text: { alignSelf: "center" },
  row: { flexDirection: 'row', paddingVertical: 8, backgroundColor: "white" },
  rowOdd: { flexDirection: 'row', paddingVertical: 8, backgroundColor: "#f9f9f9" },
  btn: { width: 100, height: 30, backgroundColor: '#2490A9', borderRadius: 4, justifyContent: 'center', alignItems: 'center', alignSelf: "center" },
  btnText: { color: '#fff' },
  modalContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderColor: "lightgray",
    borderWidth: 1,
    width: 130

  },
  dropdownItem: {
    padding: 10,

  }
});

export default TableTemplate