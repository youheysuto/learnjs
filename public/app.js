'use strict';
const learnjs = {};

learnjs.problemView = function(){
  return $('<div class="problem-view">').text('Coming soon..');
};


learnjs.showView = function(hash){
  console.log('DEBUG hash: ' + hash);
  const routes = {
    '#problem-1' : learnjs.problemView
  };
  const viewFn = routes[hash];
  if (viewFn) {
    $('.view-container').empty().append(viewFn());
  }
};

