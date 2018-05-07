import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const ProductListItem = ({ image, key, title }) => {
  const { container, productImage, productTitle } = styles;
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => Alert.alert('clicked')}>
      <View style={container} key={key}>
        <Image source={{ uri: image }} resizeMode='contain' style={productImage} />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={productTitle} style={{flexShrink: 1}}>{title}</Text>
          <Ionicons name="ios-heart" size={32} color={'gray'} style={{flexShrink: 0}} />
        </View>
      </View>
    </TouchableOpacity>);
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  productImage: {
    height: 100,
    width: 100,
  },
  productTitle: {
    color: 'gray',
  }
});

export default ProductListItem;