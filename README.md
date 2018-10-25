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
- เพื่อ encapsulate โค้ด
- เพื่อ reuse โค้ด
- เพื่อป้องกันชื่อตัวแปรชนกันจากหลายไฟล์
+ ใช้มาตรฐาน CommonJS ในการสร้าง module
    - require()
    - exports
    - module.exports