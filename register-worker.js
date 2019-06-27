/**
|------------------------------------------
|  Register the service worker
|----------–----–----–----------------------
*/
if (location.protocol == 'https:' || location.protocol == 'http:'){
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
		.register('./service-worker.js')
		.then(function () { console.log('Service Worker Registered'); });
	}
}
		
		
		