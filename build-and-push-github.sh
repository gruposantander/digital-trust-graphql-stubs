#!/bin/sh
set -eux

if [ $# -eq 0 ]
  then
    exit "No auth supplied"
fi

REGISTRY_EXTERNAL="default-route-openshift-image-registry.apps.santanderlabs.v7f7.p1.openshiftapps.com"
IMAGE_EXTERNAL="default-route-openshift-image-registry.apps.santanderlabs.v7f7.p1.openshiftapps.com/digital-trust/graphql-stubs"
IMAGE_GITHUB="docker.pkg.github.com/gruposantander/digital-trust-graphql-stubs/graphql-stubs"
TAG=beta
USER_NAME="$1"
NPM_TOKEN="$2"

docker login docker.pkg.github.com -u ${USER_NAME} -p ${NPM_TOKEN}
docker build -t ${IMAGE_EXTERNAL}:${TAG}
docker tag ${IMAGE_EXTERNAL}:${TAG} ${IMAGE_GITHUB}

docker push ${IMAGE_GITHUB}
