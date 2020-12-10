/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export default {
  SPACING: 16,
  width,
  ICON_SIZE: 40,
  ITEM_WIDTH: 200,
  colors: {
    text: '#0A0A0A',
    background: '#FFF',
    border: '#E2E8F0',
    muted: '#F0F1F3',
    success: '#7DBE31',
    error: '#FC0021',
    info: '#00FFFF',
  },
};
