document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("orderForm");
  const orderList = document.getElementById("orderList");

  // Handle new order
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const userid = document.getElementById("userid").value;
      const service = document.getElementById("service").value;
      const quantity = document.getElementById("quantity").value;

      const newOrder = {
        text: `You have ordered ${quantity} ${service} for the user ID "${userid}".`
      };

      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders.push(newOrder);
      localStorage.setItem("orders", JSON.stringify(orders));

      alert("✅ Order placed successfully!");
      form.reset();
    });
  }

  // Load ordered list
  if (orderList) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    if (orders.length === 0) {
      orderList.innerHTML = "<p>No orders yet.</p>";
    } else {
      orders.forEach((order) => {
        const li = document.createElement("li");
        li.textContent = order.text;
        orderList.appendChild(li);
      });
    }
  }
});
