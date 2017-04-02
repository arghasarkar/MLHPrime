var root_url = 'https://mlhprime2017.herokuapp.com/api/keys/';

function composeBody(parameters) {
    var formBody = [];
    for (var property in parameters) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(parameters[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return formBody;
}

function loginChecker() {
    var url = root_url + 'get_id';

    var params = {
        email: document.getElementById("inputEmail").value,
        password: document.getElementById("inputPassword").value
    };

    var formBody = composeBody(params);

    var request = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: formBody
    };

    fetch(url, request).then(function (res) {
        return res.json();
    }).then(function (json) {
        console.log(json);
    });
}


// var data = null;
// $('form').submit(function () {
//     data = $(this).serializeArray();
//     // console.log(data);
//     // console.log($(this).serializeArray());
//
// });
//
// $('.test').on('click', function () {
//     console.log(data);
// });




