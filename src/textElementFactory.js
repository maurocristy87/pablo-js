export const div = text => {
    const div = document.createElement('div');

    if (text !== undefined) {
        div.innerText = text;
    }
    

    return div;
}

export const paragraph = text => {
    const p = document.createElement('p');
    p.innerText = text;

    return p;
}

export const span = text => {
    const span = document.createElement('span');
    span.innerText = text;

    return span;
}