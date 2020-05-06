# serve-last-file

As the name implies, this program serves the last file of a directory. It's useful when you just want to see the last file of a directory in your browser, for instance when you take a screenshot and want to copy the picture data or see the last recorded video without searching on your filesystem.  
For now only pictures and videos are servable but if you have a request please send a PR or open a feature request in `issues` area.

## Installation

```
sudo npm install -g serve-last-file
```


## Usage

Go in the directory of your choice (e.g. `~/Videos`) and run

```
$ serve-last-file
```

it will prompt a link, follow the link to see the file in your browswer.
Everytime you add a new file in the directory just refresh the page.