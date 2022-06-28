# To-Do List app

## Running the application
Requires docker.
```
docker-compose up
```

## Installing new dependencies

Dependencies cannot be installed directly, it may be done via docker compose.

### For web
```
docker-compose exec web npm i ...
```

### For api
```
docker-compose exec api npm i ...
```
