self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

self.addEventListener('fetch', event => {
  const requestURL = new URL(event.request.url);

  if (requestURL.origin != location.origin) return;

  if (requestURL.pathname.endsWith('index.html')) {
    event.respondWith(htmlStream());
  }
});

function htmlStream() {
	return fetch('./error.html').then(response => {
	    // response.body is a readable stream.
	    // Calling getReader() gives us exclusive access to
	    // the stream's content
	    var reader = response.body.getReader();
	    var bytesReceived = 0;

	    const stream = new ReadableStream({
		  start: controller => {
			// read() returns a promise that resolves
		    // when a value has been received
		    reader.read().then(function processResult(result) {
		        // Result objects contain two properties:
		        // done  - true if the stream has already given
		        //         you all its data.
		        // value - some data. Always undefined when
		        //         done is true.
		        if (result.done) {
		           console.log("Fetch complete");
		           controller.close();
		           return;
		        }
	
		        // result.value for fetch streams is a Uint8Array
		        bytesReceived += result.value.length;
		        console.log('Received', bytesReceived, 'bytes of data so far');
		        controller.enqueue(result.value);

		        // Read some more, and call this function again
		        return reader.read().then(processResult);
		    });
		  }
		});

		return new Response(stream, {
		  headers: {
		    'Content-Type': 'text/html'
		  }
		});
	});
}