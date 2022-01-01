---
tags: web-dev web-rendering computer-science computer
---

# Server-Side Rendering

**Server-Side Rendering** (SSR) is a method of [[web-rendering]] where the server (rather than the client) renders the HTML, which it then sends to the client.

Pros:

- data is fetched by the server, loaded onto HTML, and then sent to the user
- reduces the amount of [[javascript|JavaScript]] sent to client, achieving faster [[time-to-interactive|Time to Interactive]] (TTI)
- produces a fast [[first-paint|First Paint]] (FP) and [[first-contentful-paint|First Contentful Paint]] (FCP)

Cons:

- generating pages on server takes time, resulting in slower [[time-to-first-byte|Time to First Byte]] (TTFB)

SSR is often chosen for [[seo|SEO]] since website crawlers see the fully-rendered HTML upon first request.

TODO: take more notes

## Sources

- <https://developers.google.com/web/updates/2019/02/rendering-on-the-web>
