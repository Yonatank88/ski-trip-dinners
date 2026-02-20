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
        ingredients: ["Whole chickens", "Olive oil", "Garlic", "Fresh parsley", "Lemons"]
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
        ingredients: ["Minced beef", "Tinned tomatoes", "Tomato paste", "Red wine", "Onions", "Celery", "Carrots", "Garlic", "Olive oil"]
      },
      {
        name: "Chicken Stock",
        type: "prep",
        ingredients: ["Onions", "Carrots", "Celery", "Bay leaves", "Peppercorns"]
      },
      {
        name: "Pickles",
        type: "prep",
        ingredients: ["Radishes", "Red onions", "White vinegar", "Sugar", "Salt"]
      }
    ],
    ingredients: [
      { item: "Whole chickens", category: "meat", qty: "5 pcs" },
      { item: "White fish fillets", category: "meat", qty: "4 fillets" },
      { item: "Firm tofu", category: "veg", qty: "2 blocks" },
      { item: "Fresh parsley", category: "veg", qty: "2 bunches" },
      { item: "Lemons", category: "veg", qty: "4 pcs" },
      { item: "Basmati rice", category: "dry", qty: "1kg" },
      { item: "Lettuce", category: "veg", qty: "3 heads" },
      { item: "Fresh herbs (salad)", category: "veg", qty: "1 bunch" },
      { item: "Pecans", category: "dry", qty: "200g" },
      { item: "Cucumber", category: "veg", qty: "2 pcs" },
      { item: "Apple", category: "veg", qty: "2 pcs" },
      { item: "Pumpkin", category: "veg", qty: "1 pc" },
      { item: "Cumin", category: "dry", qty: "1 jar" },
      { item: "Paprika", category: "dry", qty: "1 jar" },
      { item: "Cinnamon", category: "dry", qty: "1 jar" },
      { item: "Minced beef", category: "meat", qty: "3kg" },
      { item: "Tinned tomatoes", category: "dry", qty: "4 cans" },
      { item: "Tomato paste", category: "dry", qty: "1 tube" },
      { item: "Red wine", category: "dry", qty: "1 bottle" },
      { item: "Onions", category: "veg", qty: "4 pcs" },
      { item: "Carrots", category: "veg", qty: "6 pcs" },
      { item: "Celery", category: "veg", qty: "1 head" },
      { item: "Garlic", category: "veg", qty: "2 heads" },
      { item: "Bay leaves", category: "dry", qty: "4 pcs" },
      { item: "Peppercorns", category: "dry", qty: "1 tsp" },
      { item: "Olive oil", category: "dry", qty: "1 bottle" },
      { item: "Butter", category: "dairy", qty: "50g" },
      { item: "Radishes", category: "veg", qty: "2 bunches" },
      { item: "Red onions", category: "veg", qty: "4 pcs" },
      { item: "White vinegar", category: "dry", qty: "500ml" },
      { item: "Sugar", category: "dry", qty: "100g" },
      { item: "Salt", category: "dry", qty: "1 pack" },
      { item: "Black pepper", category: "dry", qty: "1 pack" },
      { item: "Plastic containers", category: "dry", qty: "1 pack" }
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
        ingredients: ["Roast beef (~1.5-2kg)", "Mustard", "Beef stock"]
      },
      {
        name: "Brined Rotisserie Chicken",
        type: "main",
        ingredients: ["Whole chickens", "Fresh herbs (thyme, rosemary)", "Lemons", "Butter", "Sugar"]
      },
      {
        name: "Whole Roasted Cauliflower",
        type: "vegan",
        ingredients: ["Cauliflower", "Chickpeas (canned)", "Olive oil"]
      },
      {
        name: "Crispy Roast Potatoes",
        type: "side",
        ingredients: ["Potatoes"]
      },
      {
        name: "Roasted Root Vegetables",
        type: "side",
        ingredients: ["Carrots", "Parsnips", "Brussels sprouts", "Red onions", "Olive oil"]
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
        ingredients: ["Onions", "Beef stock", "Butter", "Crusty bread/baguettes", "Gruyère cheese", "Fresh thyme"]
      }
    ],
    ingredients: [
      { item: "Roast beef (~1.5-2kg)", category: "meat", qty: "1 pc" },
      { item: "Whole chickens", category: "meat", qty: "3 pcs" },
      { item: "Mustard", category: "dry", qty: "1 jar" },
      { item: "Cauliflower", category: "veg", qty: "2 pcs" },
      { item: "Chickpeas (canned)", category: "dry", qty: "2 cans" },
      { item: "Potatoes", category: "veg", qty: "3kg" },
      { item: "Carrots", category: "veg", qty: "8 pcs" },
      { item: "Parsnips", category: "veg", qty: "500g" },
      { item: "Brussels sprouts", category: "veg", qty: "500g" },
      { item: "Red onions", category: "veg", qty: "4 pcs" },
      { item: "Garlic", category: "veg", qty: "2 heads" },
      { item: "Lemons", category: "veg", qty: "3 pcs" },
      { item: "Fresh herbs (thyme, rosemary)", category: "veg", qty: "2 bunches" },
      { item: "Sugar", category: "dry", qty: "50g" },
      { item: "Butter", category: "dairy", qty: "300g" },
      { item: "Lettuce", category: "veg", qty: "3 heads" },
      { item: "Fresh herbs (salad)", category: "veg", qty: "1 bunch" },
      { item: "Hazelnuts", category: "dry", qty: "200g" },
      { item: "Cucumber", category: "veg", qty: "2 pcs" },
      { item: "Apple", category: "veg", qty: "2 pcs" },
      { item: "Olive oil", category: "dry", qty: "1 bottle" },
      { item: "Onions", category: "veg", qty: "6 pcs" },
      { item: "Beef stock", category: "dry", qty: "1L" },
      { item: "Gruyère cheese", category: "dairy", qty: "200g" },
      { item: "Fresh thyme", category: "veg", qty: "1 bunch" },
      { item: "Crusty bread/baguettes", category: "dry", qty: "2 pcs" }
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
        ingredients: ["Cauliflower", "Olive oil", "Fresh herbs"]
      },
      {
        name: "Mac and Cheese",
        type: "side",
        image: "images/mac-and-cheese.jpg",
        ingredients: ["Macaroni pasta", "Cheddar cheese", "Butter", "Milk", "Flour", "Bacon"]
      },
      {
        name: "Baked Potatoes",
        type: "side",
        ingredients: ["Potatoes", "Butter", "Sour cream", "Salt"]
      },
      {
        name: "Green Salad",
        type: "side",
        ingredients: ["Lettuce", "Fresh herbs (salad)", "Almonds", "Cucumber", "Apple"]
      }
    ],
    ingredients: [
      { item: "Pork ribs", category: "meat", qty: "2-3 racks" },
      { item: "Sausages", category: "meat", qty: "22 pcs" },
      { item: "Vegan sausages", category: "veg", qty: "4 pcs" },
      { item: "Cauliflower", category: "veg", qty: "2 pcs" },
      { item: "Fresh herbs", category: "veg", qty: "1 bunch" },
      { item: "Macaroni pasta", category: "dry", qty: "500g" },
      { item: "Cheddar cheese", category: "dairy", qty: "300g" },
      { item: "Butter", category: "dairy", qty: "50g" },
      { item: "Milk", category: "dairy", qty: "500ml" },
      { item: "Flour", category: "dry", qty: "2 tbsp" },
      { item: "Bacon", category: "meat", qty: "200g" },
      { item: "BBQ sauce", category: "dry", qty: "1 bottle" },
      { item: "Mustard (Dijon + whole grain)", category: "dry", qty: "2 jars" },
      { item: "Smoked paprika", category: "dry", qty: "1 jar" },
      { item: "Brown sugar", category: "dry", qty: "1 pack" },
      { item: "Olive oil", category: "dry", qty: "1 bottle" },
      { item: "Lettuce", category: "veg", qty: "3 heads" },
      { item: "Fresh herbs (salad)", category: "veg", qty: "1 bunch" },
      { item: "Almonds", category: "dry", qty: "200g" },
      { item: "Cucumber", category: "veg", qty: "2 pcs" },
      { item: "Apple", category: "veg", qty: "2 pcs" },
      { item: "Potatoes", category: "veg", qty: "2kg" },
      { item: "Sour cream", category: "dairy", qty: "1 tub" }
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
      "Bake potatoes at 200°C for 1hr, serve with butter and sour cream",
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
        ingredients: ["Pasta (regular)", "Minced beef", "Tinned tomatoes", "Tomato paste", "Red wine", "Onions", "Celery", "Carrots", "Parmesan"]
      },
      {
        name: "Pea & Mint Pasta",
        type: "vegan",
        ingredients: ["Pasta (egg-free for vegan)", "Frozen peas", "Fresh mint", "Parmesan", "Olive oil", "Garlic"]
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
        ingredients: ["Fresh mozzarella", "Tomatoes", "Fresh basil", "Olive oil"]
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
      { item: "Minced beef", category: "meat", qty: "1kg" },
      { item: "Tinned tomatoes", category: "dry", qty: "4 cans" },
      { item: "Tomato paste", category: "dry", qty: "1 tube" },
      { item: "Fresh sage", category: "veg", qty: "1 bunch" },
      { item: "Butter", category: "dairy", qty: "200g" },
      { item: "Parmesan", category: "dairy", qty: "200g" },
      { item: "Asparagus", category: "veg", qty: "2 bunches" },
      { item: "Hazelnuts", category: "dry", qty: "200g" },
      { item: "Green grapes", category: "veg", qty: "300g" },
      { item: "Fresh dill", category: "veg", qty: "1 bunch" },
      { item: "Feta cheese", category: "dairy", qty: "200g" },
      { item: "Onions", category: "veg", qty: "4 pcs" },
      { item: "Celery", category: "veg", qty: "1 head" },
      { item: "Carrots", category: "veg", qty: "3 pcs" },
      { item: "Red wine", category: "dry", qty: "1 bottle" },
      { item: "Fresh mozzarella", category: "dairy", qty: "400g" },
      { item: "Tomatoes", category: "veg", qty: "6 pcs" },
      { item: "Fresh basil", category: "veg", qty: "1 bunch" },
      { item: "Mushrooms", category: "veg", qty: "1kg" },
      { item: "Fresh thyme", category: "veg", qty: "1 bunch" },
      { item: "Lettuce", category: "veg", qty: "3 heads" },
      { item: "Fresh herbs (salad)", category: "veg", qty: "1 bunch" },
      { item: "Pecans", category: "dry", qty: "200g" },
      { item: "Cucumber", category: "veg", qty: "2 pcs" },
      { item: "Apple", category: "veg", qty: "2 pcs" },
      { item: "Frozen peas", category: "veg", qty: "500g" },
      { item: "Fresh mint", category: "veg", qty: "1 bunch" }
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
      "Cook peas, blend with mint, garlic, olive oil and parmesan for pea & mint pasta sauce",
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
        ingredients: ["Beef chuck", "Red wine", "Bacon", "Pearl onions", "Mushrooms", "Carrots", "Garlic", "Fresh thyme", "Bay leaves", "Beef stock"]
      },
      {
        name: "Mushroom Bourguignon",
        type: "vegan",
        ingredients: ["Mushrooms", "Red wine", "Pearl onions", "Carrots", "Garlic", "Fresh thyme", "Bay leaves", "Vegetable stock"]
      },
      {
        name: "Mashed Potatoes",
        type: "side",
        ingredients: ["Potatoes", "Butter", "Milk", "Salt"]
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
      }
    ],
    ingredients: [
      { item: "Beef chuck", category: "meat", qty: "1.5kg" },
      { item: "Red wine", category: "dry", qty: "1 bottle" },
      { item: "Bacon", category: "meat", qty: "200g" },
      { item: "Pearl onions", category: "veg", qty: "300g" },
      { item: "Mushrooms", category: "veg", qty: "1kg" },
      { item: "Carrots", category: "veg", qty: "4 pcs" },
      { item: "Garlic", category: "veg", qty: "1 head" },
      { item: "Fresh thyme", category: "veg", qty: "1 bunch" },
      { item: "Bay leaves", category: "dry", qty: "4 pcs" },
      { item: "Beef stock", category: "dry", qty: "500ml" },
      { item: "Vegetable stock", category: "dry", qty: "500ml" },
      { item: "Potatoes", category: "veg", qty: "2kg" },
      { item: "Butter", category: "dairy", qty: "100g" },
      { item: "Milk", category: "dairy", qty: "200ml" },
      { item: "Lettuce", category: "veg", qty: "3 heads" },
      { item: "Fresh herbs (salad)", category: "veg", qty: "1 bunch" },
      { item: "Hazelnuts", category: "dry", qty: "200g" },
      { item: "Cucumber", category: "veg", qty: "2 pcs" },
      { item: "Apple", category: "veg", qty: "2 pcs" },
      { item: "Leeks", category: "veg", qty: "6 pcs" },
      { item: "White wine", category: "dry", qty: "1 bottle" }
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
      "Braise leeks in butter, white wine and stock (30-40min)",
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
        ingredients: ["Burger patties", "Burger buns", "Cheddar cheese", "Lettuce", "Tomatoes", "Red onions", "Pickles", "Ketchup", "Mustard", "Mayo"]
      },
      {
        name: "Vegan Burgers",
        type: "vegan",
        ingredients: ["Vegan burger patties", "Burger buns", "Vegan cheese", "Lettuce", "Tomatoes", "Red onions", "Pickles", "Ketchup", "Mustard", "Vegan mayo"]
      },
      {
        name: "French Fries",
        type: "side",
        ingredients: ["Potatoes", "Olive oil", "Salt"]
      },
      {
        name: "Green Salad",
        type: "side",
        ingredients: ["Lettuce", "Fresh herbs (salad)", "Almonds", "Cucumber", "Apple"]
      }
    ],
    ingredients: [
      { item: "Burger patties", category: "meat", qty: "18 pcs" },
      { item: "Vegan burger patties", category: "veg", qty: "4 pcs" },
      { item: "Burger buns", category: "dry", qty: "22 pcs" },
      { item: "Cheddar cheese", category: "dairy", qty: "300g" },
      { item: "Vegan cheese", category: "veg", qty: "100g" },
      { item: "Tomatoes", category: "veg", qty: "6 pcs" },
      { item: "Red onions", category: "veg", qty: "4 pcs" },
      { item: "Pickles", category: "dry", qty: "1 jar" },
      { item: "Ketchup", category: "dry", qty: "1 bottle" },
      { item: "Mustard", category: "dry", qty: "1 jar" },
      { item: "Mayo", category: "dairy", qty: "1 jar" },
      { item: "Vegan mayo", category: "veg", qty: "1 jar" },
      { item: "Potatoes", category: "veg", qty: "3kg" },
      { item: "Olive oil", category: "dry", qty: "1 bottle" },
      { item: "Salt", category: "dry", qty: "1 pack" },
      { item: "Lettuce", category: "veg", qty: "5 heads" },
      { item: "Fresh herbs (salad)", category: "veg", qty: "1 bunch" },
      { item: "Almonds", category: "dry", qty: "200g" },
      { item: "Cucumber", category: "veg", qty: "2 pcs" },
      { item: "Apple", category: "veg", qty: "2 pcs" }
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

// Load saved edits from localStorage
const MEALS_STORAGE_KEY = 'ski-trip-meals-edits';

function loadMealEdits() {
  const saved = localStorage.getItem(MEALS_STORAGE_KEY);
  if (!saved) return;
  try {
    const edits = JSON.parse(saved);
    edits.forEach(edit => {
      const meal = meals.find(m => m.id === edit.id);
      if (meal) {
        meal.ingredients = edit.ingredients;
        // Update dish ingredient lists to stay in sync
        meal.dishes.forEach(dish => {
          dish.ingredients = dish.ingredients.filter(ingName =>
            meal.ingredients.some(i => i.item === ingName)
          );
        });
      }
    });
  } catch (e) {
    console.error('Failed to load meal edits:', e);
  }
}

function saveMealEdits() {
  const edits = meals.map(m => ({ id: m.id, ingredients: m.ingredients }));
  localStorage.setItem(MEALS_STORAGE_KEY, JSON.stringify(edits));
}

function updateMealIngredient(mealId, oldItem, newQty) {
  const meal = meals.find(m => m.id === mealId);
  if (!meal) return;
  const ing = meal.ingredients.find(i => i.item === oldItem);
  if (ing) ing.qty = newQty;
  saveMealEdits();
}

function deleteMealIngredient(mealId, itemName) {
  const meal = meals.find(m => m.id === mealId);
  if (!meal) return;
  meal.ingredients = meal.ingredients.filter(i => i.item !== itemName);
  // Remove from dish ingredient lists too
  meal.dishes.forEach(dish => {
    dish.ingredients = dish.ingredients.filter(name => name !== itemName);
  });
  saveMealEdits();
}

function addMealIngredient(mealId, item, category, qty, dishName) {
  const meal = meals.find(m => m.id === mealId);
  if (!meal) return;
  // Don't add duplicate
  if (meal.ingredients.some(i => i.item === item)) return false;
  meal.ingredients.push({ item, category, qty });
  // If a dish is specified, add to that dish's ingredient list
  if (dishName) {
    const dish = meal.dishes.find(d => d.name === dishName);
    if (dish) dish.ingredients.push(item);
  }
  saveMealEdits();
  return true;
}

// Apply saved edits on load
loadMealEdits();

// Get ingredient details by name
function getIngredientDetails(meal, ingredientName) {
  return meal.ingredients.find(i => i.item === ingredientName);
}

// Parse a quantity string into { value, unit }
function parseQty(qty) {
  if (!qty) return { value: 0, unit: '' };
  const s = String(qty).trim();
  // Handle ranges like "2-3 racks" → take midpoint
  const rangeMatch = s.match(/^(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)\s*(.*)$/);
  if (rangeMatch) {
    const lo = parseFloat(rangeMatch[1]);
    const hi = parseFloat(rangeMatch[2]);
    return { value: (lo + hi) / 2, unit: rangeMatch[3].trim() };
  }
  // Handle "200g", "500ml", "1.5kg", "2L"
  const noSpaceMatch = s.match(/^(\d+(?:\.\d+)?)\s*(g|kg|ml|L|l)$/);
  if (noSpaceMatch) {
    return { value: parseFloat(noSpaceMatch[1]), unit: noSpaceMatch[2] };
  }
  // Handle "3 heads", "1 bottle", "2 tbsp", "1 bunch"
  const spaceMatch = s.match(/^(\d+(?:\.\d+)?)\s+(.+)$/);
  if (spaceMatch) {
    return { value: parseFloat(spaceMatch[1]), unit: spaceMatch[2] };
  }
  // Handle plain number "4"
  const numMatch = s.match(/^(\d+(?:\.\d+)?)$/);
  if (numMatch) {
    return { value: parseFloat(numMatch[1]), unit: '' };
  }
  // Can't parse — return as-is
  return { value: 0, unit: '', raw: s };
}

// Normalize unit to base form for grouping
function normalizeUnit(unit) {
  const u = unit.toLowerCase();
  // Weight: convert kg to g
  if (u === 'kg') return { unit: 'g', multiplier: 1000 };
  if (u === 'g') return { unit: 'g', multiplier: 1 };
  // Volume: convert L to ml
  if (u === 'l') return { unit: 'ml', multiplier: 1000 };
  if (u === 'ml') return { unit: 'ml', multiplier: 1 };
  // Plurals → singular for grouping
  const singular = u.replace(/s$/, '');
  return { unit: singular, multiplier: 1 };
}

// Format a summed quantity back to a nice string
function formatQty(value, baseUnit) {
  if (baseUnit === 'g' && value >= 1000) {
    const kg = value / 1000;
    return (kg % 1 === 0 ? kg : kg.toFixed(1)) + 'kg';
  }
  if (baseUnit === 'g') {
    return (value % 1 === 0 ? value : Math.round(value)) + 'g';
  }
  if (baseUnit === 'ml' && value >= 1000) {
    const l = value / 1000;
    return (l % 1 === 0 ? l : l.toFixed(1)) + 'L';
  }
  if (baseUnit === 'ml') {
    return (value % 1 === 0 ? value : Math.round(value)) + 'ml';
  }
  const displayVal = value % 1 === 0 ? value : parseFloat(value.toFixed(1));
  if (!baseUnit) return String(displayVal);
  // Pluralize if > 1
  let unit = baseUnit;
  if (displayVal > 1 && !unit.endsWith('s')) {
    // Handle "bunch" → "bunches", "box" → "boxes"
    if (unit.endsWith('ch') || unit.endsWith('sh') || unit.endsWith('x') || unit.endsWith('ss')) {
      unit = unit + 'es';
    } else {
      unit = unit + 's';
    }
  } else if (displayVal <= 1 && unit.endsWith('s')) {
    unit = unit.slice(0, -1);
  }
  return displayVal + ' ' + unit;
}

// Generate shopping list from all meals, summing quantities
function getShoppingList() {
  const list = {};
  meals.forEach(meal => {
    meal.ingredients.forEach(ing => {
      const key = ing.item;
      if (list[key]) {
        list[key].meals.push(meal.night);
        list[key].rawQtys.push(ing.qty);
      } else {
        list[key] = {
          item: ing.item,
          category: ing.category,
          rawQtys: [ing.qty],
          meals: [meal.night]
        };
      }
    });
  });

  // Sum quantities for each item
  const result = Object.values(list).map(entry => {
    const parsed = entry.rawQtys.map(parseQty);
    // If any couldn't be parsed, just join them
    if (parsed.some(p => p.raw)) {
      return { ...entry, qty: entry.rawQtys.join(' + ') };
    }
    // If only one entry, use original string
    if (parsed.length === 1) {
      return { ...entry, qty: entry.rawQtys[0] };
    }
    // Normalize and sum
    const normalized = parsed.map(p => {
      const n = normalizeUnit(p.unit);
      return { value: p.value * n.multiplier, baseUnit: n.unit };
    });
    // Check all same base unit
    const baseUnits = [...new Set(normalized.map(n => n.baseUnit))];
    if (baseUnits.length === 1) {
      const total = normalized.reduce((sum, n) => sum + n.value, 0);
      return { ...entry, qty: formatQty(total, baseUnits[0]) };
    }
    // Mixed units — just join originals
    return { ...entry, qty: entry.rawQtys.join(' + ') };
  });

  // Clean up rawQtys from result
  result.forEach(r => delete r.rawQtys);

  return result.sort((a, b) => {
    const catOrder = { meat: 0, dairy: 1, veg: 2, dry: 3 };
    return catOrder[a.category] - catOrder[b.category];
  });
}
