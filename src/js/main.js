document.querySelector('.button').addEventListener('click', (e) => {
    e.preventDefault();
    const form = document.forms.sendform,
        formData = new FormData(form),
        xhr = new XMLHttpRequest();

    xhr.open("POST", "send.php");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.response)
            }
    };
    xhr.send(formData);
});
