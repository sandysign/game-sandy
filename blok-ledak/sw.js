// Network-first: kalau online selalu ambil versi terbaru, kalau offline pakai cache.
const CACHE='blokledak-v4';
const FILES=['./','index.html','manifest.json','icon-192.png','icon-512.png','icon-180.png','fonts/lilita.woff2','fonts/nunito-600.woff2','fonts/nunito-800.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET'||new URL(req.url).origin!==location.origin)return;
  const net=new Promise((ok,no)=>{
    const t=setTimeout(no,3000);
    fetch(req,{cache:'no-cache'}).then(res=>{clearTimeout(t);
      if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp))}
      ok(res)}).catch(err=>{clearTimeout(t);no(err)});
  });
  e.respondWith(net.catch(()=>caches.match(req,{ignoreSearch:true}).then(r=>r||caches.match('index.html'))));
});
