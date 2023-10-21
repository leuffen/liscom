# LISCom - Leuffen Interactive Site Components

Interactive Site Components manageed by pure CSS.


## Contents

- [Slideshow]()
- [Details Title]()


### Slideshow

```html
<div class="slideshow">
    <img ...>
    <img ...>
</div>
```

### Details Title

```html
<p data-details-title="Title">Some text epanded if title was clicked</p>
```


### Loader


### Typewriter Element

```html
  <typewriter-element
    data-write-speed="200"
    data-delete-speed="50"
    data-pause-before-delete="1000"
    data-pause-before-write="500">
    Hallo,Welt,TypeScript,WebComponent
  </typewriter-element>
```


### Scrollspy

Create list of <ul><a> elements with data-scrollspy-name attribute. The name is used to find the corresponding element.

```html

<ul>
    <liscom-scrollspy></liscom-scrollspy>
</ul>


<div data-scrollspy-name="title">Title</div>
```


### Scroll-to-top

```html
<liscom-scroll-to-top></liscom-scroll-to-top>
```
