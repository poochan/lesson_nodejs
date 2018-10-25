# Lesson Node js.
Node.js ใช้ Google V8 JavaScript Engine
## ข้อดี
- ประมวลผล JavaScript รวดเร็ว
- ใช้ JavaScript เขียน Front-end และ Back-end
- Non-blocking I/O
- เหมาะกับ Real-time Application
## ข้อเสีย
- เป็น Single-thread ใช้ CPU เดียว
- ไม่เหมาะกับ CPU-Intensive task **แก้ด้วย cluster module
- Callback Hell ** แก้ด้วย promiss

## Closure
Closure คือฟังก์ชั่นที่รวมถึง Environment ของ parent

## Node module
+ เพื่อ encapsulate โค้ด
+ เพื่อ reuse โค้ด
+ เพื่อป้องกันชื่อตัวแปรชนกันจากหลายไฟล์
+ ใช้มาตรฐาน CommonJS ในการสร้าง module
    - require()
    - exports
    - module.exports

## ประเภทของ module
+ Core Module
    - มีมากับ Node.js เลย
    - fs, net, http, url ดูเพิ่มใน https://nodejs.org/api/
+ File module
    - ระบุ part ไปยังไฟล์
    - var = require('./say');
    - var = require('./modules/say');
    - var = require('./home/user/modules/say');
+ Folder Module
    - ระบุ path ไปยังโฟลเดอร์ที่มีไฟล์ package.json
    - var say = require('./modules/action'); จะไปเรียก package.json ตาม config

## NPM
- การระบุเลขเวอร์ชันโมดูล
```javascript
$ npm install express@4.13.10
```
+ ความหมาย
    - 4 คือ major
    - 13 คือ minor
    - 10 คือ patch

```javascript
$ npm install express@3.1.x
```
- ความหมาย ขอให้เป็น 3.1 และ patch ใหม่สุด

- การระบุช่วง <, <=, >, >=
```javascript
$ npm install express@">=4.12.0"

$ npm install express@"<4.12.0"
```

- การระบุช่วง ~ (tilde) ถ้าระบุ minor จะเลือก patch สูงสุดสำหรับ minor นั้น
```javascript
$ npm install express@"~1.2.3"
```
- ความหมาย >= 1.2.3 < 1.3.0

```javascript
$ npm install express@"~1.2"
```
- ความหมาย >= 1.2.0 < 1.3.0

- การระบุช่วง ^ (caret) จะอัพเดทส่วนที่ต่ำกว่า "หลักซ้านสุดที่ไม่ใช่ศูนย์"
```javascript
$ npm install express@"^1.2.3"
```
- ความหมาย >= 1.2.3 < 2.0.0

```javascript
$ npm install express@"^0.2.3"
```
- ความหมาย >= 0.2.3 < 0.3.0

+ latest ความหมายจะ เอาเวอร์ชั่นล่าสุดมาให้