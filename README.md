# Edit Bookmark Plus

Edit Bookmark Plus is an extension for Firefox. To know more, see [extension's page on addons.mozilla.org](https://addons.mozilla.org/firefox/addon/edit-bookmark-plus/).

## Note

This is a fork of `kashiif/edit-bookmark-plus`, I removed the open welcome page, and that's all.

Since the License of original was unclear, by the time I forked it, Mon Feb 23 14:14:51 PST 2015, so I make it under MIT for the time being.


## Build xpi


### First Time Setup

1. Install [NodeJS](http://nodejs.org#download).

2. Install GruntJS by typing the following command:

```
npm install -g grunt-cli
```

3. Run the following command in the repository root directory to install all the required grunt plugins: 

```
npm install
```

This setup is required only once.

### Generating xpi
Once all the required grunt plugins are installed, type the following in the repository root directory:

```
grunt
```

A directory named dist would be created and would have the xpi file. The version of extension is obtained from package.json file.