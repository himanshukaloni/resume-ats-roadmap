# Production-style structure

```text
server/
  server.js                 # ROOT entry point
  package.json
  .env
  src/
    app.js                  # Express application
    config/
    constants/
    controllers/
    middlewares/
    models/
    routes/
    services/
    validators/
    utils/
    prompts/
    jobs/
    loaders/
    templates/

client/
  src/
    components/
    context/
    hooks/
    lib/
    pages/
    routes/
    services/
    styles/
```

`server.js` is deliberately outside `src` to keep the executable entry point separate from application modules.
