document.addEventListener("DOMContentLoaded", () => {
  const formIngredientes = document.getElementById("formIngredientes");
  const formPedidos = document.getElementById("formPedidos");
  const input = document.getElementById("inputIngrediente");
  let ingredientes = [];

  formIngredientes.addEventListener("submit", function (event) {
    event.preventDefault();
    const ingrediente = input.value;
    ingredientes.push(ingrediente);
    agregarIngrediente(ingrediente);
  });

  formPedidos.addEventListener("submit", function (event) {
    event.preventDefault();
    const pizzaPromise = hacerPizza(ingredientes);
    pizzaPromise
      .then((pizza) => {
        agregarPedidoPizza(pizza);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        ingredientes = [];
        limpiarIngredientes();
      });
  });

  function hacerPizza(ingredientes) {
    const promesaPizza = new Promise(function (resolve, reject) {
      if (ingredientes.includes("piña")) {
        setTimeout(function () {
          reject("🍍....POOOOR?");
        }, 500);
      }
      setTimeout(function () {
        resolve(`aqui esta tu pizza 🍕 con  ${ingredientes.join(", ")}`);
      }, 2000);
    });
    return promesaPizza;
  }

  function agregarPedidoPizza(mensajePizza) {
    const contenedor = document.getElementById("contenedor-pizzas");
    const pizza = document.createElement("div");
    const pizzaFooter = document.createElement("div");
    pizza.classList.add("pizza");
    pizzaFooter.classList.add("pizza-footer");
    const p = document.createElement("p");
    p.textContent = mensajePizza;
    pizzaFooter.appendChild(p);
    pizza.appendChild(pizzaFooter);
    contenedor.appendChild(pizza);
  }

  function agregarIngrediente(ingrediente) {
    const contenedor = document.getElementById("ingredientes");
    const p = document.createElement("p");
    p.textContent = `1x ${ingrediente}`;
    contenedor.appendChild(p);
  }

  function limpiarIngredientes(){
    document.getElementById("ingredientes").innerHTML = "";
  }
});
