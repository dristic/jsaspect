$(document).ready(function () {
  var events = {
    add: function (event) {
      
    }
  };
  
  // Aspect to prevent default actions.
  jsaspect.define('events', {
    pointcuts: {
      add: { scope: events, conditions: ['call add'] }
    },
    after: {
      add: [{
        func: 'preventDefault'
      }]
    },
    definition: {
      preventDefault: function (event) {
        event.preventDefault();
      }
    }
  });
  
  $('#add-button').click(events.add);
});