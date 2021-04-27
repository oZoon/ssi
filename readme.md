# Cервис погоды


## описание работы сервиса
```
в файле description.pdf описано задание
```


## Зависимости

* react native
* redux
* thunk


## Скачивание

```
git clone https://github.com/oZoon/ssi.git
```


## Настройка секретного ключа

```
в каталоге src/lib создать файл secret.js, в файл добавить строку
export const ACCESS_KEY = 'свой секретный ключ с погодного сайта openweathermap.org';
```



---

## ChangeLog

### version 1.0.3

> сделано:
- при запуске - геолокация и погодные данные
- поиск погоды по названию города
- сохранение данных всех запрошенных городов в redux

> не сделано/частично сделано (по запросу):
- проверка работоспособности на мобильных устройствах и последующая корректировка кодовой базы

---
