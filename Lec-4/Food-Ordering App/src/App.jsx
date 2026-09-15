import Header from './Header'
import RestaurantCard from './RestrauntCard'
import './App.css'


const restaurants = [
  {
    id: 1,
    name: "Meghna Foods",
    cuisines: "Biryani, North Indian",
    rating: 4.5,
    deliveryTime: 30,
    location: "Koramangala",
    image: "https://unsplash.com/photos/a-black-bowl-filled-with-food-on-top-of-a-table-OT-Wlz2Mn7w"
  },
  {
    id: 2,
    name: "Empire Restaurant",
    cuisines: "Biryani, Chinese, North Indian",
    rating: 4.3,
    deliveryTime: 35,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe"
  },
  {
    id: 3,
    name: "Truffles",
    cuisines: "Burgers, American, Fast Food",
    rating: 4.6,
    deliveryTime: 25,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    id: 4,
    name: "Burger King",
    cuisines: "Burgers, Fast Food",
    rating: 4.2,
    deliveryTime: 25,
    location: "HSR Layout",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add"
  },
  {
    id: 5,
    name: "KFC",
    cuisines: "Chicken, Burgers, Fast Food",
    rating: 4.1,
    deliveryTime: 30,
    location: "BTM Layout",
    image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb"
  },
  {
    id: 6,
    name: "Domino's Pizza",
    cuisines: "Pizza, Italian, Fast Food",
    rating: 4.3,
    deliveryTime: 25,
    location: "Jayanagar",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
  },
  {
    id: 7,
    name: "Pizza Hut",
    cuisines: "Pizza, Italian",
    rating: 4.2,
    deliveryTime: 30,
    location: "Marathahalli",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
  },
  {
    id: 8,
    name: "Burger Seigneur",
    cuisines: "Burgers, American",
    rating: 4.4,
    deliveryTime: 28,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    id: 9,
    name: "Biryani Blues",
    cuisines: "Biryani, Mughlai",
    rating: 4.4,
    deliveryTime: 35,
    location: "Whitefield",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
  },
  {
    id: 10,
    name: "Paradise Biryani",
    cuisines: "Biryani, Hyderabadi",
    rating: 4.3,
    deliveryTime: 40,
    location: "Electronic City",
    image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972"
  },
  {
    id: 11,
    name: "MTR",
    cuisines: "South Indian, Breakfast",
    rating: 4.6,
    deliveryTime: 25,
    location: "Lalbagh",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
  },
  {
    id: 12,
    name: "Vidyarthi Bhavan",
    cuisines: "South Indian, Dosa",
    rating: 4.7,
    deliveryTime: 30,
    location: "Basavanagudi",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921"
  },
  {
    id: 13,
    name: "CTR",
    cuisines: "South Indian, Dosa",
    rating: 4.6,
    deliveryTime: 30,
    location: "Malleshwaram",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
  },
  {
    id: 14,
    name: "Udupi Garden",
    cuisines: "South Indian, Vegetarian",
    rating: 4.3,
    deliveryTime: 25,
    location: "HSR Layout",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
  },
  {
    id: 15,
    name: "Nagarjuna",
    cuisines: "Andhra, South Indian",
    rating: 4.4,
    deliveryTime: 35,
    location: "Residency Road",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7"
  },
  {
    id: 16,
    name: "Namma Veedu",
    cuisines: "South Indian, Vegetarian",
    rating: 4.2,
    deliveryTime: 30,
    location: "JP Nagar",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
  },
  {
    id: 17,
    name: "Saravana Bhavan",
    cuisines: "South Indian, Vegetarian",
    rating: 4.4,
    deliveryTime: 30,
    location: "Richmond Road",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc"
  },
  {
    id: 18,
    name: "Anand Sweets",
    cuisines: "Sweets, North Indian",
    rating: 4.5,
    deliveryTime: 25,
    location: "Jayanagar",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
  },
  {
    id: 19,
    name: "Chai Point",
    cuisines: "Tea, Snacks, Beverages",
    rating: 4.2,
    deliveryTime: 20,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
  },
  {
    id: 20,
    name: "Third Wave Coffee",
    cuisines: "Coffee, Beverages, Desserts",
    rating: 4.4,
    deliveryTime: 20,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  },
  {
    id: 21,
    name: "Starbucks",
    cuisines: "Coffee, Beverages, Desserts",
    rating: 4.3,
    deliveryTime: 20,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    id: 22,
    name: "Cafe Coffee Day",
    cuisines: "Coffee, Snacks, Desserts",
    rating: 4.1,
    deliveryTime: 25,
    location: "BTM Layout",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0"
  },
  {
    id: 23,
    name: "Theobroma",
    cuisines: "Desserts, Bakery",
    rating: 4.5,
    deliveryTime: 25,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307"
  },
  {
    id: 24,
    name: "Glen's Bakehouse",
    cuisines: "Bakery, Desserts, Continental",
    rating: 4.4,
    deliveryTime: 30,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
  },
  {
    id: 25,
    name: "Magnolia Bakery",
    cuisines: "Bakery, Desserts",
    rating: 4.3,
    deliveryTime: 30,
    location: "Whitefield",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
  },
  {
    id: 26,
    name: "Social",
    cuisines: "North Indian, Continental, Beverages",
    rating: 4.3,
    deliveryTime: 40,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
  },
  {
    id: 27,
    name: "Toit",
    cuisines: "Continental, Italian, Beverages",
    rating: 4.5,
    deliveryTime: 40,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
  },
  {
    id: 28,
    name: "Arbor Brewing Company",
    cuisines: "Continental, American",
    rating: 4.4,
    deliveryTime: 45,
    location: "Brigade Road",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
  },
  {
    id: 29,
    name: "Smoke House Deli",
    cuisines: "Continental, Italian",
    rating: 4.4,
    deliveryTime: 40,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  },
  {
    id: 30,
    name: "Hard Rock Cafe",
    cuisines: "American, Burgers, Continental",
    rating: 4.3,
    deliveryTime: 45,
    location: "MG Road",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9"
  },
  {
    id: 31,
    name: "Smoor",
    cuisines: "Desserts, Bakery, Cafe",
    rating: 4.5,
    deliveryTime: 25,
    location: "Whitefield",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d"
  },
  {
    id: 32,
    name: "Belgian Waffle Co",
    cuisines: "Desserts, Waffles",
    rating: 4.4,
    deliveryTime: 25,
    location: "HSR Layout",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d"
  },
  {
    id: 33,
    name: "Frozen Bottle",
    cuisines: "Desserts, Beverages",
    rating: 4.2,
    deliveryTime: 25,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
  },
  {
    id: 34,
    name: "Naturals Ice Cream",
    cuisines: "Ice Cream, Desserts",
    rating: 4.5,
    deliveryTime: 20,
    location: "Jayanagar",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a"
  },
  {
    id: 35,
    name: "Corner House",
    cuisines: "Ice Cream, Desserts",
    rating: 4.6,
    deliveryTime: 20,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1560008581-09826d1de69e"
  },
  {
    id: 36,
    name: "Wow Momo",
    cuisines: "Momos, Tibetan, Fast Food",
    rating: 4.2,
    deliveryTime: 30,
    location: "BTM Layout",
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9"
  },
  {
    id: 37,
    name: "Momo Guy",
    cuisines: "Momos, Chinese",
    rating: 4.3,
    deliveryTime: 30,
    location: "HSR Layout",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c"
  },
  {
    id: 38,
    name: "Beijing Bites",
    cuisines: "Chinese, Asian",
    rating: 4.2,
    deliveryTime: 35,
    location: "Marathahalli",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d"
  },
  {
    id: 39,
    name: "Mainland China",
    cuisines: "Chinese, Asian",
    rating: 4.4,
    deliveryTime: 40,
    location: "Whitefield",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
  },
  {
    id: 40,
    name: "Wok This Way",
    cuisines: "Chinese, Asian, Thai",
    rating: 4.3,
    deliveryTime: 35,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554"
  },
  {
    id: 41,
    name: "Noodle Bar",
    cuisines: "Asian, Chinese, Noodles",
    rating: 4.1,
    deliveryTime: 30,
    location: "HSR Layout",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624"
  },
  {
    id: 42,
    name: "Mamagoto",
    cuisines: "Asian, Chinese, Thai",
    rating: 4.4,
    deliveryTime: 40,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9"
  },
  {
    id: 43,
    name: "Khao Suey",
    cuisines: "Burmese, Asian",
    rating: 4.5,
    deliveryTime: 40,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
  },
  {
    id: 44,
    name: "Thai Basil",
    cuisines: "Thai, Asian",
    rating: 4.3,
    deliveryTime: 35,
    location: "Whitefield",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd"
  },
  {
    id: 45,
    name: "Punjab Grill",
    cuisines: "North Indian, Mughlai",
    rating: 4.5,
    deliveryTime: 40,
    location: "UB City",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe"
  },
  {
    id: 46,
    name: "Barbeque Nation",
    cuisines: "North Indian, BBQ, Chinese",
    rating: 4.4,
    deliveryTime: 45,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947"
  },
  {
    id: 47,
    name: "Absolute Barbecues",
    cuisines: "BBQ, North Indian, Chinese",
    rating: 4.3,
    deliveryTime: 45,
    location: "Marathahalli",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
  },
  {
    id: 48,
    name: "Nawab's Biryani",
    cuisines: "Biryani, Mughlai",
    rating: 4.2,
    deliveryTime: 35,
    location: "BTM Layout",
    image: "https://images.unsplash.com/photo-1633945274309-2c16c9682a8c"
  },
  {
    id: 49,
    name: "Hyderabadi Spice",
    cuisines: "Biryani, Hyderabadi",
    rating: 4.4,
    deliveryTime: 35,
    location: "HSR Layout",
    image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972"
  },
  {
    id: 50,
    name: "Andhra Kitchen",
    cuisines: "Andhra, South Indian",
    rating: 4.3,
    deliveryTime: 35,
    location: "Electronic City",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7"
  },
  {
    id: 51,
    name: "Punjabi Rasoi",
    cuisines: "North Indian, Punjabi",
    rating: 4.2,
    deliveryTime: 35,
    location: "Rajajinagar",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
  },
  {
    id: 52,
    name: "Delhi Highway",
    cuisines: "North Indian, Mughlai",
    rating: 4.4,
    deliveryTime: 40,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe"
  },
  {
    id: 53,
    name: "Moti Mahal",
    cuisines: "North Indian, Mughlai",
    rating: 4.3,
    deliveryTime: 40,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0"
  },
  {
    id: 54,
    name: "Rajdhani Thali",
    cuisines: "Rajasthani, Gujarati",
    rating: 4.5,
    deliveryTime: 40,
    location: "Jayanagar",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554"
  },
  {
    id: 55,
    name: "Rajasthani Rasoi",
    cuisines: "Rajasthani, Vegetarian",
    rating: 4.2,
    deliveryTime: 35,
    location: "JP Nagar",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
  },
  {
    id: 56,
    name: "Green Leaf",
    cuisines: "Vegetarian, South Indian",
    rating: 4.1,
    deliveryTime: 30,
    location: "BTM Layout",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  },
  {
    id: 57,
    name: "Plant Food",
    cuisines: "Healthy, Vegetarian, Vegan",
    rating: 4.4,
    deliveryTime: 30,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999"
  },
  {
    id: 58,
    name: "FreshMenu",
    cuisines: "Healthy, Continental",
    rating: 4.2,
    deliveryTime: 30,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352"
  },
  {
    id: 59,
    name: "EatFit",
    cuisines: "Healthy, Salads, Indian",
    rating: 4.3,
    deliveryTime: 25,
    location: "HSR Layout",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  },
  {
    id: 60,
    name: "Salad Days",
    cuisines: "Salads, Healthy",
    rating: 4.4,
    deliveryTime: 25,
    location: "Whitefield",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999"
  },
  {
    id: 61,
    name: "California Burrito",
    cuisines: "Mexican, Burritos",
    rating: 4.5,
    deliveryTime: 30,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47"
  },
  {
    id: 62,
    name: "Taco Bell",
    cuisines: "Mexican, Fast Food",
    rating: 4.2,
    deliveryTime: 25,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85"
  },
  {
    id: 63,
    name: "Mexican Grill",
    cuisines: "Mexican, Fast Food",
    rating: 4.1,
    deliveryTime: 30,
    location: "HSR Layout",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47"
  },
  {
    id: 64,
    name: "Pasta Street",
    cuisines: "Italian, Pasta, Pizza",
    rating: 4.4,
    deliveryTime: 35,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601"
  },
  {
    id: 65,
    name: "Little Italy",
    cuisines: "Italian, Pizza, Pasta",
    rating: 4.5,
    deliveryTime: 40,
    location: "Whitefield",
    image: "https://images.unsplash.com/photo-1498579397066-22750a3cb424"
  },
  {
    id: 66,
    name: "La Casa",
    cuisines: "Italian, Continental",
    rating: 4.3,
    deliveryTime: 40,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141"
  },
  {
    id: 67,
    name: "Pasta Mania",
    cuisines: "Italian, Pasta",
    rating: 4.1,
    deliveryTime: 30,
    location: "BTM Layout",
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0"
  },
  {
    id: 68,
    name: "The Pizza Bakery",
    cuisines: "Pizza, Italian",
    rating: 4.6,
    deliveryTime: 35,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498"
  },
  {
    id: 69,
    name: "Pizza Stop",
    cuisines: "Pizza, Fast Food",
    rating: 4.0,
    deliveryTime: 25,
    location: "Jayanagar",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
  },
  {
    id: 70,
    name: "Oven Story",
    cuisines: "Pizza, Italian",
    rating: 4.2,
    deliveryTime: 30,
    location: "Marathahalli",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
  },
  {
    id: 71,
    name: "Rolls on Wheels",
    cuisines: "Rolls, Fast Food",
    rating: 4.1,
    deliveryTime: 25,
    location: "BTM Layout",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f"
  },
  {
    id: 72,
    name: "Faasos",
    cuisines: "Rolls, North Indian, Fast Food",
    rating: 4.2,
    deliveryTime: 30,
    location: "HSR Layout",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f"
  },
  {
    id: 73,
    name: "Behrouz Biryani",
    cuisines: "Biryani, Mughlai",
    rating: 4.4,
    deliveryTime: 35,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
  },
  {
    id: 74,
    name: "Olio",
    cuisines: "Pizza, Italian",
    rating: 4.3,
    deliveryTime: 30,
    location: "Whitefield",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
  },
  {
    id: 75,
    name: "The Good Bowl",
    cuisines: "Rice Bowls, Indian",
    rating: 4.2,
    deliveryTime: 30,
    location: "Electronic City",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19"
  },
  {
    id: 76,
    name: "LunchBox",
    cuisines: "North Indian, Biryani",
    rating: 4.1,
    deliveryTime: 30,
    location: "JP Nagar",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554"
  },
  {
    id: 77,
    name: "Sweet Truth",
    cuisines: "Desserts, Bakery",
    rating: 4.3,
    deliveryTime: 25,
    location: "HSR Layout",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307"
  },
  {
    id: 78,
    name: "Faasos Wraps",
    cuisines: "Wraps, Rolls, Fast Food",
    rating: 4.2,
    deliveryTime: 25,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4"
  },
  {
    id: 79,
    name: "Daily Sushi",
    cuisines: "Japanese, Sushi, Asian",
    rating: 4.4,
    deliveryTime: 40,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
  },
  {
    id: 80,
    name: "Sushi House",
    cuisines: "Japanese, Sushi",
    rating: 4.3,
    deliveryTime: 45,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351"
  },
  {
    id: 81,
    name: "Korean Kitchen",
    cuisines: "Korean, Asian",
    rating: 4.2,
    deliveryTime: 40,
    location: "HSR Layout",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9"
  },
  {
    id: 82,
    name: "Seoul Food",
    cuisines: "Korean, Asian",
    rating: 4.4,
    deliveryTime: 45,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9"
  },
  {
    id: 83,
    name: "The Rameshwaram Cafe",
    cuisines: "South Indian, Dosa",
    rating: 4.6,
    deliveryTime: 30,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
  },
  {
    id: 84,
    name: "Namma Cafe",
    cuisines: "South Indian, Snacks",
    rating: 4.2,
    deliveryTime: 20,
    location: "Jayanagar",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
  },
  {
    id: 85,
    name: "Dosa Corner",
    cuisines: "South Indian, Dosa",
    rating: 4.3,
    deliveryTime: 25,
    location: "BTM Layout",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921"
  },
  {
    id: 86,
    name: "Idli House",
    cuisines: "South Indian, Breakfast",
    rating: 4.1,
    deliveryTime: 20,
    location: "Malleshwaram",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
  },
  {
    id: 87,
    name: "Chaat Junction",
    cuisines: "Street Food, Chaat",
    rating: 4.3,
    deliveryTime: 25,
    location: "Jayanagar",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7"
  },
  {
    id: 88,
    name: "Delhi Chaat",
    cuisines: "North Indian, Chaat",
    rating: 4.2,
    deliveryTime: 25,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
  },
  {
    id: 89,
    name: "Street Story",
    cuisines: "Street Food, Indian",
    rating: 4.1,
    deliveryTime: 30,
    location: "Indiranagar",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7"
  },
  {
    id: 90,
    name: "Food Republic",
    cuisines: "Indian, Chinese, Fast Food",
    rating: 4.2,
    deliveryTime: 35,
    location: "Whitefield",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
  },
  {
    id: 91,
    name: "Spice Route",
    cuisines: "Indian, North Indian",
    rating: 4.3,
    deliveryTime: 35,
    location: "HSR Layout",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554"
  },
  {
    id: 92,
    name: "Masala House",
    cuisines: "Indian, South Indian",
    rating: 4.2,
    deliveryTime: 30,
    location: "BTM Layout",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7"
  },
  {
    id: 93,
    name: "Urban Tadka",
    cuisines: "North Indian, Punjabi",
    rating: 4.4,
    deliveryTime: 40,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe"
  },
  {
    id: 94,
    name: "Curry Leaf",
    cuisines: "South Indian, Indian",
    rating: 4.2,
    deliveryTime: 30,
    location: "Jayanagar",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7"
  },
  {
    id: 95,
    name: "Foodie's Paradise",
    cuisines: "Indian, Chinese, Fast Food",
    rating: 4.1,
    deliveryTime: 35,
    location: "Marathahalli",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
  },
  {
    id: 96,
    name: "The Food Factory",
    cuisines: "Continental, Indian, Fast Food",
    rating: 4.3,
    deliveryTime: 35,
    location: "Electronic City",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9"
  },
  {
    id: 97,
    name: "Urban Eats",
    cuisines: "Continental, Burgers",
    rating: 4.2,
    deliveryTime: 30,
    location: "HSR Layout",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    id: 98,
    name: "Food Junction",
    cuisines: "Indian, Chinese, Biryani",
    rating: 4.0,
    deliveryTime: 35,
    location: "BTM Layout",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554"
  },
  {
    id: 99,
    name: "The Hungry Bowl",
    cuisines: "Rice Bowls, Asian, Indian",
    rating: 4.2,
    deliveryTime: 30,
    location: "Whitefield",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19"
  },
  {
    id: 100,
    name: "Bangalore Food Hub",
    cuisines: "Indian, Chinese, Fast Food",
    rating: 4.3,
    deliveryTime: 35,
    location: "Koramangala",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  }
];

const Body = () => (
  <div className="body">
    <div className="search">
      Search
    </div>
    <div className="res-container">
      {restaurants.map((element) => {
        return (
          <RestaurantCard
            key={element.id}
            resdata={element}
          />
        );
      })}
    </div>

  </div>

)

const App = () => (
  <>
    <Header />
    <Body />
  </>
)

export default App
