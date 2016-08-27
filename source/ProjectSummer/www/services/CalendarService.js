(function(){
  "use strict";
 
  var app = angular.module('ProjectSummerApp.services');

  /**
   * Service responsible for controlling the calendar
   */
  app.service('CalendarService', function() {
    return {
      /**
       * Creates the calendar
       * @param locationId 
       *    the id of the html element that will contain the calendar
       * @param events 
       *    list of event objects: {id: i, title: 't', start: '2016-06-10', end: '2016-06-10', url: 'u'}
       * @param dayClickFn 
       *    callback for the cell click handler
       */
      createCalendar: function(locationId, events, dayClickFn) {
          var calendar = $('#'+locationId);  
          if (calendar.children().length < 2) {
            calendar.fullCalendar({
              header: 
              /*
              {
                left: 'prev',
                center: 'title',
                right: 'next'
              },
              */
              false,
              defaultDate: new Date(),
              editable: false,
              eventLimit: true, // allow "more" link when too many events
              dayClick: dayClickFn,
              eventClick: function (event, jsEvent, view) {
                dayClickFn(event.start, jsEvent, view);
              }
            });
          }
          
          calendar.fullCalendar('removeEvents');

          if (events) {  
            calendar.fullCalendar('addEventSource', events);
            calendar.fullCalendar('rerenderEvents');
          }
      }
    };      
  });

})();
