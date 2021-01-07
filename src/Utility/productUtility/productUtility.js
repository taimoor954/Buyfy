/* eslint-disable no-loop-func */
export var categorizeProducts = (productsArray) => {
    var categoriesAvaliable = []
    for (var product of productsArray) {
      var category =product.category
      var categoryExist = categoriesAvaliable.some((categoryObj)=> categoryObj.categoryCheck == category )
      if(categoryExist)
      {
        categoriesAvaliable.map((categoryAvaObj) => {
          if(categoryAvaObj.categoryCheck === category)
          {
           categoryAvaObj.products.push(product) 
          } 
          else {
            return categoryAvaObj
          }
        })
      }
      else {
        var newCategory = {
          categoryCheck : category,
          products : [product]
        }
        categoriesAvaliable.push(newCategory)
      }
    }
    return categoriesAvaliable
  }
  