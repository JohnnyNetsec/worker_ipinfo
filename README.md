# worker_ipinfo
Worker ipinfo


Shows your ip address related information.


Original code is not working anymore. 

here is the new code

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
