$('.show_reg').click(function (e) {
    e.preventDefault();
    $('.login_form').addClass('none');
    $('.register_form').removeClass('none');
})
$('.none_reg').click(function (e) {
    e.preventDefault();
    $('.register_form').addClass('none');
    $('.login_form').removeClass('none');
})
$('input[type="image"]').click(function (e) {
    e.preventDefault();
    $('.in_body').removeClass('none');
})
$('.btn-back').click(function (e) {
    e.preventDefault();
    $('.msg2').addClass('none');
    $('.in_body').addClass('none');
})

/*
Авторизация
*/
$('.signin_btn').click(function (e) {
    e.preventDefault();
    $(`input`).removeClass('error');

    let login = $('input[name="signin_login"]').val(),
        pass = $('input[name="signin_pass"]').val();

    let formData = new FormData();
    formData.append('signin_login', login);
    formData.append('signin_pass',pass);

    $.ajax({
        url: 'backend/signin.php',
        type: 'POST',
        dataType: 'json',
        processData: false,
        contentType: false,
        cache: false,
        data: formData,
        success (data) {
            if(data.status){
                document.location.href = '/profile.php';
            } else {
                if(data.type === 1){
                    data.fields.forEach(function (field) {
                        $(`input[name="${field}"]`).addClass('error');
                    });
                }
                $('.msg1').addClass('msg-err').removeClass('none').text(data.message);
            }
        }
    });
});
/*
Регистрация
*/
$(function(){
    $('input[name="signup_phone"]').mask("+7 (999) 999-99-99");
});

/*
Получение аватарки с поля
*/
let avatar = false;

$('input[name="avatar"]').change(function (e) {
    avatar = e.target.files[0];
});

$('.signup_btn').click(function (e) {
    e.preventDefault();
    $(`input`).removeClass('error');
    $('.msg2').addClass('none');

    let login = $('input[name="signup_login"]').val(),
        name = $('input[name="name"]').val(),
        email = $('input[name="email"]').val(),
        phone = $('input[name="signup_phone"]').val(),
        pass = $('input[name="signup_pass"]').val(),
        pass_confirm = $('input[name="signup_pass_confirm"]').val();

    let formData = new FormData();
    formData.append('signup_login', login);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('signup_phone', phone);
    formData.append('signup_pass',pass);
    formData.append('signup_pass_confirm', pass_confirm);
    formData.append('avatar',avatar);

    $.ajax({
        url: 'backend/signup.php',
        type: 'POST',
        dataType: 'json',
        processData: false,
        contentType: false,
        cache: false,
        data: formData,
        success (data) {
            if(data.status){
                document.location.href = '/profile.php';
            } else {
                if(data.type === 1){
                    data.fields.forEach(function (field) {
                        $(`input[name="${field}"]`).addClass('error');
                    });
                }
                $('.msg2').addClass('msg-err').removeClass('none').text(data.message);
            }
        }
    });
});
let photo = false;

$('input[name="photo"]').change(function (e) {
    photo = e.target.files[0];
});

$('.btn-add-photo').click(function (e) {
    e.preventDefault();
    $('.msg2').addClass('none');

    let formData = new FormData();

    formData.append('photo',photo);

    $.ajax({
        url: 'backend/add_photo.php',
        type: 'POST',
        dataType: 'json',
        processData: false,
        contentType: false,
        cache: false,
        data: formData,
        success (data) {
            if(data.status){
                document.location.href = '/profile.php';
            } else {
                $('.msg2').addClass('msg-err').removeClass('none').text(data.message);
            }
        }
    });
});

$('.btn-sub').click(function (e) {
    e.preventDefault();

    let login = $('input[name="Login"]').val(),
        id = $('input[name="ID"]').val();

    let formData = new FormData();
    formData.append('ID',id);

    $.ajax({
        url: 'backend/add_sub.php',
        type: 'POST',
        dataType: 'json',
        processData: false,
        contentType: false,
        cache: false,
        data: formData,
        success (data) {
            if(data.status){
                document.location.href = '/another_profile.php?ID='+id+'&Login='+login;
            }
        }
    });
});

$('.btn-not_sub').click(function (e) {
    e.preventDefault();

    let login = $('input[name="Login"]').val(),
        id = $('input[name="ID"]').val();

    let formData = new FormData();
    formData.append('ID',id);

    $.ajax({
        url: 'backend/not_sub.php',
        type: 'POST',
        dataType: 'json',
        processData: false,
        contentType: false,
        cache: false,
        data: formData,
        success (data) {
            if(data.status){
                document.location.href = '/another_profile.php?ID='+id+'&Login='+login;
            }
        }
    });
});

$('.comment-s').click(function (e) {
    e.preventDefault();

    let comment_text = $('textarea[name="comment_text"]').val(),
        user_id = $('input[name="user_ID"]').val(),
        ph_id = $('input[name="photo_ID1"]').val();

    let formData = new FormData();
    formData.append('comment_text',comment_text);
    formData.append('photo_ID1',ph_id);
    $.ajax({
        url: 'backend/add_comment.php',
        type: 'POST',
        dataType: 'json',
        processData: false,
        contentType: false,
        cache: false,
        data: formData,
        success (data) {
            if(data.status){
                document.location.href = '/this_photo.php?Photo_ID='+ph_id+'&User_ID='+user_id;
            } else {
                if(data.type === 1){
                    data.fields.forEach(function (field) {
                        $(`textarea[name="${field}"]`).addClass('error');
                    });
                }
            }
        }
    });
});

