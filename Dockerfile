FROM wordpress:4.9

RUN apt-get update && \
    apt-get install -y \
      git \
      curl \
      mailutils \
      wget \
      vim && \
    apt-get clean

RUN curl -Lsf 'https://storage.googleapis.com/golang/go1.8.3.linux-amd64.tar.gz' | tar -C '/usr/local' -xvzf -
ENV PATH /usr/local/go/bin:$PATH
RUN go get github.com/mailhog/mhsendmail
RUN cp /root/go/bin/mhsendmail /usr/bin/mhsendmail

ADD . /var/www/html
WORKDIR /var/www/html
EXPOSE 80
