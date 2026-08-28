# timurgirenko-github-card

Визитка-портфолио, стилизованная под страницу репозитория GitHub.

## Запуск

```bash
npm install
npm run dev
```

## Структура

- `src/components/` — React-компоненты (по одному на блок страницы)
- `src/styles/` — CSS отдельными файлами, каждый подключён в свой компонент

## Что поправить под себя

- Контакты (email, Telegram, ссылка на резюме) в `src/components/Readme.jsx`
- Список проектов — там же, в `ProjectsSection`
- Тексты about/experience — в компонентах `AboutSection` / `ExperienceSection`
