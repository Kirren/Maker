modules.define(
    'hello', // имя блока
    ['i-bem-dom', 'input'], // подключение зависимости

    // функция, в которую передаются имена используемых модулей
    function(provide, bemDom, Input) {
        provide(bemDom.declBlock('hello', { // декларация блока
            onSetMod: { // конструктор для описания реакции на события
                'js': {
                    'inited': function() {
                        this._input = this.findChildBlock(Input);

                        // DOM-событие, на которое будет реакция
                        this._domEvents().on('submit', function(e) {
                            // предотвращение срабатывания события по умолчанию:
                            // отправка формы на сервер с перезагрузкой страницы
                            e.preventDefault();

                            this._elem('greeting').domElem.text('Привет, ' +
                                this._input.getVal() + '!');
                        });
                    }
                }
            }
        }));
    });