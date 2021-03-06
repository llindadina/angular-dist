
# base image
FROM node:10.15.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@9.0.7

# add app
COPY . /app

CMD pwd
CMD ls

# start app
CMD ng serve --host 0.0.0.0