const meals = [
  {
    id: 0,
    name: "Friday Arrival & Chicken Night",
    night: "Night 1",
    day: "Friday",
    dishes: [
      {
        name: "Parsley Lemon Chicken",
        type: "main",
        ingredients: ["Whole chickens (butchered)", "Olive oil", "Garlic", "Fresh parsley", "Lemons"]
      },
      {
        name: "Raw White Fish",
        type: "main",
        ingredients: ["White fish fillets", "Olive oil", "Fresh parsley", "Lemons"]
      },
      {
        name: "Parsley Lemon Tofu",
        type: "vegan",
        ingredients: ["Firm tofu", "Olive oil", "Garlic", "Fresh parsley", "Lemons"]
      },
      {
        name: "Rice Pilaf",
        type: "side",
        ingredients: ["Basmati rice", "Homemade chicken stock", "Onions"]
      },
      {
        name: "Green Salad",
        type: "side",
        ingredients: ["Lettuce", "Fresh herbs (salad)", "Pecans", "Cucumber", "Apple"]
      },
      {
        name: "Roast Pumpkin",
        type: "side",
        ingredients: ["Pumpkin", "Olive oil", "Cumin", "Paprika", "Cinnamon"]
      },
      {
        name: "Ragù (for Pasta Night)",
        type: "prep",
        ingredients: ["Minced beef (ragù)", "Tinned tomatoes", "Tomato paste", "Red wine", "Onions", "Celery", "Carrots (ragù)", "Garlic", "Olive oil"]
      },
      {
        name: "Chicken Stock",
        type: "prep",
        ingredients: ["Chicken carcasses (from butchered chickens)", "Onions", "Carrots", "Celery", "Bay leaves", "Peppercorns"]
      },
      {
        name: "Pickles",
        type: "prep",
        ingredients: ["Radishes", "Red onions (pickling)", "White vinegar", "Sugar", "Salt"]
      }
    ],
    ingredients: [
      { item: "Whole chickens (butchered)", category: "meat", qty: "3" },
      { item: "White fish fillets", category: "meat", qty: "4" },
      { item: "Firm tofu", category: "veg", qty: "2 blocks" },
      { item: "Fresh parsley", category: "veg", qty: "2 bunches" },
      { item: "Lemons", category: "veg", qty: "4" },
      { item: "Basmati rice", category: "dry", qty: "1kg" },
      { item: "Lettuce", category: "veg", qty: "3 heads" },
      { item: "Fresh herbs (salad)", category: "veg", qty: "1 bunch" },
      { item: "Pecans", category: "dry", qty: "200g" },
      { item: "Cucumber", category: "veg", qty: "2" },
      { item: "Apple", category: "veg", qty: "2" },
      { item: "Pumpkin", category: "veg", qty: "1" },
      { item: "Cumin", category: "dry", qty: "1" },
      { item: "Paprika", category: "dry", qty: "1" },
      { item: "Cinnamon", category: "dry", qty: "1" },
      { item: "Minced beef (ragù)", category: "meat", qty: "1kg" },
      { item: "Chicken carcasses (from butchered chickens)", category: "meat", qty: "3" },
      { item: "Tinned tomatoes", category: "dry", qty: "4 cans" },
      { item: "Tomato paste", category: "dry", qty: "1" },
      { item: "Red wine", category: "dry", qty: "1 bottle" },
      { item: "Onions", category: "veg", qty: "4" },
      { item: "Carrots", category: "veg", qty: "3" },
      { item: "Carrots (ragù)", category: "veg", qty: "3" },
      { item: "Celery", category: "veg", qty: "1 head" },
      { item: "Garlic", category: "veg", qty: "2 heads" },
      { item: "Bay leaves", category: "dry", qty: "4" },
      { item: "Peppercorns", category: "dry", qty: "1 tsp" },
      { item: "Olive oil", category: "dry", qty: "1" },
      { item: "Butter", category: "dairy", qty: "50g" },
      { item: "Radishes", category: "veg", qty: "2 bunches" },
      { item: "Red onions (pickling)", category: "veg", qty: "4" },
      { item: "White vinegar", category: "dry", qty: "500ml" },
      { item: "Sugar", category: "dry", qty: "100g" },
      { item: "Salt", category: "dry", qty: "1" }
    ],
    chefsBitches: ["Amit"],
    prepBefore: [
      "Buy all ingredients on arrival"
    ],
    prepSameDay: [
      "Start ragù — brown mince, add veg, tomatoes, wine, simmer 2-3hrs",
      "Start chicken stock — roast carcasses, simmer with veg 2-3hrs",
      "Coat Night 2 beef in mustard, refrigerate",
      "Start Night 3 chicken brine",
      "Quick pickle radishes and red onions — slice, pour over hot brine (vinegar, sugar, salt), refrigerate",
      "Butcher 3 whole chickens — save carcasses for stock",
      "Pan-fry or grill chicken pieces (4-5min per side)",
      "Pan-fry or bake tofu until golden and crispy",
      "Cook rice pilaf",
      "Roast pumpkin wedges with spices at 200°C (25-30min)",
      "Assemble green salad"
    ]
  },
  {
    id: 1,
    name: "Big Roast Night",
    night: "Night 2",
    day: "Saturday",
    dishes: [
      {
        name: "Roast Beef",
        type: "main",
        ingredients: ["Roast beef (~1.5-2kg)", "Mustard (for beef)", "Beef stock"]
      },
      {
        name: "Brined Rotisserie Chicken",
        type: "main",
        ingredients: ["Whole chickens", "Fresh herbs (thyme, rosemary)", "Lemons", "Butter", "Sugar"]
      },
      {
        name: "Whole Roasted Cauliflower",
        type: "vegan",
        ingredients: ["Cauliflower (whole)", "Chickpeas (canned)", "Olive oil"]
      },
      {
        name: "Crispy Roast Potatoes",
        type: "side",
        ingredients: ["Potatoes (roast)"]
      },
      {
        name: "Roasted Root Vegetables",
        type: "side",
        ingredients: ["Carrots", "Parsnips", "Brussels sprouts", "Red onions", "Olive oil"]
      },
      {
        name: "Braised Leeks",
        type: "side",
        image: "images/braised-leeks.jpg",
        ingredients: ["Leeks", "Butter", "White wine", "Homemade chicken stock"]
      },
      {
        name: "Green Salad",
        type: "side",
        ingredients: ["Lettuce", "Fresh herbs (salad)", "Hazelnuts", "Cucumber", "Apple"]
      },
      {
        name: "French Onion Soup",
        type: "side",
        image: "images/onion-soup.jpg",
        ingredients: ["Onions (soup)", "Beef stock", "Butter", "Crusty bread/baguettes", "Gruyère cheese", "Fresh thyme"]
      }
    ],
    ingredients: [
      { item: "Roast beef (~1.5-2kg)", category: "meat", qty: "1" },
      { item: "Whole chickens", category: "meat", qty: "3" },
      { item: "Mustard (for beef)", category: "dry", qty: "1 jar" },
      { item: "Cauliflower (whole)", category: "veg", qty: "2" },
      { item: "Chickpeas (canned)", category: "dry", qty: "2 cans" },
      { item: "Potatoes (roast)", category: "veg", qty: "3kg" },
      { item: "Carrots", category: "veg", qty: "1kg" },
      { item: "Parsnips", category: "veg", qty: "500g" },
      { item: "Brussels sprouts", category: "veg", qty: "500g" },
      { item: "Red onions", category: "veg", qty: "4" },
      { item: "Garlic", category: "veg", qty: "2 heads" },
      { item: "Lemons", category: "veg", qty: "3" },
      { item: "Fresh herbs (thyme, rosemary)", category: "veg", qty: "2 bunches" },
      { item: "Sugar", category: "dry", qty: "1" },
      { item: "Butter", category: "dairy", qty: "300g" },
      { item: "Leeks", category: "veg", qty: "6" },
      { item: "White wine", category: "dry", qty: "1 bottle" },
      { item: "Lettuce", category: "veg", qty: "3 heads" },
      { item: "Fresh herbs (salad)", category: "veg", qty: "1 bunch" },
      { item: "Hazelnuts", category: "dry", qty: "200g" },
      { item: "Cucumber", category: "veg", qty: "2" },
      { item: "Apple", category: "veg", qty: "2" },
      { item: "Olive oil", category: "dry", qty: "1" },
      { item: "Onions (soup)", category: "veg", qty: "6" },
      { item: "Beef stock", category: "dry", qty: "1L" },
      { item: "Gruyère cheese", category: "dairy", qty: "200g" },
      { item: "Fresh thyme", category: "veg", qty: "1 bunch" },
      { item: "Crusty bread/baguettes", category: "dry", qty: "1" }
    ],
    brineRecipe: {
      title: "Simple Chicken Brine",
      ingredients: ["4L water", "100g salt", "50g sugar", "Fresh herbs (optional)", "Peppercorns (optional)"],
      steps: [
        "Dissolve salt and sugar in warm water",
        "Add herbs/peppercorns if using, let cool completely",
        "Submerge chickens fully, refrigerate 12hrs",
        "Remove, pat very dry, refrigerate uncovered 12hrs for crispy skin"
      ]
    },
    chefsBitches: ["Yaniv", "Phrim"],
    prepBefore: [
      "Brine chickens for 12hrs (see brine recipe)",
      "Coat beef in mustard, refrigerate overnight",
      "Remove chickens from brine, pat dry, refrigerate uncovered 12hrs"
    ],
    prepSameDay: [
      "Take beef out of fridge 1hr before cooking",
      "Roast beef (~20min per 500g + 20min)",
      "Herb butter under chicken skin, lemon in cavity",
      "Roast chickens 1.5-2hrs at 180°C",
      "Roast cauliflower with olive oil and spices",
      "Roast potatoes and root veggies (45min at 200°C)",
      "Braise leeks in butter, white wine and stock (30-40min)",
      "Slow-cook onion soup — caramelize onions, add stock, thyme, simmer 45min",
      "Ladle soup into bowls, top with bread and Gruyère, grill until bubbly",
      "Assemble green salad"
    ]
  },
  {
    id: 2,
    name: "BBQ Night",
    night: "Night 3",
    day: "Sunday",
    dishes: [
      {
        name: "Slow-Cooked Pork Ribs",
        type: "main",
        ingredients: ["Pork ribs", "BBQ sauce", "Smoked paprika", "Brown sugar"]
      },
      {
        name: "Grilled Sausages",
        type: "main",
        ingredients: ["Sausages", "Mustard (Dijon + whole grain)"]
      },
      {
        name: "Vegan Sausages",
        type: "vegan",
        ingredients: ["Vegan sausages", "Mustard (Dijon + whole grain)"]
      },
      {
        name: "Cauliflower Steak",
        type: "vegan",
        image: "images/cauliflower-steak.jpg",
        ingredients: ["Cauliflower (steaks)", "Olive oil", "Fresh herbs"]
      },
      {
        name: "Mac and Cheese",
        type: "side",
        image: "images/mac-and-cheese.jpg",
        ingredients: ["Macaroni pasta", "Cheddar cheese", "Butter", "Milk", "Flour", "Bacon"]
      },
      {
        name: "Green Salad",
        type: "side",
        ingredients: ["Lettuce", "Fresh herbs (salad)", "Almonds", "Cucumber", "Apple"]
      }
    ],
    ingredients: [
      { item: "Pork ribs", category: "meat", qty: "2-3 racks" },
      { item: "Sausages", category: "meat", qty: "22" },
      { item: "Vegan sausages", category: "veg", qty: "4" },
      { item: "Cauliflower (steaks)", category: "veg", qty: "2" },
      { item: "Fresh herbs", category: "veg", qty: "1 bunch" },
      { item: "Macaroni pasta", category: "dry", qty: "500g" },
      { item: "Cheddar cheese", category: "dairy", qty: "300g" },
      { item: "Butter", category: "dairy", qty: "50g" },
      { item: "Milk", category: "dairy", qty: "500ml" },
      { item: "Flour", category: "dry", qty: "2 tbsp" },
      { item: "Bacon", category: "meat", qty: "200g" },
      { item: "BBQ sauce", category: "dry", qty: "1 bottle" },
      { item: "Mustard (Dijon + whole grain)", category: "dry", qty: "2 jars" },
      { item: "Smoked paprika", category: "dry", qty: "1" },
      { item: "Brown sugar", category: "dry", qty: "1" },
      { item: "Olive oil", category: "dry", qty: "1" },
      { item: "Lettuce", category: "veg", qty: "3 heads" },
      { item: "Fresh herbs (salad)", category: "veg", qty: "1 bunch" },
      { item: "Almonds", category: "dry", qty: "200g" },
      { item: "Cucumber", category: "veg", qty: "2" },
      { item: "Apple", category: "veg", qty: "2" }
    ],
    chefsBitches: ["Gal", "Regev"],
    prepBefore: [
      "Dry rub or marinate ribs night before"
    ],
    prepSameDay: [
      "Slow cook ribs 2-3hrs at 150°C",
      "Glaze ribs and finish",
      "Cook sausages + vegan sausages",
      "Grill cauliflower steaks with oil and fresh herbs",
      "Make mac and cheese — béchamel, mix with pasta, top with bacon, bake",
      "Assemble green salad"
    ]
  },
  {
    id: 3,
    name: "Pasta Night",
    night: "Night 4",
    day: "Monday",
    dishes: [
      {
        name: "Ravioli in Chicken Jus",
        type: "main",
        ingredients: ["Fresh ravioli (meat)", "Homemade chicken stock", "Butter"]
      },
      {
        name: "Ravioli with Butter & Sage",
        type: "vegan",
        ingredients: ["Fresh ravioli (cheese)", "Butter", "Fresh sage", "Parmesan"]
      },
      {
        name: "Pasta Ragù",
        type: "main",
        ingredients: ["Pasta (regular)", "Minced beef (ragù)", "Tinned tomatoes", "Tomato paste", "Red wine", "Onions", "Celery", "Carrots (ragù)", "Parmesan"]
      },
      {
        name: "Pasta Pomodoro",
        type: "vegan",
        image: "images/pasta-pomodoro.jpg",
        ingredients: ["Pasta (egg-free for vegan)", "Tinned tomatoes", "Tomato paste", "Onions"]
      },
      {
        name: "Pan-Fried Mushrooms",
        type: "side",
        ingredients: ["Mushrooms", "Butter", "Fresh thyme", "Garlic"]
      },
      {
        name: "Cold Asparagus Salad",
        type: "side",
        image: "images/asparagus-salad-cold.jpg",
        ingredients: ["Asparagus", "Hazelnuts", "Green grapes", "Fresh dill", "Feta cheese", "Olive oil"]
      },
      {
        name: "Caprese Salad",
        type: "side",
        ingredients: ["Fresh mozzarella", "Tomatoes (caprese)", "Fresh basil", "Olive oil"]
      },
      {
        name: "Green Salad",
        type: "side",
        ingredients: ["Lettuce", "Fresh herbs (salad)", "Pecans", "Cucumber", "Apple"]
      }
    ],
    ingredients: [
      { item: "Fresh ravioli (meat)", category: "meat", qty: "2 packs" },
      { item: "Fresh ravioli (cheese)", category: "dairy", qty: "2 packs" },
      { item: "Pasta (egg-free for vegan)", category: "dry", qty: "500g" },
      { item: "Pasta (regular)", category: "dry", qty: "500g" },
      { item: "Minced beef (ragù)", category: "meat", qty: "1kg" },
      { item: "Tinned tomatoes", category: "dry", qty: "4 cans" },
      { item: "Tomato paste", category: "dry", qty: "1" },
      { item: "Fresh sage", category: "veg", qty: "1 bunch" },
      { item: "Butter", category: "dairy", qty: "200g" },
      { item: "Parmesan", category: "dairy", qty: "200g" },
      { item: "Asparagus", category: "veg", qty: "2 bunches" },
      { item: "Hazelnuts", category: "dry", qty: "200g" },
      { item: "Green grapes", category: "veg", qty: "300g" },
      { item: "Fresh dill", category: "veg", qty: "1 bunch" },
      { item: "Feta cheese", category: "dairy", qty: "200g" },
      { item: "Onions", category: "veg", qty: "4" },
      { item: "Celery", category: "veg", qty: "1 head" },
      { item: "Carrots (ragù)", category: "veg", qty: "3" },
      { item: "Red wine", category: "dry", qty: "1 bottle" },
      { item: "Fresh mozzarella", category: "dairy", qty: "400g" },
      { item: "Tomatoes (caprese)", category: "veg", qty: "6" },
      { item: "Fresh basil", category: "veg", qty: "1 bunch" },
      { item: "Mushrooms", category: "veg", qty: "1kg" },
      { item: "Fresh thyme", category: "veg", qty: "1 bunch" },
      { item: "Lettuce", category: "veg", qty: "3 heads" },
      { item: "Fresh herbs (salad)", category: "veg", qty: "1 bunch" },
      { item: "Pecans", category: "dry", qty: "200g" },
      { item: "Cucumber", category: "veg", qty: "2" },
      { item: "Apple", category: "veg", qty: "2" }
    ],
    chefsBitches: ["Omri", "Ynon"],
    prepBefore: [
      "Make ragù day before (better next day)",
      "Make chicken jus / reduce stock"
    ],
    prepSameDay: [
      "Cook ravioli in batches",
      "Warm chicken jus",
      "Make butter sage sauce",
      "Heat ragù",
      "Make simple tomato sauce for vegans",
      "Pan-fry mushrooms in butter with thyme and garlic",
      "Blanch asparagus, ice bath, chill",
      "Toast hazelnuts, assemble salad with grapes, dill, feta",
      "Assemble green salad"
    ]
  },
  {
    id: 4,
    name: "Beef Bourguignon Night",
    night: "Night 5",
    day: "Tuesday",
    dishes: [
      {
        name: "Beef Bourguignon",
        type: "main",
        ingredients: ["Beef chuck (bourguignon)", "Red wine", "Bacon", "Pearl onions", "Mushrooms", "Carrots", "Garlic", "Fresh thyme", "Bay leaves", "Beef stock"]
      },
      {
        name: "Mushroom Bourguignon",
        type: "vegan",
        ingredients: ["Mushrooms (bourguignon)", "Red wine", "Pearl onions", "Carrots", "Garlic", "Fresh thyme", "Bay leaves", "Vegetable stock"]
      },
      {
        name: "Mashed Potatoes",
        type: "side",
        ingredients: ["Potatoes (mash)", "Butter", "Milk", "Salt"]
      },
      {
        name: "Green Salad",
        type: "side",
        ingredients: ["Lettuce", "Fresh herbs (salad)", "Hazelnuts", "Cucumber", "Apple"]
      }
    ],
    ingredients: [
      { item: "Beef chuck (bourguignon)", category: "meat", qty: "1.5kg" },
      { item: "Red wine", category: "dry", qty: "1 bottle" },
      { item: "Bacon", category: "meat", qty: "200g" },
      { item: "Pearl onions", category: "veg", qty: "300g" },
      { item: "Mushrooms", category: "veg", qty: "500g" },
      { item: "Mushrooms (bourguignon)", category: "veg", qty: "500g" },
      { item: "Carrots", category: "veg", qty: "4" },
      { item: "Garlic", category: "veg", qty: "1 head" },
      { item: "Fresh thyme", category: "veg", qty: "1 bunch" },
      { item: "Bay leaves", category: "dry", qty: "4" },
      { item: "Beef stock", category: "dry", qty: "500ml" },
      { item: "Vegetable stock", category: "dry", qty: "500ml" },
      { item: "Potatoes (mash)", category: "veg", qty: "2kg" },
      { item: "Butter", category: "dairy", qty: "100g" },
      { item: "Milk", category: "dairy", qty: "200ml" },
      { item: "Lettuce", category: "veg", qty: "3 heads" },
      { item: "Fresh herbs (salad)", category: "veg", qty: "1 bunch" },
      { item: "Hazelnuts", category: "dry", qty: "200g" },
      { item: "Cucumber", category: "veg", qty: "2" },
      { item: "Apple", category: "veg", qty: "2" }
    ],
    chefsBitches: ["Holtzman", "Roko"],
    prepBefore: [
      "Cut beef into chunks, marinate in wine overnight"
    ],
    prepSameDay: [
      "Brown beef in batches, set aside",
      "Fry bacon, add pearl onions and mushrooms, brown",
      "Add wine, stock, herbs, beef — simmer 2-3hrs until tender",
      "For vegan: sauté mushrooms, add wine, stock, herbs, simmer 1hr",
      "Boil potatoes until tender, mash with butter and milk",
      "Assemble green salad"
    ]
  },
  {
    id: 5,
    name: "Burger Night",
    night: "Night 6",
    day: "Wednesday",
    dishes: [
      {
        name: "Beef Burgers",
        type: "main",
        ingredients: ["Burger patties", "Burger buns", "Cheddar cheese", "Lettuce", "Tomatoes (burger)", "Red onions (burger)", "Pickles", "Ketchup", "Mustard", "Mayo"]
      },
      {
        name: "Vegan Burgers",
        type: "vegan",
        ingredients: ["Vegan burger patties", "Burger buns", "Vegan cheese", "Lettuce", "Tomatoes (burger)", "Red onions (burger)", "Pickles", "Ketchup", "Mustard", "Vegan mayo"]
      },
      {
        name: "French Fries",
        type: "side",
        ingredients: ["Potatoes (fries)", "Olive oil", "Salt"]
      },
      {
        name: "Green Salad",
        type: "side",
        ingredients: ["Lettuce", "Fresh herbs (salad)", "Almonds", "Cucumber", "Apple"]
      }
    ],
    ingredients: [
      { item: "Burger patties", category: "meat", qty: "18" },
      { item: "Vegan burger patties", category: "veg", qty: "4" },
      { item: "Burger buns", category: "dry", qty: "22" },
      { item: "Cheddar cheese", category: "dairy", qty: "300g" },
      { item: "Vegan cheese", category: "veg", qty: "100g" },
      { item: "Lettuce", category: "veg", qty: "2 heads" },
      { item: "Tomatoes (burger)", category: "veg", qty: "6" },
      { item: "Red onions (burger)", category: "veg", qty: "4" },
      { item: "Pickles", category: "dry", qty: "1 jar" },
      { item: "Ketchup", category: "dry", qty: "1 bottle" },
      { item: "Mustard", category: "dry", qty: "1 jar" },
      { item: "Mayo", category: "dairy", qty: "1 jar" },
      { item: "Vegan mayo", category: "veg", qty: "1 jar" },
      { item: "Potatoes (fries)", category: "veg", qty: "3kg" },
      { item: "Olive oil", category: "dry", qty: "1" },
      { item: "Salt", category: "dry", qty: "1" },
      { item: "Lettuce", category: "veg", qty: "3 heads" },
      { item: "Fresh herbs (salad)", category: "veg", qty: "1 bunch" },
      { item: "Almonds", category: "dry", qty: "200g" },
      { item: "Cucumber", category: "veg", qty: "2" },
      { item: "Apple", category: "veg", qty: "2" }
    ],
    chefsBitches: ["Muroch", "Yaniv"],
    prepBefore: [
      "Shape burger patties if making from scratch"
    ],
    prepSameDay: [
      "Cut potatoes into fries, soak in water, dry, fry or bake at 200°C",
      "Grill or pan-fry burgers to preference",
      "Slice toppings (tomatoes, onions, lettuce)",
      "Toast buns",
      "Assemble green salad"
    ]
  }
];

// Get ingredient details by name
function getIngredientDetails(meal, ingredientName) {
  return meal.ingredients.find(i => i.item === ingredientName);
}

// Generate shopping list from all meals
function getShoppingList() {
  const list = {};
  meals.forEach(meal => {
    meal.ingredients.forEach(ing => {
      const key = ing.item;
      if (list[key]) {
        list[key].meals.push(meal.night);
      } else {
        list[key] = {
          item: ing.item,
          category: ing.category,
          qty: ing.qty,
          meals: [meal.night]
        };
      }
    });
  });
  return Object.values(list).sort((a, b) => {
    const catOrder = { meat: 0, dairy: 1, veg: 2, dry: 3 };
    return catOrder[a.category] - catOrder[b.category];
  });
}
