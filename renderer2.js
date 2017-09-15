firebase.database().ref().child("Orders").on('child_added', function(snapshot) {
    if (snapshot.exportVal().status == 0) {
        newOrder(snapshot);
    }
});
function newOrder(order) {
    var info = order.exportVal();
    createCard(info, order.key);
}
function createCard(info, id) {
    var orderCard = "<div class='order' id='" + id + "'><div class='quantity' >" + info.quantity.substring(0, 1) + "</div><div class='other' ><div class='drinkname'>Milk Tea</div><div class='options' >-Black Tea</div><div class='customer' >(adaminsky)</div></div><button type='button' class='close'>Close</button></div>";
    $("#cards").append(orderCard);
    $(".close").on("click", function() {
        var location = $(this).parent().attr("id");
        completeOrder(location);
    });
}
function completeOrder(location) {
    firebase.database().ref().child("Orders").child(location).update({
        status: 1
    });
    $("[id='" + location + "']").remove();
}
