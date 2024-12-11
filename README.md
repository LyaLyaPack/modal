# Способ подключения

Подключить к html файлу `modal.js`. Добавить в html файл эдемент с айди `modalContainer` и кнопку с айди `openModalBtn` для открытия модального окна.

## Таблица настроек

| Параметр                | Описание                                                                 | Тип    | Пример значения       |
|-------------------------|--------------------------------------------------------------------------|--------|-----------------------|
| `title`                 | Заголовок модального окна                                                | String | `Title"`       |
| `content`               | Текст содержимого модального окна                                        | String | `text text text text text text"` |
| `closeButtonText`       | Текст кнопки закрытия                                                     | String | `"Close"`             |
| `backgroundColor`       | Цвет фона модального окна                                                 | String | `"#fefefe"`           |
| `textColor`             | Цвет текста в модальном окне                                              | String | `"#000000"`              |
| `overlayColor`          | Цвет фонового затемнения                                                  | String | `"rgba(0, 0, 0, 0.5)"`|
| `width`                 | Ширина модального окна (в пикселях)                                       | Number | `500`                  |
| `height`                | Высота модального окна (в пикселях)                                       | Number | `300`                  |
| `titleFontSize`         | Размер шрифта заголовка                                                  | Number | `24`                   |
| `contentFontSize`       | Размер шрифта текста содержимого                                         | Number | `16`                   |
| `borderRadius`          | Скругление углов модального окна (в пикселях)                             | Number | `10`                   |
| `borderEnabled`         | Включена ли обводка модального окна                                       | Boolean| `true`                |
| `border.width`          | Ширина обводки модального окна (в пикселях)                               | Number | `2`                    |
| `border.color`          | Цвет обводки модального окна                                              | String | `"#888888"`              |
| `border.style`          | Стиль обводки модального окна (например, `solid`, `dashed`, `dotted`)      | String | `"solid"`             |
| `closeButton.backgroundColor` | Цвет фона кнопки закрытия                                    | String | `"#ff0000"`           |
| `closeButton.textColor`  | Цвет текста кнопки закрытия                                               | String | `"#ffffff"`              |
| `closeButton.fontSize`  | Размер шрифта кнопки закрытия                                            | Number | `16`                   |
| `closeButton.padding`   | Отступы кнопки закрытия (в пикселях)                                      | Number | `10`                   |
| `closeButton.borderRadius` | Скругление углов кнопки закрытия (в пикселях)                      | Number | `5`                    |
| `closeButton.borderEnabled` | Включена ли обводка кнопки закрытия                                       | Boolean| `true`                |
| `closeButton.border.width` | Ширина обводки кнопки закрытия (в пикселях)                               | Number | `2`                    |
| `closeButton.border.color` | Цвет обводки кнопки закрытия                                              | String | `"#888888"`              |
| `closeButton.border.style` | Стиль обводки кнопки закрытия (например, `solid`, `dashed`, `dotted`)      | String | `"solid"`             |

