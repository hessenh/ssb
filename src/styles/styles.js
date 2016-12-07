import { grey50 } from 'material-ui/styles/colors';

export const tableRowStandard = {};

export const tableRowAlternative = {
  backgroundColor: grey50,
};

export function alternateTableRowStyle(i) {
  return i % 2 ? tableRowStandard : tableRowAlternative;
}
