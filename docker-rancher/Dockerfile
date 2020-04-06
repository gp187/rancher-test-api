FROM node:12.15.0
LABEL maintainer="Naologic <contact@naologic.com>"

# Make the dir
RUN mkdir -p /var/nao
RUN mkdir -p /etc/pm2-web
WORKDIR /var/nao

# Bundle APP files
COPY dist dist/
COPY pm2-web.config.json /etc/pm2-web/config.json
COPY ["tslint.json", "tsconfig.json", "./"]
COPY ["tsconfig.build.json", "nest-cli.json", "package.json", "./"]
COPY ["naologic.json", "./"]
COPY ["app.pm2.json", "micro-services.pm2.json", "./"]
#COPY [".env", ".env_staging", ".env_production", "./"]

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install -g pm2
#RUN npm install -g ts-node
# Skip and use node_modules from storage
RUN npm install
RUN npm audit fix

# Install plugins
#RUN pm2 install pm2-server-monit
#RUN pm2 install pm2-auto-pull

# Show current folder structure in logs
RUN ls -l

# Expose API ports (3000:3010) and Websocket ports (31200:31225)
EXPOSE 3000:3010 31200:31225

CMD [ "pm2-runtime", "start", "app.pm2.json", "--env", "production", "--watch", "--json", "--machine-name", "nao-crm-v3.1.2" ]
