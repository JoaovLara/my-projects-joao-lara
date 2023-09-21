document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    const key = event.key;

    // Mapear teclas para as funções dos botões correspondentes
    switch (key) {
        case '0':
            insert('0');
            break;
        case '1':
            insert('1');
            break;
        case '2':
            insert('2');
            break;
        case '3':
            insert('3');
            break;
        case '4':
            insert('4');
            break;
        case '5':
            insert('5');
            break;
        case '6':
            insert('6');
            break;
        case '7':
            insert('7');
            break;
        case '8':
            insert('8');
            break;
        case '9':
            insert('9');
            break;
        case '+':
            insert('+');
            break;
        case '-':
            insert('-');
            break;
        case '*':
            insert('*');
            break;
        case '/':
            insert('/');
            break;
        case '.':
            insert('.');
            break;
        case 'Enter':
            calcular();
            break;
        case 'Backspace':
            back();
            break;
        case 'Escape':
            clean();
            break;
    }
}