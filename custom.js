
$(".event-image").fadeIn(function () {

});
$(".buy").fadeIn(function () {

});
$("#date h3").mouseenter(function () {
    $(this).css("color", "#f1c40f");
});
$("#date h3").mouseleave(function () {
    $(this).css("color", "white");
});
$("#concert-title span").mouseenter(function () {
    $(this).css("color", "#f1c40f");
});
$("#concert-title span").mouseleave(function () {
    $(this).css("color", "white");
});

function ticketSale() {
    let name = prompt("Cual es tu nombre?:");
    let email = prompt("Enter email:");
    let ticket_qty = prompt("Cuantos tickets quiere:");
    if (name !== "" || email !== "" || ticket_qty !== "") {
        $("#name").html(name);
        $("#email").html(email);
        $("#quantity").html(ticket_qty);
        $(".buy h2").html("Congrats order placed!");
    }
};
$(".buy").click(ticketSale);


$(".daily-lineup").click(function () {
    let picture = $(this).attr("data-pictures");
    console.log(picture);
    $("." + picture).slideDown();
});
$(".daily-lineup").dblclick(function () {
    let picture = $(this).attr("data-pictures");
    $("." + picture).slideUp();
});