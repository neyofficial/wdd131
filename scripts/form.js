const products = [
    { id: "fc-1888", name: "Laptop", averagerating: 3.5 },
    { id: "fc-2050", name: "Washing machine", averagerating: 3.9 },
    { id: "fs-1987", name: "Chest freezer", averagerating: 3.7 },
    { id: "ac-2000", name: "Microwave", averagerating: 4.9 },
    { id: "jj-1969", name: "Pressure cooker", averagerating: 4.0 }
  ];
  
  const productDropdown = document.getElementById('product-name');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productDropdown.appendChild(option);
  });
  
  if (!localStorage.getItem('reviewCounter')) {
    localStorage.setItem('reviewCounter', 0);
  }
  
  document.querySelector('form').addEventListener('submit', function() {
    let counter = parseInt(localStorage.getItem('reviewCounter'));
    localStorage.setItem('reviewCounter', ++counter);
  });

  document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
  