'use strict';
const learnjs = {};
learnjs.showView = function(hash){
  const problemView = $('<div class="problem-view">').text('TEST TEXT');
  $('.view-container').empty().append(problemView);
};

