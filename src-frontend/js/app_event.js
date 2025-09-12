const eventset = require('eventset')

// create one events store named 'app-ui-event' to store UI related events
const App_GUIEvent = eventset.createTopic('app-gui-event');
const App_DataEvent = eventset.createTopic('app-data-event');

// register event "click-refresh-data" in "app-gui-event" topic
App_GUIEvent.addEvent('click-refresh-data');

// register event "load-data" in "app-data-event" topic
App_DataEvent.addEvent('load-data');

export { App_GUIEvent , App_DataEvent };