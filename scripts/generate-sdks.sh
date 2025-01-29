#!/bin/bash

# ANSI color codes
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Environment variables
OPENAPI_FILE="./backend/openapi.json"
SDK_OUTPUT_DIR="./sdks"
SERVICE_NAME="email-verification"

# Read version from config file
read_versions() {
    TS_VERSION=$(grep 'typescript:' version.yaml | awk '{print $2}')
    PYTHON_VERSION=$(grep 'python:' version.yaml | awk '{print $2}')
    GO_VERSION=$(grep 'go:' version.yaml | awk '{print $2}')
    ORG_NAME=$(grep 'org:' version.yaml | awk '{print $2}')
}

# Help function
show_help() {
    echo -e "${CYAN}Usage:${NC}"
    echo -e "  ./scripts/generate-sdks.sh ${GREEN}<command>${NC}"
    echo ""
    echo -e "${CYAN}Available commands:${NC}"
    echo -e "  ${GREEN}all${NC}                Generate all SDKs"
    echo -e "  ${GREEN}typescript${NC}         Generate TypeScript SDK"
    echo -e "  ${GREEN}python${NC}             Generate Python SDK"
    echo -e "  ${GREEN}go${NC}                 Generate Go SDK"
    echo -e "  ${GREEN}clean${NC}              Clean generated SDKs"
    echo -e "  ${GREEN}help${NC}               Show this help message"
}

# Clean previously generated SDKs
clean_sdks() {
    echo -e "${CYAN}Cleaning previously generated SDKs...${NC}"
    rm -rf "${SDK_OUTPUT_DIR}"
    mkdir -p "${SDK_OUTPUT_DIR}/typescript"
    mkdir -p "${SDK_OUTPUT_DIR}/python"
    mkdir -p "${SDK_OUTPUT_DIR}/go"
}

# Generate TypeScript SDK
generate_typescript_sdk() {
    read_versions
    echo -e "${CYAN}Generating TypeScript SDK...${NC}"

    openapi-generator-cli generate \
        -i "${OPENAPI_FILE}" \
        -g typescript-fetch -o ./sdks/typescript/src/typescript-fetch \
        --additional-properties=\
typescriptThreePlus=true,\
useSingleRequestParameter=true,\
withInterfaces=true,\
useObjectParameters=true,\
supportsES6=true,\
modelPropertyNaming=original,\
paramNaming=original,\
withNodeImports=true,\
npmName="@${ORG_NAME}/${SERVICE_NAME}-typescript-sdk",\
npmVersion="${TS_VERSION}"

    echo -e "${GREEN}TypeScript SDK generated successfully!${NC}"
}

# Generate Python SDK
generate_python_sdk() {
    read_versions
    echo -e "${CYAN}Generating Python SDK...${NC}"

    openapi-generator-cli generate \
        -i "${OPENAPI_FILE}" \
        -g python \
        -o "${SDK_OUTPUT_DIR}/python" \
        --additional-properties=\
packageName="${ORG_NAME}_${SERVICE_NAME}_sdk",\
projectName="${ORG_NAME}-${SERVICE_NAME}-sdk",\
packageVersion="${PYTHON_VERSION}",\
pythonAtLeast=3.7,\
generateSourceCodeOnly=true

    echo -e "${GREEN}Python SDK generated successfully!${NC}"
}

# Generate Go SDK
generate_go_sdk() {
    read_versions
    echo -e "${CYAN}Generating Go SDK...${NC}"

    openapi-generator-cli generate \
        -i "${OPENAPI_FILE}" \
        -g go \
        -o "${SDK_OUTPUT_DIR}/go" \
        --additional-properties=\
packageVersion="${GO_VERSION}",\
isGoSubmodule=true,\
generateInterfaces=true

    echo -e "${GREEN}Go SDK generated successfully!${NC}"
}

# Generate all SDKs
generate_all() {
    generate_typescript_sdk
    generate_python_sdk
    generate_go_sdk
    echo -e "${GREEN}All SDKs generated successfully!${NC}"
}

# Check if openapi-generator-cli is installed
check_dependencies() {
    if ! command -v openapi-generator-cli &> /dev/null; then
        echo -e "${YELLOW}openapi-generator-cli is not installed. Installing...${NC}"
        npm install @openapitools/openapi-generator-cli -g
    fi
}

# Main script execution
check_dependencies

case "$1" in
    "all")
        generate_all
        ;;
    "typescript")
        clean_sdks
        generate_typescript_sdk
        ;;
    "python")
        clean_sdks
        generate_python_sdk
        ;;
    "go")
        clean_sdks
        generate_go_sdk
        ;;
    "clean")
        clean_sdks
        ;;
    "help"|"-h"|"--help"|"")
        show_help
        ;;
    *)
        echo -e "${YELLOW}Unknown command: $1${NC}"
        echo "Run './scripts/generate-sdks.sh help' for usage information"
        exit 1
        ;;
esac

exit 0
