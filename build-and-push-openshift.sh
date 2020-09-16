#!/bin/sh
set -eux
# Before running the script, make sure you login to oc usign the token from dashboard

REGISTRY_EXTERNAL="default-route-openshift-image-registry.apps.santanderlabs.v7f7.p1.openshiftapps.com"
IMAGE_EXTERNAL="default-route-openshift-image-registry.apps.santanderlabs.v7f7.p1.openshiftapps.com/digital-trust/graphql-stubs:latest"

docker build -t ${IMAGE_EXTERNAL} \
  --label "GIT_COMMIT=$(git rev-parse HEAD)" .
docker login ${REGISTRY_EXTERNAL} -u $(oc whoami) -p $(oc whoami -t)
docker push ${IMAGE_EXTERNAL}