const meals = [
  {
    id: 0,
    name: "Friday Prep",
    night: "Arrival",
    day: "Friday",
    dishes: [
      {
        name: "Ragù (for Pasta Night)",
        type: "prep",
        ingredients: ["Minced beef (ragù)", "Tinned tomatoes", "Tomato paste", "Red wine", "Onions", "Celery", "Carrots (ragù)", "Garlic", "Olive oil"]
      },
      {
        name: "Chicken Stock",
        type: "prep",
        ingredients: ["Chicken carcasses", "Onions", "Carrots", "Celery", "Bay leaves", "Peppercorns"]
      },
      {
        name: "Veggie Prep",
        type: "prep",
        ingredients: ["Onions", "Carrots", "Garlic", "Pumpkin"]
      },
      {
        name: "Meat Prep",
        type: "prep",
        ingredients: ["Chicken cutlets", "Roast beef (~1.5-2kg)", "Whole chickens"]
      }
    ],
    ingredients: [
      { item: "Minced beef (ragù)", category: "meat", qty: "1kg" },
      { item: "Chicken carcasses", category: "meat", qty: "2" },
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
      { item: "Pumpkin", category: "veg", qty: "1" }
    ],
    prepBefore: [
      "Buy all ingredients on arrival"
    ],
    prepSameDay: [
      "Start ragù — brown mince, add veg, tomatoes, wine, simmer 2-3hrs",
      "Start chicken stock — roast carcasses, simmer with veg 2-3hrs",
      "Chop and store veggies for the week (onions, carrots, garlic, pumpkin)",
      "Marinate Night 1 chicken in lemon-basil-garlic mix",
      "Press and marinate Night 1 tofu in lemon-basil-garlic mix",
      "Coat Night 2 beef in mustard, refrigerate",
      "Start Night 3 chicken brine"
    ]
  },
  {
    id: 1,
    name: "Chicken Night",
    night: "Night 1",
    day: "Saturday",
    dishes: [
      {
        name: "Lemon Basil Chicken",
        type: "main",
        ingredients: ["Chicken cutlets", "Olive oil", "Lemon juice", "Garlic", "Fresh basil"]
      },
      {
        name: "Raw White Fish",
        type: "main",
        ingredients: ["White fish fillets", "Lemon juice", "Olive oil", "Fresh basil"]
      },
      {
        name: "Lemon Basil Tofu",
        type: "vegan",
        ingredients: ["Firm tofu", "Olive oil", "Lemon juice", "Garlic", "Fresh basil"]
      },
      {
        name: "Rice Pilaf",
        type: "side",
        ingredients: ["Basmati rice", "Chicken stock", "Onions"]
      },
      {
        name: "Green Salad",
        type: "side",
        ingredients: ["Mixed greens", "Cherry tomatoes", "Cucumber"]
      },
      {
        name: "Roast Pumpkin",
        type: "side",
        ingredients: ["Pumpkin", "Olive oil", "Cumin", "Paprika", "Cinnamon"]
      }
    ],
    ingredients: [
      { item: "Chicken cutlets", category: "meat", qty: "12" },
      { item: "White fish fillets", category: "meat", qty: "4" },
      { item: "Firm tofu", category: "veg", qty: "2 blocks" },
      { item: "Lemon juice", category: "dry", qty: "2 lemons" },
      { item: "Fresh basil", category: "veg", qty: "2 bunches" },
      { item: "Garlic", category: "veg", qty: "1 head" },
      { item: "Basmati rice", category: "dry", qty: "1kg" },
      { item: "Chicken stock", category: "dry", qty: "1L" },
      { item: "Mixed greens", category: "veg", qty: "2 bags" },
      { item: "Cherry tomatoes", category: "veg", qty: "500g" },
      { item: "Cucumber", category: "veg", qty: "2" },
      { item: "Onions", category: "veg", qty: "2" },
      { item: "Pumpkin", category: "veg", qty: "1" },
      { item: "Cumin", category: "dry", qty: "1" },
      { item: "Paprika", category: "dry", qty: "1" },
      { item: "Cinnamon", category: "dry", qty: "1" },
      { item: "Olive oil", category: "dry", qty: "1" }
    ],
    prepBefore: [
      "Friday evening: Marinate chicken in lemon-basil-garlic mix",
      "Friday evening: Press and marinate tofu in lemon-basil-garlic mix",
      "Refrigerate overnight"
    ],
    prepSameDay: [
      "Pan-fry or grill chicken cutlets (4-5min per side)",
      "Pan-fry or bake tofu until golden and crispy",
      "Cook rice pilaf",
      "Roast pumpkin wedges with spices at 200°C (25-30min)",
      "Assemble green salad"
    ]
  },
  {
    id: 2,
    name: "Roast Dinner",
    night: "Night 2",
    day: "Sunday",
    dishes: [
      {
        name: "Roast Beef",
        type: "main",
        ingredients: ["Roast beef (~1.5-2kg)", "Mustard (for beef)", "Beef stock"]
      },
      {
        name: "Mushroom Wellington",
        type: "vegan",
        ingredients: ["Butternut squash", "Mushrooms (for Wellington)", "Puff pastry"]
      },
      {
        name: "Pan-Fried Replacement Meat",
        type: "vegan",
        ingredients: ["Vegan replacement meat", "Olive oil", "Garlic"]
      },
      {
        name: "Creamy Mash Potato",
        type: "side",
        ingredients: ["Potatoes (for mash)", "Vegan butter", "Olive oil"]
      },
      {
        name: "Roasted Root Vegetables",
        type: "side",
        ingredients: ["Carrots", "Parsnips", "Brussels sprouts", "Red onions", "Olive oil"]
      },
      {
        name: "Pan-Fried Mushrooms",
        type: "side",
        ingredients: ["Mushrooms", "Butter", "Fresh thyme", "Garlic"]
      },
      {
        name: "Gravy (Regular & Vegan)",
        type: "sauce",
        ingredients: ["Beef stock", "Mushroom stock (vegan gravy)"]
      }
    ],
    ingredients: [
      { item: "Roast beef (~1.5-2kg)", category: "meat", qty: "1" },
      { item: "Mustard (for beef)", category: "dry", qty: "1 jar" },
      { item: "Butternut squash", category: "veg", qty: "2" },
      { item: "Mushrooms (for Wellington)", category: "veg", qty: "500g" },
      { item: "Puff pastry", category: "dry", qty: "1 pack" },
      { item: "Potatoes (for mash)", category: "veg", qty: "2kg" },
      { item: "Carrots", category: "veg", qty: "1kg" },
      { item: "Parsnips", category: "veg", qty: "500g" },
      { item: "Brussels sprouts", category: "veg", qty: "500g" },
      { item: "Red onions", category: "veg", qty: "4" },
      { item: "Mushrooms", category: "veg", qty: "1kg" },
      { item: "Fresh thyme", category: "veg", qty: "1 bunch" },
      { item: "Garlic", category: "veg", qty: "1 head" },
      { item: "Butter", category: "dairy", qty: "100g" },
      { item: "Vegan replacement meat", category: "veg", qty: "2 packs" },
      { item: "Olive oil", category: "dry", qty: "1" },
      { item: "Vegan butter", category: "dairy", qty: "1" },
      { item: "Beef stock", category: "dry", qty: "2" },
      { item: "Mushroom stock (vegan gravy)", category: "dry", qty: "2" }
    ],
    prepBefore: [
      "Coat beef in mustard, refrigerate overnight",
      "Take beef out of fridge 1hr before cooking",
      "Peel and chop all roast veggies",
      "Prep mushroom Wellington (can assemble day before)"
    ],
    prepSameDay: [
      "Roast beef (~20min per 500g + 20min)",
      "Roast veggies (45min at 200°C)",
      "Make mash",
      "Pan-fry mushrooms in butter with thyme and garlic",
      "Pan-fry vegan replacement meat",
      "Make both gravies",
      "Bake Wellington (25-30min)"
    ]
  },
  {
    id: 3,
    name: "Rotisserie Chicken",
    night: "Night 3",
    day: "Monday",
    dishes: [
      {
        name: "Brined Rotisserie Chicken",
        type: "main",
        ingredients: ["Whole chickens", "Fresh herbs (thyme, rosemary)", "Lemons", "Butter", "Sugar"]
      },
      {
        name: "Whole Roasted Cauliflower",
        type: "vegan",
        ingredients: ["Cauliflower (whole)", "Tahini", "Chickpeas (canned)"]
      },
      {
        name: "Crispy Roast Potatoes",
        type: "side",
        ingredients: ["Potatoes (roast)"]
      },
      {
        name: "Homemade Coleslaw",
        type: "side",
        ingredients: ["Cabbage (coleslaw)", "Carrots (coleslaw)", "Mayonnaise", "Vegan mayo"]
      },
      {
        name: "Braised Leeks",
        type: "side",
        ingredients: ["Leeks", "Butter", "White wine", "Chicken stock"]
      },
      {
        name: "Garlic Aioli",
        type: "sauce",
        ingredients: ["Garlic", "Mayonnaise", "Vegan mayo", "Lemons"]
      }
    ],
    ingredients: [
      { item: "Whole chickens", category: "meat", qty: "3" },
      { item: "Cauliflower (whole)", category: "veg", qty: "2" },
      { item: "Chickpeas (canned)", category: "dry", qty: "2 cans" },
      { item: "Tahini", category: "dry", qty: "1 jar" },
      { item: "Potatoes (roast)", category: "veg", qty: "2kg" },
      { item: "Garlic", category: "veg", qty: "2 heads" },
      { item: "Mayonnaise", category: "dairy", qty: "1 jar" },
      { item: "Vegan mayo", category: "dry", qty: "1 jar" },
      { item: "Cabbage (coleslaw)", category: "veg", qty: "1" },
      { item: "Carrots (coleslaw)", category: "veg", qty: "3" },
      { item: "Lemons", category: "veg", qty: "3" },
      { item: "Fresh herbs (thyme, rosemary)", category: "veg", qty: "2 bunches" },
      { item: "Sugar", category: "dry", qty: "1" },
      { item: "Butter", category: "dairy", qty: "250g" },
      { item: "Leeks", category: "veg", qty: "6" },
      { item: "White wine", category: "dry", qty: "1 bottle" },
      { item: "Chicken stock", category: "dry", qty: "500ml" }
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
    prepBefore: [
      "Brine chickens for 12hrs (see brine recipe)",
      "Remove from brine, pat dry, refrigerate uncovered 12hrs (crispy skin)",
      "Make coleslaw (can do morning of)"
    ],
    prepSameDay: [
      "Remove chickens from brine, pat dry",
      "Herb butter under skin, lemon in cavity",
      "Roast chickens 1.5-2hrs at 180°C",
      "Roast cauliflower with tahini glaze",
      "Roast potatoes",
      "Make garlic aioli (regular + vegan)",
      "Braise leeks in butter, white wine and stock (30-40min)"
    ]
  },
  {
    id: 4,
    name: "BBQ Night",
    night: "Night 4",
    day: "Tuesday",
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
        name: "BBQ Jackfruit",
        type: "vegan",
        ingredients: ["Jackfruit (canned)", "BBQ sauce", "Smoked paprika"]
      },
      {
        name: "Vegan Sausages",
        type: "vegan",
        ingredients: ["Vegan sausages", "Mustard (Dijon + whole grain)"]
      },
      {
        name: "Creamy Potato Salad",
        type: "side",
        ingredients: ["Potatoes (salad)", "Vegan mayo"]
      },
      {
        name: "Coleslaw",
        type: "side",
        ingredients: ["Cabbage (coleslaw)", "Vegan mayo"]
      },
      {
        name: "Crusty Baguettes",
        type: "side",
        ingredients: ["Crusty bread/baguettes"]
      }
    ],
    ingredients: [
      { item: "Pork ribs", category: "meat", qty: "2-3 racks" },
      { item: "Sausages", category: "meat", qty: "22" },
      { item: "Vegan sausages", category: "veg", qty: "4" },
      { item: "Jackfruit (canned)", category: "dry", qty: "2 cans" },
      { item: "Potatoes (salad)", category: "veg", qty: "2kg" },
      { item: "Cabbage (coleslaw)", category: "veg", qty: "1" },
      { item: "Vegan mayo", category: "dry", qty: "1 jar" },
      { item: "Crusty bread/baguettes", category: "dry", qty: "3" },
      { item: "BBQ sauce", category: "dry", qty: "1 bottle" },
      { item: "Mustard (Dijon + whole grain)", category: "dry", qty: "2 jars" },
      { item: "Smoked paprika", category: "dry", qty: "1" },
      { item: "Brown sugar", category: "dry", qty: "1" }
    ],
    prepBefore: [
      "Dry rub or marinate ribs night before",
      "Make potato salad (morning of or day before)",
      "Prep BBQ jackfruit marinade"
    ],
    prepSameDay: [
      "Slow cook ribs 2-3hrs at 150°C",
      "Glaze ribs and finish",
      "Cook sausages + vegan sausages",
      "Heat/cook BBQ jackfruit",
      "Make coleslaw if not done"
    ]
  },
  {
    id: 5,
    name: "Pasta Night",
    night: "Night 5",
    day: "Wednesday",
    dishes: [
      {
        name: "Ravioli in Chicken Jus",
        type: "main",
        ingredients: ["Fresh ravioli (meat)", "Chicken stock", "Butter"]
      },
      {
        name: "Ravioli with Butter & Sage",
        type: "main",
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
        ingredients: ["Pasta (egg-free for vegan)", "Tinned tomatoes", "Tomato paste", "Onions"]
      },
      {
        name: "Cold Asparagus Salad",
        type: "side",
        ingredients: ["Asparagus", "Hazelnuts", "Green grapes", "Fresh dill", "Feta cheese", "Olive oil"]
      },
      {
        name: "Caprese Salad",
        type: "side",
        ingredients: ["Fresh mozzarella", "Tomatoes (caprese)", "Fresh basil", "Olive oil", "Balsamic glaze"]
      }
    ],
    ingredients: [
      { item: "Fresh ravioli (meat)", category: "meat", qty: "2 packs" },
      { item: "Fresh ravioli (cheese)", category: "dairy", qty: "2 packs" },
      { item: "Pasta (egg-free for vegan)", category: "dry", qty: "500g" },
      { item: "Pasta (regular)", category: "dry", qty: "500g" },
      { item: "Minced beef (ragù)", category: "meat", qty: "1kg" },
      { item: "Chicken stock", category: "dry", qty: "1L" },
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
      { item: "Balsamic glaze", category: "dry", qty: "1 bottle" }
    ],
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
      "Blanch asparagus, ice bath, chill",
      "Toast hazelnuts, assemble salad with grapes, dill, feta"
    ]
  },
  {
    id: 6,
    name: "TBD",
    night: "Night 6",
    day: "Thursday",
    dishes: [],
    ingredients: [],
    prepBefore: [],
    prepSameDay: []
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
