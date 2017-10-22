import { MK } from '../../../keys'

export function sendMessage(subject, text) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            console.log(true)
        } else
        if(request.readyState == 4) {
            console.log(false)
        }
    };

    request.open('POST', 'https://postmail.invotes.com/send', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    request.send(toParams({
        access_token: MK,
        subject,
        text
    }));

    return false;
}

function toParams(data) {
    const formData = [];

    for (let key in data) {
        formData.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }

    return formData.join('&');
}
