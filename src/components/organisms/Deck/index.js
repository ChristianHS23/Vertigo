import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

class Deck extends Component {
  renderCards = () => {
    const { data, renderCard } = this.props;
    return data.map((item) => renderCard(item));
  };

  render() {
    return <View>{this.renderCards()}</View>;
  }
}
Deck.propTypes = {
  data: PropTypes.array.isRequired,
  renderCard: PropTypes.element.isRequired,
};
export default Deck;
