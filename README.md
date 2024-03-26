# Building and Deploying Docker Image to Minikube\

### Necessities

#### Kubernetes
[Kubernetes](https://kubernetes.io/) is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.

#### Minikube
[Minikube](https://minikube.sigs.k8s.io/docs/) is a tool that allows you to run Kubernetes locally on your machine. It is ideal for development and testing purposes.

#### Node.js
[Node.js](https://nodejs.org/) is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to build scalable network applications and is commonly used for server-side development.

#### Docker
[Docker](https://www.docker.com/) is a platform for developing, shipping, and running applications in containers. It provides a way to package and distribute your application with all its dependencies.

#### kubectl
To download `kubectl`, the Kubernetes command-line tool, you can visit the [official Kubernetes documentation](https://kubernetes.io/docs/tasks/tools/install-kubectl/) or the [GitHub releases page](https://github.com/kubernetes/kubectl/releases) and download the appropriate binary for your operating system.



## Build Docker Image

1. Build your Docker image:
   ```bash
   docker build -t <image_name> .
2. Tag the image:
   ```bash
   docker tag <image_name> <username>/<image_name>:1.0.0

## Push Image to Docker Hub
1. Log in to Docker Hub:
   ```bash
   docker login
2. Push the tagged image to Docker Hub (make sure its public):
   ```bash
   docker push <username>/<image_name>:1.0.0
   
## Start Minikube and Deploy to Kubernetes
1. Start Minikube:
   ```bash
   minikube start
2. Apply your resource definitions to Kubernetes:
   ```bash
   kubectl apply -f <your_path_to_resources>
   The resources are the YAML file, see in repository
3. Watch your Pods come alive:
   ```bash
   kubectl get pods --watch
4. Access your app through your Service:
   ```bash
   minikube service <your_service_name> --url

## Clean Up
1. Remove the app from the  cluster:
   ```bash
   kubectl delete -f <your_path_to_resources>
