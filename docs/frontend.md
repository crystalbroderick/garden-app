# Frontend docs

start server in frontend directory:

```bash
npm run dev
```

## Technologies

- React
- Typescript
- react-router-dom
- axios
- bootstrap
- react-query (managing server state: fetch, cache, sync and update data w/o touching global state)

network
finish 614ms,DOM content loaded: 46ms, load 598ms
w/o cache: finish 730ms , DOM 38ms,load 657ms

finish
w/o cache: 1.62s, DOM 39, load 565

WITHOUT REACT-QUERY
53 requests
5.81 MB / 29.63 kB transferred
Finish: 1.68 min
DOMContentLoaded: 35 ms
load: 293 ms : load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images.

WITH REACT QUERY:
44 requests
101.67 kB / 163 B transferred
Finish: 28.62 s
DOMContentLoaded: 31 ms :completely loaded and parsed without waiting for stylesheets and images
load: 509 ms : load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images.

//removed dev tools..
43 requests
101.67 kB / 163 B transferred
Finish: 11.67 s
DOMContentLoaded: 32 ms
load: 420 ms
