# Use the official Ubuntu 22.04 image as the base image
FROM ubuntu:22.04

# Set non-interactive mode for APT to avoid interactive prompts
ARG DEBIAN_FRONTEND=noninteractive

# Install dependencies and Ruby 3.2.4
RUN apt-get update && \
    apt-get install -y \
    curl \
    gnupg2 \
    lsb-release \
    build-essential \
    libssl-dev \
    libreadline-dev \
    zlib1g-dev \
    libsqlite3-dev \
    libyaml-dev \
    libcurl4-openssl-dev \
    libffi-dev \
    git \
    unzip

RUN curl -sSL https://rvm.io/mpapis.asc | gpg2 --import -
RUN curl -sSL https://rvm.io/pkuczynski.asc | gpg2 --import -
RUN curl -sSL https://get.rvm.io | bash -s stable
RUN /bin/bash -l -c "rvm install 3.2.4" && \
    /bin/bash -l -c "rvm use 3.2.4 --default" && \
    apt-get clean

# Set up Ruby environment (for RVM)
ENV PATH /root/.rvm/rubies/ruby-3.2.4/bin:$PATH

# Create a working directory
WORKDIR /workspace
RUN bundle install
RUN bundle exec jekyll serve --baseurl=""

# Default command to run when the container starts
CMD ["bash"]
