### @qietuzi/validate

A js library for common regs,一个常用的正则库

### Install && Use(安装&&使用)

```
npm i@qietuzi/validate --save
```

```js
import validate from '@qietuzi/validate'

validate.isCellPhone(cellphone)
// or
import { isCellPhone } from '@qietuzi/validate'

isCellPhone(cellphone)
// or
const validate = require('@qietuzi/validate')

validate.isCellPhone(cellphone)
```

### Main method(主要方法)

**All methord return a boolean**

**isQQ(input: string): boolean**
Tencent qq number

**isEmpty(input: string): boolean**

**isIdNum(input: string): boolean**
China id number

**isZipCode(input: string): boolean**
China zip code

**isTelPhone(input: string): boolean**
China telphone

**isCellPhone(input: string): boolean**
China cellphone
