document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("orderForm");
  const orderList = document.getElementById("orderList");

  // Handle new order submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const userid = document.getElementById("userid").value.trim();
      const service = document.getElementById("service").value.trim();
      const quantity = document.getElementById("quantity").value.trim();

      const newOrder = {
        text: `✅ You have successfully ordered ${quantity} ${service} for the user ID "${userid}".`,
        time: new Date().toISOString()
      };

      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders.unshift(newOrder); // add newest order at the top
      localStorage.setItem("orders", JSON.stringify(orders));

      alert("✅ Order placed successfully!");
      form.reset();
    });
  }

  // Load and display the list of orders
  if (orderList) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length === 0) {
      orderList.innerHTML = "<p style='color:white;'>No orders yet.</p>";
    } else {
      orders.forEach((order, index) => {
        const li = document.createElement("li");
        li.textContent = order.text;
        orderList.appendChild(li);
      });
    }
  }
});
