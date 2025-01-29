# From https://shaneutt.com/blog/rust-fast-small-docker-image-builds/

# ------------------------------------------------------------------------------
# Cargo Build Stage
# ------------------------------------------------------------------------------

FROM messense/rust-musl-cross:x86_64-musl as cargo-build

WORKDIR /usr/src/reacher

# Copy the entire workspace
COPY . .

# Set environment variables
ENV SQLX_OFFLINE=true
ENV CARGO_NET_GIT_FETCH_WITH_CLI=true

# Build the project
RUN cargo build --bin reacher_backend --release --target=x86_64-unknown-linux-musl

# ------------------------------------------------------------------------------
# Final Stage
# ------------------------------------------------------------------------------

FROM zenika/alpine-chrome:123

WORKDIR /home/reacher/

USER root

# Install chromedriver
# https://github.com/Zenika/alpine-chrome/blob/master/with-chromedriver/Dockerfile
RUN apk add --no-cache chromium-chromedriver

# Copy only the necessary files from the builder
COPY --from=cargo-build /usr/src/reacher/target/x86_64-unknown-linux-musl/release/reacher_backend .
COPY --from=cargo-build /usr/src/reacher/backend/docker.sh .
COPY --from=cargo-build /usr/src/reacher/backend/backend_config.toml .

# Set permissions
RUN chown chrome:chrome reacher_backend && \
    chown chrome:chrome docker.sh && \
    chmod +x reacher_backend docker.sh

# User chrome was created in zenika/alpine-chrome
USER chrome

# Set runtime environment variables
ENV RUST_LOG=reacher=info
ENV RCH__HTTP_HOST=0.0.0.0
# Currently this Dockerfile is mainly used for single-shot verifications, so we
# disable the worker by default.
ENV RCH__WORKER__ENABLE=false

EXPOSE 8080

# Remove entrypoint from parent Docker file
# https://stackoverflow.com/questions/40122152/how-to-remove-entrypoint-from-parent-image-on-dockerfile
ENTRYPOINT []

CMD ["./docker.sh"]
