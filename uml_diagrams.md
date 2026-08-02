# LUXE 3D E-Commerce Website - UML Diagrams

## Project Overview
This document contains the UML diagrams for the LUXE e-commerce project — a React-based online store with a 3D hover effect on product images, a Firebase Realtime Database backend, and a Firebase-Authenticated Admin Dashboard for managing products.

---

## 1. Use Case Diagram

### Actors
- **Customer**: Browses and shops on the website (no login required)
- **Admin**: Logs in to manage products through the Admin Dashboard

### Customer Use Cases
- Browse Products
- View Product Details (3D Hover Effect)
- Filter / Sort Products
- Add to Cart
- Buy Now / Checkout

### Admin Use Cases
- Admin Login
- Add Product
- Edit Product
- Delete Product

```mermaid
graph LR
    Customer["Customer"]
    Admin["Admin"]

    subgraph LUXE["LUXE E-Commerce Website"]
        UC1(("Browse Products"))
        UC2(("View Product Details<br/>3D Hover Effect"))
        UC3(("Filter / Sort Products"))
        UC4(("Add to Cart"))
        UC5(("Buy Now / Checkout"))
        UC6(("Admin Login"))
        UC7(("Add Product"))
        UC8(("Edit Product"))
        UC9(("Delete Product"))
    end

    Customer --> UC1
    Customer --> UC2
    Customer --> UC3
    Customer --> UC4
    Customer --> UC5

    Admin --> UC6
    Admin --> UC7
    Admin --> UC8
    Admin --> UC9

    style Customer fill:#e1f5ff,stroke:#0177cd,stroke-width:2px
    style Admin fill:#ffe1e1,stroke:#cd0177,stroke-width:2px
```

---

## 2. Class Diagram

### Core Classes

#### Product
- `id`: String
- `name`: String
- `category`: String
- `image`: String
- `originalPrice`: Number
- `variants`: Array
- `rating`: Number
- `reviews`: Number
- `stock`: Number
- `featured`: Boolean
- `trending`: Boolean

#### Variant
- `name`: String
- `color`: String
- `price`: Number

#### CartItem
- `product`: Product
- `variant`: Variant
- `quantity`: Number

#### Category
- `id`: String
- `name`: String
- `description`: String
- `image`: String
- `productCount`: Number

#### AdminUser
- `email`: String
- `password`: String
- `isLoggedIn`: Boolean

#### ProductsContext
- `products`: Array
- `categories`: Array
- `loading`: Boolean

```mermaid
classDiagram
    class Product {
        -id: String
        -name: String
        -category: String
        -image: String
        -originalPrice: Number
        -variants: Array
        -rating: Number
        -reviews: Number
        -stock: Number
        -featured: Boolean
        -trending: Boolean
        +getPrice()
        +getDiscount()
    }

    class Variant {
        -name: String
        -color: String
        -price: Number
    }

    class CartItem {
        -product: Product
        -variant: Variant
        -quantity: Number
        +addToCart()
        +removeFromCart()
        +updateQuantity()
    }

    class Category {
        -id: String
        -name: String
        -description: String
        -image: String
        -productCount: Number
    }

    class AdminUser {
        -email: String
        -password: String
        -isLoggedIn: Boolean
        +login()
        +logout()
    }

    class ProductsContext {
        -products: Array
        -categories: Array
        -loading: Boolean
        +addProduct()
        +updateProduct()
        +deleteProduct()
    }

    CartItem --> Product : contains
    CartItem --> Variant : has
    Product --> Variant : has many
    Product --> Category : belongs to
    ProductsContext --> Product : manages
    AdminUser --> ProductsContext : updates via
```

---

## 3. Sequence Diagram — Add to Cart & Admin Product Update

### Participants
- **Customer**: End-user on the Product Detail page
- **Product Page (React UI)**: The frontend component
- **CartContext**: Manages the shopping cart state
- **ProductsContext**: Manages product data and connects to Firebase
- **Firebase Database**: Realtime Database storing all products

### Flow Description

**Add to Cart:**
1. Customer clicks "Add to Cart"
2. Product Page calls `addToCart(product, variant)`
3. CartContext updates the cart state
4. CartContext returns the updated cart
5. Product Page shows the cart drawer with the item

**Admin Updates a Product:**
1. Admin edits a product's price on the Admin Dashboard
2. Product Page calls `updateProduct(id, data)`
3. ProductsContext calls Firebase `update(products/id)`
4. Firebase triggers `onValue()` with the new data
5. ProductsContext re-renders the product list with the updated price everywhere on the site

```mermaid
sequenceDiagram
    participant Customer
    participant UI as Product Page (React UI)
    participant Cart as CartContext
    participant Products as ProductsContext
    participant Firebase as Firebase Database

    Customer->>UI: Click "Add to Cart"
    UI->>Cart: addToCart(product, variant)
    Cart->>Cart: Update cart state
    Cart-->>UI: Return updated cart
    UI-->>Customer: Show cart drawer with item

    Customer->>UI: Admin edits product price
    UI->>Products: updateProduct(id, data)
    Products->>Firebase: update(products/id)
    Firebase-->>Products: onValue() triggers with new data
    Products-->>UI: Products list re-renders with updated price
```

---

## 4. Activity Diagram — Shopping Flow

### Flow Description
1. Customer opens the website
2. Browses products / categories
3. Views product details (with 3D hover effect)
4. Decides to add to cart or buy now
5. If added to cart, can continue shopping or proceed to checkout
6. If buy now, goes straight to checkout

```mermaid
flowchart TD
    Start((Start)) --> Open[Open Website]
    Open --> Browse[Browse Products / Categories]
    Browse --> View[View Product Details<br/>3D Hover Effect]
    View --> Decide{Add to Cart<br/>or Buy Now?}
    Decide -->|Add to Cart| AddCart[Add Product to Cart]
    Decide -->|Buy Now| Checkout[Proceed to Checkout]
    AddCart --> Continue[Continue Shopping]
    AddCart -->|Ready to buy| Checkout
    Continue -.-> Browse
    Checkout --> End((End))
```

---

## Technical Notes

### 3D Hover Effect
- Implemented using React state (`useState`) and mouse-move event tracking
- The product image rotates on the X and Y axis (`rotateX`, `rotateY`) based on cursor position, using CSS `transform` and `perspective`
- No external 3D model files are used — the effect is achieved purely with CSS 3D transforms

### Data Storage
- Product data is stored in Firebase Realtime Database under the `products` node
- Each product is read in real time using `onValue()`, so any Admin change reflects instantly on the customer-facing site

### Authentication
- Admin login uses Firebase Authentication (Email/Password)
- Protected routing (`ProtectedRoute.jsx`) ensures the Admin Dashboard is only accessible after login

---

## Conclusion

These UML diagrams describe the actual structure and behaviour of the LUXE e-commerce project:

- **Functional requirements** through the Use Case Diagram
- **Static structure** through the Class Diagram
- **Dynamic behaviour** through the Sequence Diagram
- **Process flow** through the Activity Diagram

The system focuses on a modern customer shopping experience with a 3D hover effect and a simple, secure Admin panel for real-time product management.