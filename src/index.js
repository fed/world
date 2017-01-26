import Datamap from 'datamaps';
import {colors} from './constants';
import data from './data';

const map = new Datamap({
  element: document.getElementById('container'),
  responsive: true,
  data,
  fills: {
    visited: colors.visited,
    outstanding: colors.outstanding,
    defaultFill: colors.default
  },
  geographyConfig: {
    hideAntarctica: false,
    borderWidth: 1,
    borderColor: colors.border,
    highlightFillColor: colors.highlight,
    highlightBorderColor: colors.highlightBorder,
    highlightBorderWidth: 1
  }
});

// Responsify map
window.addEventListener('resize', function() {
  map.resize();
});
