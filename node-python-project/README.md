# node-python-project/README.md

# Node-Python Project

Этот проект объединяет Node.js и Python для создания мощного приложения. 

## Структура проекта

- **src/**: Исходный код приложения.
  - **node/**: Код на Node.js.
    - **app.js**: Основной файл приложения на Node.js.
    - **services/**: Сервисы для обработки логики приложения.
  - **python/**: Код на Python.
    - **__init__.py**: Инициализация пакета Python.
    - **requirements.txt**: Зависимости для Python.
    - **scripts/**: Скрипты на Python.
      - **main.py**: Основной скрипт на Python.

- **tests/**: Тесты для приложения.
  - **node/**: Тесты для Node.js.
    - **test.js**: Тесты для приложения на Node.js.
  - **python/**: Тесты для Python.
    - **test_main.py**: Тесты для скрипта на Python.

## Установка

1. Убедитесь, что у вас установлены Node.js и Python.
2. Установите зависимости для Node.js:
   ```bash
   npm install
   ```
3. Установите зависимости для Python:
   ```bash
   pip install -r src/python/requirements.txt
   ```

## Запуск

- Для запуска приложения на Node.js:
  ```bash
  node src/node/app.js
  ```

- Для запуска скрипта на Python:
  ```bash
  python src/python/scripts/main.py
  ```

## Тестирование

- Для запуска тестов на Node.js:
  ```bash
  npm test
  ```

- Для запуска тестов на Python:
  ```bash
  python -m unittest discover -s tests/python
  ```