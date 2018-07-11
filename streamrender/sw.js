self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

self.addEventListener('fetch', event => {
  const requestURL = new URL(event.request.url);

  if (requestURL.origin != location.origin) return;

  if (requestURL.pathname.endsWith('index.html') || requestURL.pathname.endsWith('first')) {
    event.respondWith(htmlStream());
  }
});

function htmlStream() {
	return fetch('./error.html').then(response => {
		var reader;
		try{
			reader = response.body.getReader();
			new ReadableStream({});
		}catch(ex){
			return response;
		}

	    var bytesReceived = 0;
	    var isdone = false;
	    var html = [];
	    reader.read().then(function processResult(result) {
	        if (result.done) {
	           console.log("Fetch complete");
	           isdone = true;
	           return;
	        }

	        // result.value for fetch streams is a Uint8Array
	        bytesReceived += result.value.length;
	        console.log('Received', bytesReceived, 'bytes of data so far');
	        html.push(result.value);

	        // Read some more, and call this function again
	        return reader.read().then(processResult);
	    });

		const stream = new ReadableStream({
		    start: controller => {
		      let pos = 0;

		      function push() {
		        if (isdone && pos >= html.length) {
		          controller.close();
		          html.length = 0;
		          return;
		        }
		        if(pos < html.length){
		        		controller.enqueue(
			          html[pos]
			        );
			        pos++;
		        }
		        setTimeout(push, 0);
		      }

		      push();
		    }
		  });

		  return new Response(stream, {
		    headers: {
		      'Content-Type': 'text/html'
		    }
		  });
	});

//	return fetch('./error.html').then(response => {
//		try{
//			new ReadableStream({});
//		}catch(ex){
//			return response;
//		}
//
//	    var reader = response.body.getReader();
//	    var bytesReceived = 0;
//
//	    const stream = new ReadableStream({
//		  start: controller => {
//		    reader.read().then(function processResult(result) {
//		        if (result.done) {
//		           console.log("Fetch complete");
//		           controller.close();
//		           return;
//		        }
//	
//		        // result.value for fetch streams is a Uint8Array
//		        bytesReceived += result.value.length;
//		        console.log('Received', bytesReceived, 'bytes of data so far');
//		        controller.enqueue(result.value);
//
//		        // Read some more, and call this function again
//		        return reader.read().then(processResult);
//		    });
//		  }
//		});
//
//		return new Response(stream, {
//		  headers: {
//		    'Content-Type': 'text/html'
//		  }
//		});
//	});
}