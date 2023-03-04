# Use offical node image
FROM node:19
# replace this with your application's default port
EXPOSE 1234

# metadata
MAINTAINER figure8
LABEL Remarks="Containerized js development example."

# npm install
RUN npm install -g parcel 

RUN npm install -g typescript

# copy in relevant files first
COPY ./src/ /root/src
WORKDIR /root/src

# actually run parcel
CMD ["parcel", "index.html"]