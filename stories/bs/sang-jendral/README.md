
# Editing With Ace

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ace Editor Demo</title>
    <style>
        #editor { 
            width: 500px;
            height: 400px;
        }
    </style>
</head>
<body>

<div id="editor">function foo() {
    console.log("Hello World!");
}</div>

<script src="https://cloudflare.com" type="text/javascript" charset="utf-8"></script>
<script>
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
</script>
</body>
</html>
```

Customize:

```js
editor.setOptions({
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    showPrintMargin: false,
    fontSize: "14px"
});
```

References:

- [Writing Custom Ace Editor Mode](https://www.google.com/url?sa=i&source=web&rct=j&url=https://medium.com/@jackub/writing-custom-ace-editor-mode-5a7aa83dbe50&ved=2ahUKEwifjqjr-I6VAxW_8DgGHUqjEz8Qy_kOegoIAggACAAIFRAC&opi=89978449&cd&psig=AOvVaw3u4xSgh3pv1bYeSOvdn8Df&ust=1781808710641000)

- [Kitchen Sink](https://www.google.com/url?sa=i&source=web&rct=j&url=https://ace.c9.io/build/kitchen-sink.html&ved=2ahUKEwifjqjr-I6VAxW_8DgGHUqjEz8Qy_kOegoIAggACAAIBBAE&opi=89978449&cd&psig=AOvVaw3u4xSgh3pv1bYeSOvdn8Df&ust=1781808710641000)

**From Ace**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>ACE in Action</title>
<style type="text/css" media="screen">
    #editor { 
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>
</head>
<body>

<div id="editor">function foo(items) {
    var x = "All this is syntax highlighted";
    return x;
}</div>
    
<script src="/ace-builds/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
<script>
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
</script>
</body>
</html>
```

