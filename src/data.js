const visited = { fillKey: 'visited' };
const outstanding = { fillKey: 'outstanding' };

// ISO ALPHA-3 Country Codes
// http://www.nationsonline.org/oneworld/country_code_list.htm
const russia = 'RUS';
const canada = 'CAN';
const norway = 'NOR';
const india = 'IND';
const australia = 'AUS';
const argentina = 'ARG';
const unitedStates = 'USA';
const mexico = 'MEX';
const newZealand = 'NZL';

export default {
  [russia]: visited,
  [canada]: visited,
  [norway]: visited,
  [india]: visited,
  [australia]: visited,
  [argentina]: outstanding,
  [unitedStates]: visited,
  [mexico]: outstanding,
  [newZealand]: outstanding
};
