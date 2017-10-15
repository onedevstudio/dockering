# Docker WordPress

> Docker for WordPress using gulpjs and docker-compose

![Docker](http://blog.rivendel.com.br/wp-content/uploads/2015/01/docker-image.png)

## Install

Using `curl`

```
mkdir my-wp-project
cd my-wp-project/
sh -c "`curl -fsSL https://raw.githubusercontent.com/onedevstudio/wp-docker/master/install.sh`"
```

Using `wget`

```
mkdir my-wp-project
cd my-wp-project/
sh -c "`wget -O - --no-check-certificate https://raw.githubusercontent.com/onedevstudio/wp-docker/master/install.sh`"
```

or

1. Clone this repo: `git clone https://github.com/onedevstudio/wp-docker.git`
2. Go to folder: `cd wp-docker/`
3. Remove origin: `git remote rm origin`
4. Add your repo origin: `git remote add origin https://github.com/YOUR/REPOSITORY.git`
5. Build docker using [docker-compose](https://docs.docker.com/compose/): `docker-compose up -d --build`

## Installation and use of [Gulpjs](http://gulpjs.com/)

```
cd src/
npm install
```
or
```
yarn
```

### gulp tasks

- [x] gulp clean
- [x] gulp stylesheets
- [x] gulp scripts
- [x] gulp scripts:vendor
- [x] gulp images
- [x] gulp fonts
- [x] gulp build
- [x] gulp watch
- [x] gulp default

Enjoy! :smiley:

## License

[MIT License](/LICENSE) © Fernando Moreira
