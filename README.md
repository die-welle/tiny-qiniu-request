# tiny-qiniu-request

tiny-qiniu for [rc-upload](https://github.com/react-component/upload/blob/master/README.md#customrequest) or [antd upload component](https://ant.design/components/upload/#customRequest) `customRequest` property.


## Installation

```bash
yarn add tiny-qiniu tiny-qiniu-request
```


## Usage

`tiny-qiniu-request` should work together with [rc-upload](https://github.com/react-component/upload/blob/master/README.md) or [antd upload component](https://ant.design/components/upload/)

```js
import React, { Component } from 'react';
import { Upload } from 'antd';
import tinyQiniuRequest from 'tiny-qiniu-request';

const request = tinyQiniuRequest({
    name: 'my_bucket', // qiniu bucket name, requried
    domain: 'http://cdn.awesome.com', // qiniu bucket domain, requried
    uptokenUrl: 'http://localhost/api/uptoken',
});

export default class MyUpload extends {
    render() {
        <Upload
            customRequest={request}
            // {...other}
        />
    }
}
```

##### Signature

`tinyQiniuRequest(option)`

The `option` usage is the same with [tiny-qiniu constructor option](https://github.com/die-welle/tiny-qiniu#tinyqiniuconstructoroptions) 


## Related Projects

- [tiny-qiniu](https://github.com/die-welle/tiny-qiniu)


## License

MIT
