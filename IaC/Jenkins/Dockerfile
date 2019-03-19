FROM node:current-alpine

RUN apk add wget unzip

RUN mkdir /root/packer
WORKDIR /root/packer

RUN wget https://releases.hashicorp.com/packer/1.3.5/packer_1.3.5_linux_amd64.zip
RUN wget https://releases.hashicorp.com/terraform/0.11.13/terraform_0.11.13_linux_amd64.zip
RUN apk update
RUN unzip packer_1.3.5_linux_amd64.zip
RUN unzip terraform_0.11.13_linux_amd64.zip
RUN mv packer /usr/local/bin/packer
RUN mv terraform /usr/local/bin/terraform
RUN rm packer_1.3.5_linux_amd64.zip
RUN rm terraform_0.11.13_linux_amd64.zip
RUN apk update && apk upgrade && \
 apk add bash git openssh

