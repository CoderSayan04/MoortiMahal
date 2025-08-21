

export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addproductFormControls = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "durgapuja", label: "Durgapuja" },
      { id: "festival", label: "Festival" },
      { id: "diwali", label: "Diwali" },
      { id: "navaratri", label: "Navaratri" },
      { id: "samagrees", label: "Samagrees" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "local-artisans", label: "Local Artisans" },
      { id: "premium-handcrafted", label: "Premium Handcrafted" },
      { id: "temple-collection", label: "Temple Collection" },
      { id: "modern-designs", label: "Modern Designs" },
      { id: "gifting-decor", label: "Gifting & Decor" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "durgapuja",
    label: "Durgapuja",
    path: "/shop/listing",
  },
  {
    id: "festival",
    label: "Festival",
    path: "/shop/listing",
  },
  {
    id: "diwali",
    label: "Diwali",
    path: "/shop/listing",
  },
  {
    id: "navaratri",
    label: "Navaratri",
    path: "/shop/listing",
  },
  {
    id: "samagrees",
    label: "Samagrees",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  durgapuja: "Durgapuja",
  festival: "Festival",
  diwali: "Diwali"  ,
  navaratri: "Navaratri",
  samagrees: "Samagrees",
};

export const brandOptionsMap = {
  "local-artisans": "Local Artisans",
  "premium-handcrafted": "Premium Handcrafted",
  "temple-collection": "Temple Collection",
  "modern-designs": "Modern Designs",
  "gifting-decor": "Gifting & Decor",
};

export const filterOptions = {
  category: [
      { id: "durgapuja", label: "Durgapuja" },
      { id: "festival", label: "Festival" },
      { id: "diwali", label: "Diwali" },
      { id: "navaratri", label: "Navaratri" },
      { id: "samagrees", label: "Samagrees" },
  ],
  brand: [
    { id: "local-artisans", label: "Local Artisans" },
    { id: "premium-handcrafted", label: "Premium Handcrafted" },
    { id: "temple-collection", label: "Temple Collection" },
    { id: "modern-designs", label: "Modern Designs" },
    { id: "gifting-decor", label: "Gifting & Decor" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
