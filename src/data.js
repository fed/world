const visited = { fillKey: 'visited' };
const outstanding = { fillKey: 'outstanding' };

// ISO ALPHA-3 Country Codes
// http://www.nationsonline.org/oneworld/country_code_list.htm

// North America
const canada = 'CAN';
const unitedStates = 'USA';

// Caribbean
const dominicanRepublic = 'DOM';

// South America
const argentina = 'ARG';
const brazil = 'BRA';
const uruguay = 'URY';
const peru = 'PER';

// Oceania
const australia = 'AUS';
const newZealand = 'NZL';

// Europe
const austria = 'AUT';
const croatia = 'HRV';
const czechia = 'CZE';
const denmark = 'DNK';
const germany = 'DEU';
const greece = 'GRC';
const hungary = 'HUN';
const iceland = 'ICL';
const ireland = 'IRL';
const italy = 'ITA';
const norway = 'NOR';
const portugal = 'PRT';
const unitedKingdom = 'GBR';
const slovakia = 'SVK';
const slovenia = 'SVN';
const sweden = 'SWE';
const switzerland = 'CHE';

// Africa
const southAfrica = 'ZAF';

export default {
  // Visited
  [argentina]: visited,
  [australia]: visited,
  [austria]: visited,
  [brazil]: visited,
  [croatia]: visited,
  [czechia]: visited,
  [denmark]: visited,
  [dominicanRepublic]: visited,
  [germany]: visited,
  [hungary]: visited,
  [italy]: visited,
  [newZealand]: visited,
  [norway]: visited,
  [peru]: visited,
  [unitedStates]: visited,
  [uruguay]: visited,
  [slovakia]: visited,
  [slovenia]: visited,
  [switzerland]: visited,
  [sweden]: visited,

  // Outstanding
  [canada]: outstanding,
  [greece]: outstanding,
  [iceland]: outstanding,
  [ireland]: outstanding,
  [portugal]: outstanding,
  [southAfrica]: outstanding,
  [unitedKingdom]: outstanding
};
