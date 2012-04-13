$(document).ready(function () {
  var events = {
    add: function (event) {
      
    },
    
    remove: function (event) {
      
    }
  };
  
  // Aspect to prevent default actions.
  jsaspect.define('events', {
    pointcuts: {
      buttons: { scope: events, conditions: 'execution(add), execution(remove)' }
    },
    after: {
      buttons: [{
        func: 'preventDefault'
      }]
    },
    before: {
      buttons: [{
        func: 'display'
      }]
    },
    definition: {
      preventDefault: function (event) {
        event.preventDefault();
      },
      
      display: function () {
        console.log('calling: ' + arguments.callee.name);
      }
    }
  });
  
  $('#add-button').click(events.add);
  $('.remove-button').click(events.remove);
});