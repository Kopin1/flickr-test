'use strict';

// Example of how to make an HTTP request in jQuery.
let api = 'https://api.flickr.com/services/feeds/photos_public.gne';

// Example of HTTP jquery request.
$.ajax({
  url: api,
  data: {
    format: 'json',
    jsoncallback: 'getJsonData',
    tags: ''
  },
  dataType: 'jsonp',
});

// Get the data from API call.
function getJsonData(data){
  // Do something.
  console.log(data);
}


