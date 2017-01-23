# Docker WordPress

> Docker for WordPress using GulpJS and docker-compose

![Docker](http://blog.rivendel.com.br/wp-content/uploads/2015/01/docker-image.png)

## Install

Using `curl`

```
mkdir my-wp-project
cd my-wp-project/
sh -c "`curl -fsSL https://raw.githubusercontent.com/nandomoreirame/docker-wordpress/master/install.sh`"
```

Using `wget`

```
mkdir my-wp-project
cd my-wp-project/
sh -c "`wget -O - --no-check-certificate https://raw.githubusercontent.com/nandomoreirame/docker-wordpress/master/install.sh`"
```

## Install GulpJS

```
cd src/
npm install
```

## TODO gulp tasks

 - [x] stylesheets
 - [ ] javascripts
 - [ ] javascript lint
 - [ ] images compress

Enjoy! :smiley:

## License

[MIT License](/LICENSE) © Fernando Moreira
