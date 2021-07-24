# 6210450431_hw3

## Project setup
```
npm install
```

##  โครงสร้างไฟล์
```
- directory public
    เก็บไฟล์ data.json เป็นข้อมูลเริ่มต้นของระบบรายรับ - รายจ่าย
- directory components
    เก็บไฟล์ไว้ทั้งหมด 3 ไฟล์ ได้แก่ DataCreateTable.vue, Header.vue, Input.vue
    * DataCreateTable.vue 
        เป็นการสร้างตารางแสดงข้อมูลรายรับ-รายจ่าย
    * Header.vue
        เป็นส่วนของของหัวข้อเว็บ
    * Input.vue
        เป็นการทำงานของการกรอกข้อมูลราย-รายจ่ายลงไป
- directory store
    เก็บไฟล์ dataInแExp.js เป็นตัวส่งข้อมูลให้กับ components ต่างๆและเรียกไฟล์จาก directory public
-directory vue views
    มีไฟล์ Home.vue, App.vue
    * Home.vue
        เป็นส่วนแสดงผลทุกอย่าง
```

## วิธีการรัน
```
- เปิด cmp / terminal
- cd เข้าในโฟลเดอร์ของ Project vue
- ใส่คำสั่ง npm run serve
- และเข้าไปใน http://localhost:8080/
- ถ้าหากจะปิดโปรแกรม ให้กด Ctrl+c  แล้วพิมพ์ Y
- โปรแกรมก็จะหยุดการ run ทันที
```

## วิธีการใช้งานเว็บ
```
- กรอกข้อมูล 
    * date
    * description
    * income (กรอกเฉพาะตัวเลขเท่านั้น)
    * expenses (กรอกเฉพาะตัวเลขเท่านั้น)
- กรอก income หรือ expenses อย่างใดอย่างนึงก็ได้
- กดปุ่ม submit
- ข้อมูลจะแสดงผลที่ตารางด้านล่าง
- สามารถดู total แต่ละหลายวันได้
```

