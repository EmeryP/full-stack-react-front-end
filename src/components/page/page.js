import React from 'react';
import Deck from '../deck/deck.js';

const Page = props => {
  return props.content.map((section, idx) => <Deck content={section} />);
}

export default Page;