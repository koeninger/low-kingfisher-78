addEventListener("fetch", (event) => {
  const response = new Response("Hello from git", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
