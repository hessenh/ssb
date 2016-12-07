import {
  blueGrey100,
  lightBlue200,
  grey50,
  grey800,
  grey100,
  grey300,
  grey500,
  red500,
  white,
  lightBlack,
  darkBlack,
} from 'material-ui/styles/colors';
import * as ColorManipulator from 'material-ui/utils/colorManipulator';
import { uDarkBlue, uBlue, uOrange } from './colors';

export default {
  primary1Color: uBlue,
  primary2Color: uBlue,
  primary3Color: lightBlack,
  accent1Color: uOrange,
  accent2Color: blueGrey100,
  accent3Color: grey800,
  textColor: uDarkBlue,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey500,
  disabledColor: ColorManipulator.fade(darkBlack, 0.3),
  pickerHeaderColor: lightBlue200,
  clockCircleColor: ColorManipulator.fade(darkBlack, 0.07),
  shadowColor: grey500,
  backgroundColor: white,
  menuColor: grey50,
  failedColor: red500,

  bgContrast1Color: grey300,
  bgContrast2Color: grey100,
  bgContrast3Color: grey50,
};
