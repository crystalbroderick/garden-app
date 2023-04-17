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
- @tanstack/react-query (managing server state: fetch, cache, sync and update data w/o touching global state)

network
WITHOUT REACT-QUERY
53 requests
5.81 MB / 29.63 kB transferred
Finish: 1.68 min
DOMContentLoaded: 35 ms
load: 293 ms : load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images.

WITH REACT QUERY:
//removed dev tools..
43 requests
101.67 kB / 163 B transferred
Finish: 11.67 s
DOMContentLoaded: 32 ms
load: 420 ms
