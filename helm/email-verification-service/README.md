# email-verification-service

![Version: 0.1.0](https://img.shields.io/badge/Version-0.1.0-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 1.0.0](https://img.shields.io/badge/AppVersion-1.0.0-informational?style=flat-square)

A Helm chart for Email Verification Service

## Requirements

| Repository | Name | Version |
|------------|------|---------|
| https://charts.bitnami.com/bitnami | postgresql | 12.x.x |
| https://charts.bitnami.com/bitnami | rabbitmq | 12.x.x |

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| global | object | `{"imagePullSecrets":[],"storageClass":""}` | Global Values |
| global.imagePullSecrets | list | `[]` | List of image pull secrets to use for all deployments |
| global.storageClass | string | `""` | Global storage class to use for all PVCs. If not set, the default storage class will be used |
| image | object | `{"pullPolicy":"IfNotPresent","repository":"feelguuds/email-verification-service","tag":"latest"}` | Image configuration |
| image.repository | string | `"feelguuds/email-verification-service"` | Repository to pull the image from |
| image.pullPolicy | string | `"IfNotPresent"` | Image pull policy |
| image.tag | string | `"latest"` | Tag of the image to pull. If not specified, defaults to Chart.AppVersion |
| nameOverride | string | `""` | Override the name of the chart |
| fullnameOverride | string | `""` | Override the full name of the chart |
| serviceAccount | object | `{"annotations":{},"create":true,"name":""}` | ServiceAccount configuration |
| serviceAccount.create | bool | `true` | Specifies whether a service account should be created |
| serviceAccount.annotations | object | `{}` | Annotations to add to the service account |
| serviceAccount.name | string | `""` | If not set and create is true, a name is generated using the fullname template |
| podAnnotations | object | `{}` | Pod annotations to add |
| podSecurityContext | object | `{}` | Pod security context configuration |
| securityContext | object | `{}` | Container security context configuration |
| server | object | `{"autoscaling":{"enabled":true,"maxReplicas":10,"minReplicas":2,"targetCPUUtilizationPercentage":80,"targetMemoryUtilizationPercentage":80},"enabled":true,"env":{"RCH__WORKER__ENABLE":"false","RUST_LOG":"reacher=info"},"podDisruptionBudget":{"enabled":true,"minAvailable":1},"port":8080,"replicaCount":2,"resources":{"limits":{"cpu":"500m","memory":"512Mi"},"requests":{"cpu":"250m","memory":"256Mi"}}}` | HTTP Server Configuration |
| server.enabled | bool | `true` | Enable server deployment |
| server.replicaCount | int | `2` | Number of server replicas to deploy |
| server.port | int | `8080` | Server port |
| server.env | object | `{"RCH__WORKER__ENABLE":"false","RUST_LOG":"reacher=info"}` | Environment variables for the server |
| server.env.RUST_LOG | string | `"reacher=info"` | Log level for the server |
| server.env.RCH__WORKER__ENABLE | string | `"false"` | Disable worker mode for server |
| server.resources | object | `{"limits":{"cpu":"500m","memory":"512Mi"},"requests":{"cpu":"250m","memory":"256Mi"}}` | Resource limits and requests for the server |
| server.autoscaling | object | `{"enabled":true,"maxReplicas":10,"minReplicas":2,"targetCPUUtilizationPercentage":80,"targetMemoryUtilizationPercentage":80}` | Autoscaling configuration for server |
| server.autoscaling.enabled | bool | `true` | Enable horizontal pod autoscaling |
| server.autoscaling.minReplicas | int | `2` | Minimum number of replicas |
| server.autoscaling.maxReplicas | int | `10` | Maximum number of replicas |
| server.autoscaling.targetCPUUtilizationPercentage | int | `80` | Target CPU utilization percentage |
| server.autoscaling.targetMemoryUtilizationPercentage | int | `80` | Target memory utilization percentage |
| server.podDisruptionBudget | object | `{"enabled":true,"minAvailable":1}` | Pod disruption budget configuration for server |
| server.podDisruptionBudget.enabled | bool | `true` | Enable pod disruption budget |
| server.podDisruptionBudget.minAvailable | int | `1` | Minimum number of pods that must be available |
| workers | object | `{"enabled":true,"instances":{"worker1":{"autoscaling":{"enabled":false,"maxReplicas":1,"minReplicas":1,"targetCPUUtilizationPercentage":80,"targetMemoryUtilizationPercentage":80},"concurrency":5,"enabled":true,"env":{"RCH__WORKER__ENABLE":"true","RCH__WORKER__RABBITMQ__CONCURRENCY":"5","RCH__WORKER__THROTTLE__MAX_REQUESTS_PER_DAY":"10000","RUST_LOG":"reacher=info"},"name":"worker1","podDisruptionBudget":{"enabled":true,"minAvailable":1},"port":8080,"proxy":{"enabled":true,"existingSecret":"","existingSecretHostKey":"proxy-host","existingSecretPasswordKey":"proxy-password","existingSecretPortKey":"proxy-port","existingSecretUsernameKey":"proxy-username","host":"","password":"","port":"","username":""},"replicaCount":1},"worker2":{"autoscaling":{"enabled":false,"maxReplicas":1,"minReplicas":1,"targetCPUUtilizationPercentage":80,"targetMemoryUtilizationPercentage":80},"concurrency":5,"enabled":true,"env":{"RCH__WORKER__ENABLE":"true","RCH__WORKER__RABBITMQ__CONCURRENCY":"5","RCH__WORKER__THROTTLE__MAX_REQUESTS_PER_MINUTE":"60","RUST_LOG":"reacher=info"},"name":"worker2","podDisruptionBudget":{"enabled":true,"minAvailable":1},"port":8081,"proxy":{"enabled":true,"existingSecret":"","existingSecretHostKey":"proxy-host","existingSecretPasswordKey":"proxy-password","existingSecretPortKey":"proxy-port","existingSecretUsernameKey":"proxy-username","host":"","password":"","port":"","username":""},"replicaCount":1}}}` | Worker Configuration |
| workers.enabled | bool | `true` | Enable worker deployments |
| workers.instances | object | `{"worker1":{"autoscaling":{"enabled":false,"maxReplicas":1,"minReplicas":1,"targetCPUUtilizationPercentage":80,"targetMemoryUtilizationPercentage":80},"concurrency":5,"enabled":true,"env":{"RCH__WORKER__ENABLE":"true","RCH__WORKER__RABBITMQ__CONCURRENCY":"5","RCH__WORKER__THROTTLE__MAX_REQUESTS_PER_DAY":"10000","RUST_LOG":"reacher=info"},"name":"worker1","podDisruptionBudget":{"enabled":true,"minAvailable":1},"port":8080,"proxy":{"enabled":true,"existingSecret":"","existingSecretHostKey":"proxy-host","existingSecretPasswordKey":"proxy-password","existingSecretPortKey":"proxy-port","existingSecretUsernameKey":"proxy-username","host":"","password":"","port":"","username":""},"replicaCount":1},"worker2":{"autoscaling":{"enabled":false,"maxReplicas":1,"minReplicas":1,"targetCPUUtilizationPercentage":80,"targetMemoryUtilizationPercentage":80},"concurrency":5,"enabled":true,"env":{"RCH__WORKER__ENABLE":"true","RCH__WORKER__RABBITMQ__CONCURRENCY":"5","RCH__WORKER__THROTTLE__MAX_REQUESTS_PER_MINUTE":"60","RUST_LOG":"reacher=info"},"name":"worker2","podDisruptionBudget":{"enabled":true,"minAvailable":1},"port":8081,"proxy":{"enabled":true,"existingSecret":"","existingSecretHostKey":"proxy-host","existingSecretPasswordKey":"proxy-password","existingSecretPortKey":"proxy-port","existingSecretUsernameKey":"proxy-username","host":"","password":"","port":"","username":""},"replicaCount":1}}` | Worker instances configuration |
| workers.instances.worker1.enabled | bool | `true` | Enable this worker instance |
| workers.instances.worker1.name | string | `"worker1"` | Name of the worker |
| workers.instances.worker1.port | int | `8080` | Worker port |
| workers.instances.worker1.replicaCount | int | `1` | Number of worker replicas (should be 1 for 1:1 proxy IP ratio) |
| workers.instances.worker1.concurrency | int | `5` | Number of concurrent email verifications per worker |
| workers.instances.worker1.proxy | object | `{"enabled":true,"existingSecret":"","existingSecretHostKey":"proxy-host","existingSecretPasswordKey":"proxy-password","existingSecretPortKey":"proxy-port","existingSecretUsernameKey":"proxy-username","host":"","password":"","port":"","username":""}` | Proxy configuration for this worker |
| workers.instances.worker1.proxy.enabled | bool | `true` | Enable proxy for this worker |
| workers.instances.worker1.proxy.host | string | `""` | Proxy host address |
| workers.instances.worker1.proxy.port | string | `""` | Proxy port |
| workers.instances.worker1.proxy.username | string | `""` | Proxy username |
| workers.instances.worker1.proxy.password | string | `""` | Proxy password |
| workers.instances.worker1.proxy.existingSecret | string | `""` | Existing secret containing proxy credentials |
| workers.instances.worker1.proxy.existingSecretHostKey | string | `"proxy-host"` | Key in the existing secret for proxy host |
| workers.instances.worker1.proxy.existingSecretPortKey | string | `"proxy-port"` | Key in the existing secret for proxy port |
| workers.instances.worker1.proxy.existingSecretUsernameKey | string | `"proxy-username"` | Key in the existing secret for proxy username |
| workers.instances.worker1.proxy.existingSecretPasswordKey | string | `"proxy-password"` | Key in the existing secret for proxy password |
| workers.instances.worker1.autoscaling | object | `{"enabled":false,"maxReplicas":1,"minReplicas":1,"targetCPUUtilizationPercentage":80,"targetMemoryUtilizationPercentage":80}` | Autoscaling configuration for worker |
| workers.instances.worker1.autoscaling.enabled | bool | `false` | Disable autoscaling by default (1:1 worker to proxy IP ratio) |
| workers.instances.worker1.autoscaling.minReplicas | int | `1` | Minimum number of replicas |
| workers.instances.worker1.autoscaling.maxReplicas | int | `1` | Maximum number of replicas |
| workers.instances.worker1.autoscaling.targetCPUUtilizationPercentage | int | `80` | Target CPU utilization percentage |
| workers.instances.worker1.autoscaling.targetMemoryUtilizationPercentage | int | `80` | Target memory utilization percentage |
| workers.instances.worker1.podDisruptionBudget | object | `{"enabled":true,"minAvailable":1}` | Pod disruption budget configuration for worker |
| workers.instances.worker1.podDisruptionBudget.enabled | bool | `true` | Enable pod disruption budget |
| workers.instances.worker1.podDisruptionBudget.minAvailable | int | `1` | Minimum number of pods that must be available |
| workers.instances.worker1.env | object | `{"RCH__WORKER__ENABLE":"true","RCH__WORKER__RABBITMQ__CONCURRENCY":"5","RCH__WORKER__THROTTLE__MAX_REQUESTS_PER_DAY":"10000","RUST_LOG":"reacher=info"}` | Environment variables for the worker |
| workers.instances.worker1.env.RUST_LOG | string | `"reacher=info"` | Log level for the worker |
| workers.instances.worker1.env.RCH__WORKER__ENABLE | string | `"true"` | Enable worker mode |
| workers.instances.worker1.env.RCH__WORKER__RABBITMQ__CONCURRENCY | string | `"5"` | Number of concurrent verifications |
| workers.instances.worker1.env.RCH__WORKER__THROTTLE__MAX_REQUESTS_PER_DAY | string | `"10000"` | Maximum requests per day (recommended limit per IP) |
| service | object | `{"port":8080,"type":"ClusterIP"}` | Service configuration |
| service.type | string | `"ClusterIP"` | Service type (ClusterIP, NodePort, or LoadBalancer) |
| service.port | int | `8080` | Service port |
| ingress | object | `{"annotations":{"kubernetes.io/ingress.class":"nginx","nginx.ingress.kubernetes.io/ssl-redirect":"false","nginx.ingress.kubernetes.io/use-regex":"true"},"className":"nginx","enabled":true,"hosts":[{"host":"email-verification.local","paths":[{"path":"/","pathType":"Prefix"}]}]}` | Ingress configuration |
| ingress.enabled | bool | `true` | Enable ingress |
| ingress.className | string | `"nginx"` | Ingress class name |
| ingress.annotations | object | `{"kubernetes.io/ingress.class":"nginx","nginx.ingress.kubernetes.io/ssl-redirect":"false","nginx.ingress.kubernetes.io/use-regex":"true"}` | Ingress annotations |
| ingress.hosts | list | `[{"host":"email-verification.local","paths":[{"path":"/","pathType":"Prefix"}]}]` | Ingress hosts configuration |
| database | object | `{"dsn":"","existingSecret":"","existingSecretKey":"database-url","external":false}` | Database configuration |
| database.external | bool | `false` | Use external PostgreSQL |
| database.dsn | string | `""` | External PostgreSQL connection string |
| database.existingSecret | string | `""` | Existing secret containing database credentials |
| database.existingSecretKey | string | `"database-url"` | Key in the existing secret for database URL |
| messageQueue | object | `{"dsn":"","existingSecret":"","existingSecretKey":"rabbitmq-url","external":false}` | Message Queue configuration |
| messageQueue.external | bool | `false` | Use external RabbitMQ |
| messageQueue.dsn | string | `""` | External RabbitMQ connection string |
| messageQueue.existingSecret | string | `""` | Existing secret containing RabbitMQ credentials |
| messageQueue.existingSecretKey | string | `"rabbitmq-url"` | Key in the existing secret for RabbitMQ URL |
| postgresql | object | `{"auth":{"database":"reacher_db","password":"postgres","username":"postgres"},"enabled":true,"primary":{"persistence":{"enabled":true,"size":"10Gi"}},"service":{"port":5432}}` | PostgreSQL configuration |
| postgresql.enabled | bool | `true` | Enable PostgreSQL deployment |
| postgresql.auth | object | `{"database":"reacher_db","password":"postgres","username":"postgres"}` | Authentication configuration |
| postgresql.auth.username | string | `"postgres"` | PostgreSQL username |
| postgresql.auth.password | string | `"postgres"` | PostgreSQL password |
| postgresql.auth.database | string | `"reacher_db"` | PostgreSQL database name |
| postgresql.service | object | `{"port":5432}` | Service configuration |
| postgresql.service.port | int | `5432` | PostgreSQL port |
| postgresql.primary | object | `{"persistence":{"enabled":true,"size":"10Gi"}}` | Primary configuration |
| postgresql.primary.persistence | object | `{"enabled":true,"size":"10Gi"}` | Persistence configuration |
| postgresql.primary.persistence.enabled | bool | `true` | Enable persistence |
| postgresql.primary.persistence.size | string | `"10Gi"` | Storage size |
| rabbitmq | object | `{"auth":{"password":"guest","username":"guest"},"enabled":true,"metrics":{"enabled":true},"persistence":{"enabled":true,"size":"8Gi"},"resources":{"limits":{"cpu":"200m","memory":"512Mi"},"requests":{"cpu":"100m","memory":"256Mi"}},"service":{"managerPort":15672,"port":5672}}` | RabbitMQ configuration |
| rabbitmq.enabled | bool | `true` | Enable RabbitMQ deployment |
| rabbitmq.auth | object | `{"password":"guest","username":"guest"}` | Authentication configuration |
| rabbitmq.auth.username | string | `"guest"` | RabbitMQ username |
| rabbitmq.auth.password | string | `"guest"` | RabbitMQ password |
| rabbitmq.service | object | `{"managerPort":15672,"port":5672}` | Service configuration |
| rabbitmq.service.port | int | `5672` | AMQP port |
| rabbitmq.service.managerPort | int | `15672` | Management console port |
| rabbitmq.persistence | object | `{"enabled":true,"size":"8Gi"}` | Persistence configuration |
| rabbitmq.persistence.enabled | bool | `true` | Enable persistence |
| rabbitmq.persistence.size | string | `"8Gi"` | Storage size |
| rabbitmq.metrics | object | `{"enabled":true}` | Metrics configuration |
| rabbitmq.metrics.enabled | bool | `true` | Enable Prometheus metrics |
| rabbitmq.resources | object | `{"limits":{"cpu":"200m","memory":"512Mi"},"requests":{"cpu":"100m","memory":"256Mi"}}` | Resource configuration |
| rabbitmq.resources.requests | object | `{"cpu":"100m","memory":"256Mi"}` | Resource requests |
| rabbitmq.resources.limits | object | `{"cpu":"200m","memory":"512Mi"}` | Resource limits |

----------------------------------------------
Autogenerated from chart metadata using [helm-docs v1.14.2](https://github.com/norwoodj/helm-docs/releases/v1.14.2)
