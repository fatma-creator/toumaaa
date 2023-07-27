$(document).ready(function () {
  var favs = Array.from(document.querySelectorAll(".fa-heart"));

  $(".quantity-btn").click(function () {
    const itemQuantity = parseInt($(this).siblings(".quantity").text());
    const newItemQuantity =
      $(this).data("action") === "plus" ? itemQuantity + 1 : itemQuantity - 1;
    if (newItemQuantity >= 0) {
      $(this).siblings(".quantity").text(newItemQuantity);
      updateTotalPrice();
    }
  });
  for (let fas of favs) {
    fas.addEventListener("click", function () {
      if (fas.style.color == "black") {
        fas.style.color = "red";
      } else {
        fas.style.color = "black";
      }
    });
  }
  $(".delete-btn").click(function () {
    $(this).closest(".cart-item").remove();
    updateTotalPrice();
  });
  function updateTotalPrice() {
    let totalPrice = 0;
    $(".cart-item").each(function () {
      const itemPrice = parseFloat(
        $(this).find(".item-price").text().replace("DT", "")
      );
      const itemQuantity = parseInt($(this).find(".quantity").text());
      totalPrice += itemPrice * itemQuantity;
    });
    $("#total").text(totalPrice.toFixed(2) + "DT");
  }
});
