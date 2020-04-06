### Deploy the Docker containing the API

Important notes
- API uses the `/tmp` dir to generate temporary files

### Build the docker
`sudo docker build -f deploy-compose/api/Dockerfile -t nao-api:2.2.0 .`

### Run the docker locally
`sudo docker run  -p 3000:3000 -p 3001:3001 --network="host" -it nao-api:2.2.0`

### Local testing
_To test locally the `pm2-runtime` command go to root dir and use_

`pm2-runtime start app.pm2.json --env production --watch --json --machine-name "nao-api-v2.2.0"`


### Known Issues
* the `--web 3000` command in the `pm2-runtime` fails due to an issue in the most recent build
