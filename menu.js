// =========================================================
// PJ'S PIZZA MENU – edit items and prices here.
// Format: ["Name", "Price", "Description (optional)"]
// Pizzas: ["Name", "Description", "x" if it has special pricing]
// Pizza sizes/prices, hours, phones: see app.js (search for $17.50 / OPEN 7 DAYS)
// =========================================================
const S = {
pizzas:[
 ["Riverlander","Half Hawaiian, Half Supreme"],
 ["Supreme","Cheese, Ham, Mettwurst, Onion, Pineapple, Mushroom, Olives & Capsicum"],
 ["Super Supreme","Supreme plus Prawns, Oysters & Anchovies","x"],
 ["Hawaiian","Ham, Cheese & Pineapple"],
 ["Mexican","Cheese, Ham, Pepperoni, Capsicum, Onion & Chillies"],
 ["Seafood","Cheese, Prawns, Oysters, Anchovies & Crab Meat"],
 ["Vegetarian","Cheese, Pineapple, Olives, Onion, Capsicum & Mushroom"],
 ["Special","Cheese, Ham, Pepperoni & Mushroom"],
 ["BBQ Chicken","Cheese, Chicken & BBQ Sauce Base"],
 ["Australian","Cheese, Ham, Egg & Onion"],
 ["Aussie BBQ","BBQ Sauce, Cheese, Ham, Pineapple, Onion Rings & Sliced Tomato"],
 ["Greek","Yiros Meat, Feta Cheese, Onion & Olives","x"],
 ["Uncle Sam","Pepperoni, Onion, Olives & Mushrooms"],
 ["Margarita","Virginia Ham, Fresh Tomato and Philadelphia Cheese"],
 ["Meatlovers","Cheese, Ham, Mettwurst, Pepperoni, Bacon on Tomato or BBQ Sauce Base"],
 ["Prawn","Cheese, Prawns and Crushed Garlic on a Tomato Sauce Base"]
],
burgers:[
 ["Plain Hamburger","$12.99","Patty, Cheese & Sauce"],
 ["Hamburger with the Lot","$17.99","Lettuce, Tomato, Cheese, Patty, Onion, Bacon & Egg with Tomato Sauce"],
 ["Ultimate Burger","$19.99","Hamburger with the Lot plus Potato Cake & Pineapple"],
 ["Plain Steak Sandwich / Roll","$12.99","Steak, Cheese & Sauce"],
 ["Steak Burger / Sandwich with the Lot","$17.99","Lettuce, Tomato, Cheese, Steak, Onion, Bacon & Egg with Tomato Sauce"],
 ["Hawaiian Burger","$14.49","Ham Steak, Pineapple, Lettuce, Tomato & Mayo"],
 ["Chicken Fillet Burger","$13.99","Lettuce, Tomato, Cheese & Chicken Schnitzel with Tomato Sauce or Mayo"],
 ["Schnitzel Burger","$15.99","Lettuce, Tomato, Cheese & Beef Schnitzel with Tomato Sauce or Mayo"],
 ["Potato Cake Burger","$13.99","Potato Cake, Lettuce, Tomato, Cheese, Onion, Bacon & Egg with Tomato Sauce"],
 ["Fish Burger","$12.99","Lettuce, Tomato, Cheese & a Fish Patty with Mayonnaise"],
 ["Fish Roll","$14.99","Lettuce and Grilled or Battered Fish with Mayonnaise"],
 ["Egg & Bacon Roll","$9.99","Egg & Bacon on a Roll"],
 ["Hot Chicken Roll","$9.99","Roast Chicken with Gravy or Mayonnaise"]
],
hotdogs:[
 ["Plain","$9.99"],["Cheese & Sauce","$10.99"],["The Lot","$12.99","Bacon, Onion, Cheese, Mustard & Sauce"]
],
yiros:[
 ["Chicken Yiros","$17.99","Lettuce, Tomato, Onion and Garlic Sauce"],
 ["Lamb Yiros or Combo","$19.99","Lettuce, Tomato, Onion and Garlic Sauce"],
 ["Yiros Pack","$21.99","Yiros meat, chips and pitta bread"],
 ["AB Pack","$24.99","Meat, chips, cheese, BBQ sauce, sweet chilli, tomato & garlic sauce"],
 ["Warm Chicken, Lamb or Combo Salad","$19.99","Meat, lettuce, tomato, capsicum, red onion and olives topped with tzatziki"],
 ["Beef Schnitzel Pack","$22.49","With salad or vegetables, chips and gravy"],
 ["Chicken Schnitzel","$22.49","With salad or vegetables, chips and gravy"],
 ["Schnitzel Parmi Pack","$26.99","Chicken or beef with salad or vegetables, chips and gravy"],
 ["Seafood Basket","$23.99","Fish, scallops, calamari, prawn chips with salad and sauce"],
 ["Calamari Pack","$22.99","Eight calamari rings with chips, salad and tartar sauce"],
 ["Crumbed Prawns","$22.99","Eight crumbed prawns with chips, salad and tartar sauce"],
 ["Fish Pack","$22.99","Battered fish with chips, salad and tartar sauce"],
 ["Chicken Nuggets & Chips","$8.99","Five nuggets and a small serve of chips"]
],
fish:[
 ["Fish","$8.99"],["Barramundi","$9.99"],["Chiko Roll","$3.99"],["Crumbed Scallops","$2.49"],
 ["Chicken Nuggets","$1.00"],["Crumbed Prawns","$2.49"],["Dippy Dogs","$3.99"],["Calamari","$2.49"],
 ["Dim Sims","$1.99"],["Crab Sticks","$2.99"],["Corn Jacks","$3.99"],["Fish Cakes","$2.99"],
 ["Chicken Munchies","10 for $4.49"],["Potato Cakes","$1.99"],["Pineapple / Banana Fritters","$4.49"],
 ["Spring Rolls","$3.99"],["Garlic Chicken Balls","$2.49"],["Hash Brown","$2.00"],["Devil Wing Dings","$2.49"],
 ["Hot Jam Donuts","1 for $2.49","or 3 for $6.00"]
],
chips:[
 ["Chips & Gravy","$11.99"],["Chips, Cheese & Gravy","$13.99"],["Wedges with Sour Cream & Chilli","$11.99"]
],
sides:[
 ["Small Salad","$4.50","Coleslaw or Pasta"],["Large Salad","$6.99","Coleslaw or Pasta"],
 ["Small Gravy","$4.50"],["Large Gravy","$6.99"]
],
deals:[
 ["Couple Pizza Deal","$39.99","Large Pizza + Large Chips + 2 Small Drinks + Garlic Bread"],
 ["Jumbo Pizza Deal","$54.99","Jumbo Pizza + Large Chips + 1.25L Drink + Garlic Bread"],
 ["Double Pizza Deal","$59.99","2 Large Pizzas + Large Chips + 1.25L Drink + Garlic Bread"],
 ["Family Feast Deal","$69.99","2 Family Pizzas + Large Chips + 2L Drink + 2 Garlic Breads"]
]};
