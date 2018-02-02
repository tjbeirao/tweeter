$(document).ready(function () {

    $('input').on('click', () => {
    })

    $("textarea").on("keyup", function () {
        $("main span").text((140 - $(this).val().length));
        if ((140 - $(this).val().length) < 0) {
            $("main span").addClass('invalid');
        } else {
            $("main span").removeClass("invalid");
        }
    });
});