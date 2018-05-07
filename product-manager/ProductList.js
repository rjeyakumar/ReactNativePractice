import React from "react";
import { View, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import ProductListItem from "./ProductListItem";

const baseURL = `http://172.16.107.194:4000`;

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, products: [] };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`${baseURL}/products`)
      .then(response => response.json())
      .then(data => {
        this.setState({ isLoading: false, products: data });
      });
  }

  renderItems() {
    return this.state.products.map(product => {
      const { image, title, id } = product;
      const imageUrl = `${baseURL}/images/${image}`;
      return (<ProductListItem image={imageUrl} key={id} title={title} />);
    }
    );
  }

  render() {
    const { loader } = styles;
    const { isLoading } = this.state;
    return <ScrollView>
      {isLoading ? <ActivityIndicator size="large" color="purple" /> : this.renderItems()}
    </ScrollView>;
  }
}

const styles = StyleSheet.create({
  loader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductList;


