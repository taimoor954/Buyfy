/* eslint-disable no-loop-func */
export var categorizeProducts = (productsArray) => {
  var categoriesAvaliable = [];
  for (var product of productsArray) {
    var category = product.category;
    var categoryExist = categoriesAvaliable.some(
      (categoryObj) => categoryObj.categoryCheck == category
    );
    if (categoryExist) {
      categoriesAvaliable.map((categoryAvaObj) => {
        if (categoryAvaObj.categoryCheck === category) {
          categoryAvaObj.products.push(product);
        } else {
          return categoryAvaObj;
        }
      });
    } else {
      var newCategory = {
        categoryCheck: category,
        products: [product],
      };
      categoriesAvaliable.push(newCategory);
    }
  }
  return categoriesAvaliable;
};

export var productQuantityIncrement = (allProducts, productToAdd) => {
  var productExist = allProducts.some(
    (product) => product.id === productToAdd.id
  );
  if (!productExist) {
    return [...allProducts, { ...productToAdd, quantity: 1 }];
  } else {
    return allProducts.map((product) => {
      if (product.id === productToAdd.id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      } else {
        return product;
      }
    });
  }
};

export var productRemovalFromCart = (allProducts, productId) => {
  console.log(allProducts)
  var product = allProducts.find((product) => product.id === productId); //TO FIND product that matches cond
  if(product) //if product exist in cart
  {
    if (product.quantity > 0) {
      return allProducts.map((product) => {
        if (product.id === productId)
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        else {
          return product;
        }
      });
    } else {
      return allProducts.filter((product) => product.id !== productId); //WO SARAY RETRUN HO JINKAY REMOVE BUTTON PER CLICK NAHI HUA AND JIS PER HUA HAI USKI QUANTITIY 0 HOJAYEGI OR CART SAY REMOVE HOJAYEGA
    }
  }
  else {
    return allProducts //if no product exist return all products as an emptry array
  }
  
};

export var deleteProductFromCart = (allProducts, productId)=> {
  return allProducts.filter((product) => product.id !== productId); //WO SARAY RETRUN HO JINKAY REMOVE BUTTON PER CLICK NAHI HUA AND JIS PER HUA HAI WO DELETE KARDAY

}