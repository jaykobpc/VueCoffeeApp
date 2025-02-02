export default {
    Cart: [],
    filteredProducts: [],
    notificationData: [
        {
            id: 1,
            title: 'Delivery note',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia doloribus, ex perspiciatis corporis impedit aperiam possimus'
        },
        {
            id: 2,
            title: 'Confirmation Alert',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia doloribus, ex perspiciatis corporis impedit aperiam possimus'
        },
    ],
    recommededData: [
        { id: 1, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Cafe Mocha', },
        { id: 2, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Frappuccino', },
        { id: 16, image: 'prodMilkShake.png', brand: 'MilkShake', price: '150', name: 'Strawberry Mix', },
        { id: 17, image: 'prodMilkShake.png', brand: 'MilkShake', price: '150', name: 'Vanilla', },
        { id: 29, image: 'prodsmoothie.png', brand: 'Smoothies', price: '150', name: 'Cherry Vanilla', },
        { id: 30, image: 'prodsmoothie.png', brand: 'Smoothies', price: '150', name: 'Grape fruit', },
        { id: 53, image: 'prodburger.png', brand: 'Burger', price: '250', name: 'BBQ Steak', },
        { id: 54, image: 'prodburger.png', brand: 'Burger', price: '250', name: 'BBQ Lamb', },
    ],
    categories: [
        { id: 1, image: "coffee.png", title: "Coffee brew", filter: "Coffee", items: 15 },
        { id: 2, image: "milkshke.png", title: "Milk Shakes", filter: "MilkShake", items: 6 },
        { id: 3, image: "smoothie.png", title: "Smoothies", filter: "Smoothies", items: 10 },
        { id: 4, image: "prodCocktail.png", title: "Cocktails", filter: "Cocktail", items: 6 },
        { id: 5, image: "sandwich.png", title: "Sandwiches", filter: "Sandwich", items: 12 },
        { id: 6, image: "burger.png", title: "Burgers", filter: "Burger", items: 9 },
        { id: 7, image: "pizza.png", title: "Pizza", filter: "Pizza", items: 9 },
        { id: 8, image: "salads.png", title: "Salads", filter: "Salad", items: 5 }
    ],
    Products: [
        /** Coffee */
        { id: 1, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Cafe Mocha', },
        { id: 2, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Frappuccino', },
        { id: 3, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Caramel Macciato', },
        { id: 4, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Americano', },
        { id: 5, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Turkish Coffee', },
        { id: 6, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Cafe Cubano', },
        { id: 7, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Cafe Latte', },
        { id: 8, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Irish Coffee', },
        { id: 9, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Espresso', },
        { id: 10, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Cappuccino', },
        { id: 11, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Cortado', },
        { id: 12, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Affogato', },
        { id: 13, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Plain Coffee', },
        { id: 14, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Iced Coffee', },
        { id: 15, image: 'coffee.png', brand: 'Coffee', price: '300', name: 'Cafe Au Lait', },
        /** Milk shake */
        { id: 16, image: 'prodMilkShake.png', brand: 'MilkShake', price: '150', name: 'Strawberry Mix', },
        { id: 17, image: 'prodMilkShake.png', brand: 'MilkShake', price: '150', name: 'Vanilla', },
        { id: 18, image: 'prodMilkShake.png', brand: 'MilkShake', price: '150', name: 'Red Cherry', },
        { id: 19, image: 'prodMilkShake.png', brand: 'MilkShake', price: '150', name: 'Cappuccino', },
        { id: 20, image: 'prodMilkShake.png', brand: 'MilkShake', price: '150', name: 'Caramel Fudge', },
        { id: 21, image: 'prodMilkShake.png', brand: 'MilkShake', price: '150', name: 'Heath Toffee', },
        /** Smoothies */
        { id: 22, image: 'prodsmoothie.png', brand: 'Smoothies', price: '150', name: 'Strawberry', },
        { id: 23, image: 'prodsmoothie.png', brand: 'Smoothies', price: '150', name: 'Strawberry banana', },
        { id: 24, image: 'prodsmoothie.png', brand: 'Smoothies', price: '150', name: 'Peach Mango', },
        { id: 25, image: 'prodsmoothie.png', brand: 'Smoothies', price: '150', name: 'Banana', },
        { id: 26, image: 'prodsmoothie.png', brand: 'Smoothies', price: '150', name: 'Raspberry Orange', },
        { id: 27, image: 'prodsmoothie.png', brand: 'Smoothies', price: '150', name: 'Honeydew Almond', },
        { id: 28, image: 'prodsmoothie.png', brand: 'Smoothies', price: '150', name: 'Triple Berry', },
        { id: 29, image: 'prodsmoothie.png', brand: 'Smoothies', price: '150', name: 'Cherry Vanilla', },
        { id: 30, image: 'prodsmoothie.png', brand: 'Smoothies', price: '150', name: 'Grape fruit', },
        /** Fruit Drinks */
        { id: 31, image: 'cocktail.png', brand: 'Cocktail', price: '150', name: 'Tequila Sunrise', },
        { id: 32, image: 'cocktail.png', brand: 'Cocktail', price: '150', name: 'Blue Lagoon', },
        { id: 33, image: 'cocktail.png', brand: 'Cocktail', price: '150', name: 'Margarita', },
        { id: 34, image: 'cocktail.png', brand: 'Cocktail', price: '150', name: 'Fruit Tingle', },
        { id: 35, image: 'cocktail.png', brand: 'Cocktail', price: '150', name: 'Lemon Squash', },
        { id: 36, image: 'cocktail.png', brand: 'Cocktail', price: '150', name: 'Mojito', },
        /** Sandwiches */
        { id: 37, image: 'prodSandwich.png', brand: 'Sandwich', price: '150', name: 'Vietnamese turkey', },
        { id: 38, image: 'prodSandwich.png', brand: 'Sandwich', price: '150', name: 'BBQ beef brisket', },
        { id: 39, image: 'prodSandwich.png', brand: 'Sandwich', price: '150', name: 'Salmon with egg', },
        { id: 40, image: 'prodSandwich.png', brand: 'Sandwich', price: '150', name: 'Falafel pittas', },
        { id: 41, image: 'prodSandwich.png', brand: 'Sandwich', price: '150', name: 'Guacamole wraps', },
        { id: 42, image: 'prodSandwich.png', brand: 'Sandwich', price: '150', name: 'Crunchy tuna', },
        { id: 43, image: 'prodSandwich.png', brand: 'Sandwich', price: '150', name: 'Roasted vegetable', },
        { id: 44, image: 'prodSandwich.png', brand: 'Sandwich', price: '150', name: 'Chicken pesto', },
        { id: 45, image: 'prodSandwich.png', brand: 'Sandwich', price: '150', name: 'Tuna and caper', },
        { id: 46, image: 'prodSandwich.png', brand: 'Sandwich', price: '150', name: 'Egg mayo rolls', },
        /** Burgers */
        { id: 47, image: 'prodburger.png', brand: 'Burger', price: '250', name: 'Smoked Beef', },
        { id: 48, image: 'prodburger.png', brand: 'Burger', price: '250', name: 'Wild Salmon', },
        { id: 49, image: 'prodburger.png', brand: 'Burger', price: '250', name: 'Steamed Cheese', },
        { id: 50, image: 'prodburger.png', brand: 'Burger', price: '250', name: 'Beef', },
        { id: 51, image: 'prodburger.png', brand: 'Burger', price: '250', name: 'Teriyaki', },
        { id: 52, image: 'prodburger.png', brand: 'Burger', price: '250', name: 'Grilled Chicked', },
        { id: 53, image: 'prodburger.png', brand: 'Burger', price: '250', name: 'BBQ Steak', },
        { id: 54, image: 'prodburger.png', brand: 'Burger', price: '250', name: 'BBQ Lamb', },
        { id: 55, image: 'prodburger.png', brand: 'Burger', price: '250', name: 'Chicked and Cheese', },
        /** Pizza */
        { id: 56, image: 'prodpizza.png', brand: 'Pizza', price: '250', name: 'Margherita', },
        { id: 57, image: 'prodpizza.png', brand: 'Pizza', price: '250', name: 'Pepperoni', },
        { id: 58, image: 'prodpizza.png', brand: 'Pizza', price: '250', name: 'Macaroni And Cheese', },
        { id: 59, image: 'prodpizza.png', brand: 'Pizza', price: '250', name: 'Buffalo Chicken', },
        { id: 60, image: 'prodpizza.png', brand: 'Pizza', price: '250', name: 'Grilled Zucchini', },
        { id: 61, image: 'prodpizza.png', brand: 'Pizza', price: '250', name: 'Chicken Alfredo', },
        { id: 62, image: 'prodpizza.png', brand: 'Pizza', price: '250', name: 'Taco Quesadila', },
        { id: 63, image: 'prodpizza.png', brand: 'Pizza', price: '250', name: 'Caramel Apple', },
        { id: 64, image: 'prodpizza.png', brand: 'Pizza', price: '250', name: 'Verde Chicken Enchilada', },
        /** Salads */
        { id: 65, image: 'prodsalad.png', brand: 'Salad', price: '250', name: 'Chicken Avocado', },
        { id: 66, image: 'prodsalad.png', brand: 'Salad', price: '250', name: 'Grilled Chilli Lime', },
        { id: 67, image: 'prodsalad.png', brand: 'Salad', price: '250', name: 'Balsamic Avocado', },
        { id: 68, image: 'prodsalad.png', brand: 'Salad', price: '250', name: 'Plain Avocado', },
        { id: 69, image: 'prodsalad.png', brand: 'Salad', price: '250', name: 'African Kachumbari', },
    ],
}