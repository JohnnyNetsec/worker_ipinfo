addEventListener('fetch', event => {
 event.respondWith(handleRequest(event.request))
})
 
/**
* Respond to the request
* @param {Request} request
*/
async function handleRequest(e) {
 
   let a = '';
   for (const element of e.headers) {
       a = a.concat(element[0], " => ", element[1], "\n")
   }
  
 
 var host = e.headers.get("host")
 return new Response(a, {status: 200})
}
