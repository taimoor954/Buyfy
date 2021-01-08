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
    (product) => product.id == productToAdd.id
  );
  if (!productExist) {
    return [...allProducts, { ...productToAdd, quantity: 1 }];
  } else {
    return allProducts.map((product) => {
      if (product.id === productToAdd.id) {
        return {
          ...product,
          quantity: ++product.quantity,
        };
      } else {
        return product;
      }
    });
  }
};
