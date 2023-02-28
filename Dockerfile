# Use offical node image
FROM node:19
# replace this with your application's default port
EXPOSE 1234

# metadata
MAINTAINER figure8
LABEL Remarks="Containerized js development example."

# copy in relevant files first
COPY ./src /root/src
WORKDIR /root/src

# npm install
RUN npm install -g parcel

# actually run parcel
CMD ["parcel", "index.html"]