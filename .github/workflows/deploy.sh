#!/bin/bash
ENV=$1
echo "Déploiement de l'application sur l'environnement : $ENV"
echo "Image déployée : tp-cicd:${GITHUB_SHA:-local}"