### easy-verify

A js library for common regs,一个常用的正则库

### Install && Use(安装&&使用)

```
npm i easy-verify --save
```

```js
import verify from 'easy-verify'

verify.isCellPhone(cellphone)
// or
import { isCellPhone } from 'easy-verify'

isCellPhone(cellphone)
// or
const verify = require('easy-verify')

verify.isCellPhone(cellphone)
```

### Main method(主要方法)

**All methord return a boolean**

**isEmpty(input: string): boolean**

**isCellPhone(input: string): boolean**

**isTelPhone(input: string): boolean**

**isZipCode(input: string): boolean**

**isIdNum(input: string): boolean**
