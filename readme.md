### easy-verify
A js library for regs,一个常用的正则库
### 安装&&使用
```
npm i easy-verify --save
```

```js
import verify from 'easy-verify'

verify.isCellPhone(cellphone)
// or
import { isCellPhone } from 'easy-verify'

isCellPhone(cellphone)
```
### 主要方法

**isEmpty(input: string): boolean**

接受一个字符串,返回是否空字符串,如果传入其他类型,则返回强制转换的布尔值

**isCellPhone(input: string): boolean**

接受一个字符串,返回是否手机号码

**isTelPhone(input: string): boolean**

接受一个字符串,返回是否座机号码

**isZipCode(input: string): boolean**

接受一个字符串,返回是否邮编号码

**isIdNum(input: string): boolean**

接受一个字符串,返回是否身份证号码

    