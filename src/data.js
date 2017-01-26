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
const brazil = 'BRA';
const uruguay = 'URY';
const peru = 'PER';
const unitedStates = 'USA';
const mexico = 'MEX';
const newZealand = 'NZL';
const dominicanRepublic = 'DOM';

export default {
  // Visited
  [australia]: visited,
  [argentina]: visited,
  [brazil]: visited,
  [uruguay]: visited,
  [unitedStates]: visited,
  [dominicanRepublic]: visited,
  [peru]: visited,

  // Outstanding
  [newZealand]: outstanding
};
