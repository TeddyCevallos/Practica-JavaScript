'use strict'

window.addEventListener('load', function() {

    var form = document.querySelector('#form-model');
    var box = document.querySelector('#id01');
    var bo = document.querySelector('#bo');
    var info = document.querySelector('#info');
    var submit = document.querySelector('#submit');

    info.style.display = 'none';
    bo.style.display = 'none';

    if (form != null) {
        submit.onclick = ('submit', function() {

            var fullname = document.querySelector('#fullname').value;
            var mail = document.querySelector('#email').value;
            var years = document.querySelector('#year').value;
            var city = document.querySelector('#city').value;
            var dato = [fullname, mail, years, city];

            if (fullname.trim() == null || fullname.trim().length == 0) {
                document.querySelector('#error-name').innerHTML = "Ingresar nombre correcto"
                return false;
            } else {
                document.querySelector('#error-name').style.display = 'none';
            }

            if (mail.trim() == null || mail.trim().length == 0) {
                document.querySelector('#error-mail').innerHTML = "Ingresar el correo correcto"
                return false;
            } else {
                document.querySelector('#error-mail').style.display = 'none';
            }
            if (years.trim() == null || years <= 0 || isNaN(years)) {
                document.querySelector('#error-number').innerHTML = "Ingresar la edad correcta"
                return false;
            } else {
                document.querySelector('#error-number').style.display = 'none';
            }
            if (city.trim() == null || city.trim().length == 0) {
                document.querySelector('#error-city').innerHTML = "Ingresar Ciudad correcta"
                return false;
            } else {
                document.querySelector('#error-city').style.display = 'none';
            }

            var p = document.createElement('li');
            p.append(dato[0]);
            bo.append(p);

            var name = document.querySelector('#name span');
            var email = document.querySelector('#email span');
            var year = document.querySelector('#year span');
            var cit = document.querySelector('#cit span');

            name.innerHTML = fullname;
            email.innerHTML = mail;
            year.innerHTML = years;
            cit.innerHTML = city;

            info.style.display = 'block';
            bo.style.display = 'block';
            box.style.display = 'none';
        });
    }

});

$(document).ready(function() {
    $('.slider1').bxSlider({
        mode: 'fade',
    });
    $('.slider2').bxSlider({
        mode: 'fade',
    });
    $('.slider3').bxSlider({
        mode: 'fade',
    });
    $('.slider4').bxSlider({
        mode: 'fade',
    });
    $('.slider4').bxSlider({
        mode: 'fade',
    });
    $('.slider5').bxSlider({
        mode: 'fade',
    });
});
