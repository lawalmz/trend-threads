document.querySelector(".b").addEventListener("click", function () {
    if (window.opener) {
      var cartItemsContainer = window.opener.document.querySelector("#cart-items-container");
      if (cartItemsContainer) {
        cartItemsContainer.innerHTML = "hello world";
        console.log("hello");
        alert("wdfe");
      } else {
        console.error("Target element not found in opening window");
      }
    } else {
      console.error("Opening window not available");
    }
  });
  