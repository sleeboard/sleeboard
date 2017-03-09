# sleeboard

Adding amharic to your website should be easy. No more parsing websites.
This is a simple package to add amharic to your website.

## INSTALL

```
bower install --save sleeboard
```
## HOW TO INITIALIZE

```js
var Lang = sleeboard();
```

To initialize amharic typing by default add a selector while initializing

```js
var Lang = sleeboard('#amharic');
```

To enable for multiple text fields at once use a class

```js
var Lang = sleeboard('.amharic');
```

## ENABLE AND DISABLE PLUGIN

```js
var Lang = sleeboard();

function disableAmharic () {
  Lang.disable('.amharic');
}

function enableAmharic () {
  Lang.enable('.amharic');
}
```
