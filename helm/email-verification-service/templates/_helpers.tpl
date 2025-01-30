{{/*
Expand the name of the chart.
*/}}
{{- define "email-verification-service.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "email-verification-service.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "email-verification-service.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "email-verification-service.labels" -}}
helm.sh/chart: {{ include "email-verification-service.chart" . }}
{{ include "email-verification-service.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "email-verification-service.selectorLabels" -}}
app.kubernetes.io/name: {{ include "email-verification-service.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "email-verification-service.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "email-verification-service.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{/*
Return the appropriate apiVersion for ingress
*/}}
{{- define "email-verification-service.ingress.apiVersion" -}}
{{- if .Capabilities.APIVersions.Has "networking.k8s.io/v1" }}
{{- print "networking.k8s.io/v1" }}
{{- else }}
{{- print "networking.k8s.io/v1beta1" }}
{{- end }}
{{- end }}

{{/*
Return the appropriate apiVersion for HPA
*/}}
{{- define "email-verification-service.hpa.apiVersion" -}}
{{- if .Capabilities.APIVersions.Has "autoscaling/v2" }}
{{- print "autoscaling/v2" }}
{{- else }}
{{- print "autoscaling/v2beta1" }}
{{- end }}
{{- end }}

{{/*
Return the appropriate apiVersion for PDB
*/}}
{{- define "email-verification-service.pdb.apiVersion" -}}
{{- if .Capabilities.APIVersions.Has "policy/v1" }}
{{- print "policy/v1" }}
{{- else }}
{{- print "policy/v1beta1" }}
{{- end }}
{{- end }}

{{/*
Return the proper Docker Image Registry Secret Names
*/}}
{{- define "email-verification-service.imagePullSecrets" -}}
{{- if .Values.global }}
    {{- if .Values.global.imagePullSecrets }}
imagePullSecrets:
        {{- range .Values.global.imagePullSecrets }}
  - name: {{ . }}
        {{- end }}
    {{- end }}
{{- else if .Values.imagePullSecrets }}
imagePullSecrets:
    {{- range .Values.imagePullSecrets }}
  - name: {{ . }}
    {{- end }}
{{- end }}
{{- end }}
