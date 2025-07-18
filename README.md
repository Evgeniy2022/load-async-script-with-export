# Async Script Loader

A tiny script for loading 3rd party scripts asynchronously such as loading Google Maps or reCaptcha script. 

[Clone of](https://github.com/delowardev/load-async-script.git)

# Usage:

```javascript

// import
import loadAsyncScript from 'load-async-script-with-export';

interface ExportedObject {
	expVar1: string 
	expVar2: string 
}
// usage
const { expVar1, expVar2 } = await loadAsyncScript<ExportedObject>( '__SCRIPT_SRC__', { 
    globalName: 'globalExportingName', 
});


```
