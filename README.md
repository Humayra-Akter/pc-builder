This is a [Next.js](https://nextjs.org/) project bootstrapped with [`pc-builder`](https://github.com/Humayra-Akter/pc-builder).

## Getting Started

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

The navbar have the following categories:

CPU / Processor
Motherboard
RAM
Power Supply Unit
Storage Device
Monitor
Others

Each category have a corresponding route. (SSG implementation)

## Home page

The home page featured 6 random PC components as Featured Products.

Each Featured has the following properties:
Image
Product Name
Category
Price
Status ( In Stock | Out of stock)
Rating

Each featured product is clickable and take the user to the pc-builder page.

## Featured Product

There are 6 Featured Categories under the Featured Product section. The Categories are:

CPU / Processor
Motherboard
RAM
Power Supply Unit
Storage Device
Monitor

Featured Category Sections:
Each featured category is clickable.
Clicking on any of the Featured Categories will redirect the user to another page where at least 7 products of that category will be displayed.

Each product card on this page shows the following properties:

Image
Product Name
Category
Price
Status
Rating

Each product retrieved after querying on this page will also be clickable and should take the user to the product detail page.

## product detail page

Product Detail Page: (SSG implementation)
Each PC Component must have the following properties:

Image
Product Name
Category
Status: In Stock | Out of stock
Price
Description
Key Features (like Brand, Model, Specification, Port, Type, Resolution, Voltage, etc)
Individual Rating
Average Rating
Reviews

## PC Builder Page: (SSR implementation)

The PC Builder page should have category sections as follows:
CPU / Processor
Motherboard
RAM
Power Supply Unit
Storage Device
Monitor

Each category have a Choose Button.
Clicking on the Choose Button will take the user to another page where at least 7 components of that specific category will be displayed.

Each component card on this page shows the following properties:
Image
Product Name
Category
Price
Status
Rating

Each component card on that page has an Add To Builder Button.Clicking on this button will redirect the user to the PC Builder page, and it will update the state of that selected category section in the PC Builder Page with the selected component below. (using Redux)

After adding at least 5 - 6 Components (CPU, RAM, Power Supply, Storage, Motherboard, Casing), the user will be able to click on the Place order button. (This button will be disabled unless the user adds at least 5-6 of the mentioned components)

### protected/private route

The PC Builder Page has a protected/private route (only logged-in users can visit this route). Using NextAuth two social login (Google & Github) provider to enable user authentication.

## toast

Clicking on the Complete Build button will show a success alert.

The Home page should also have a hero section/banner section and a footer.
