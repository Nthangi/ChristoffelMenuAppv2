Christoffel's Menu App - Multi-Screen Version 

Overview 

This is a React Native app built with Expo that allows users to manage a restaurant menu across multiple screens. Users can add, view, and remove dishes from a restaurant's's menu. Each dish includes a name, description, course type (Starter, Main, Dessert), and price. 

New Features (Multi-Screen Version) 

Home Screen: Welcome page with navigation to other screens 

Add Dish Screen: Form to add new menu items with validation 

Menu List Screen: View all dishes with remove functionality 

Navigation: Smooth screen transitions using React Navigation 

State Management: Shared state across all screens 

Responsive Design: Works on web, iOS, and Android 

App Calculates: 

The total number of menu items 

The average price for each course category 

Real-time updates across all screens 

Technologies Used 

React Native - Cross-platform mobile framework 

Expo - Development platform for React Native 

TypeScript - Type-safe JavaScript 

React Hooks (useState) - State management 

React Navigation - Screen navigation and routing 

@react-native-picker/picker - Course selection component 

How It Works 

Home Screen: Users start here and can navigate to Add Dish or View Menu 

Add Dish Screen:  

User fills in Dish Name, Description, Course, and Price 

App validates all inputs 

On clicking "Add Dish", item is saved and user returns to Home 

Menu List Screen: 

Displays all added dishes in a scrollable list 

Each dish shows name, price, description, course, and remove option 

Remove function with confirmation alert 

State Management: Menu items are shared across all screens using React state 

Updated Project Structure 

ChristoffelMenuApp/ 
│ 
├── App.tsx (Main navigation setup) 
├── index.tsx (App entry point) 
├── app.json (Expo configuration) 
├── tsconfig.json (TypeScript configuration) 
├── package.json (Dependencies) 
├── node_modules/ (Installed packages) 
├── assets/ (Images and icons) 
└── screens/ 
   ├── HomeScreen.tsx (Welcome and navigation) 
   ├── AddDishScreen.tsx (Add new items form) 
   └── MenuListScreen.tsx (View and manage menu) 
 

Technical Implementation 

Navigation Setup 

The app uses React Navigation's Native Stack Navigator to manage screen transitions: 

HomeScreen: Initial route with welcome message and navigation buttons 

AddDishScreen: Form screen for adding new menu items 

MenuListScreen: Display screen for viewing and removing items 

State Management 

Shared State: Menu items array is managed in App.tsx and passed to all screens 

Real-time Updates: Changes in one screen immediately reflect in others 

Type Safety: TypeScript interfaces ensure data consistency 

Screen Components 

HomeScreen 

Displays total menu items count 

Navigation buttons to Add Dish and View Menu screens 

Clean, welcoming interface 

AddDishScreen 

Form validation for all fields 

Course selection using Picker component 

Price validation and formatting 

Success feedback with alerts 

MenuListScreen 

FlatList for efficient rendering 

Remove functionality with confirmation 

Card-based layout for each menu item 

Empty state handling 

Styling 

Consistent Theme: Soft cream background (#fff8f0) across all screens 

Professional Colors: Blue primary buttons (#0a84ff), complementary accents 

Card Design: Clean white cards with subtle borders for menu items 

Responsive Layout: Flexbox-based design that works on all screen sizes 

Typography: Clear hierarchy with bold headers and readable body text 

Multi-Platform Support 

Web: Fully functional in web browsers 

iOS: Native iOS styling and interactions 

Android: Native Android compatibility 

Data Flow 

State Initialization: Empty menu items array in App.tsx 

Adding Items: AddDishScreen validates and adds to global state 

Viewing Items: MenuListScreen displays current state 

Removing Items: Filter operation updates global state 

Navigation: Seamless transitions between screens with preserved state 

Getting Started 

# Install dependencies 
npm install 
 
# Start the development server 
npx expo start 
 
# Run on web 
Press 'w' in the terminal 
 
# Run on Android/iOS 
Press 'a' or 'i' in the terminal
 


 

Validation Features 

Required field checking 

Price validation (must be number > 0) 

Course selection enforcement 

Success/error feedback with alerts 

Conclusion 

This multi-screen version demonstrates advanced React Native concepts including: 

Navigation between multiple screens 

Shared state management across components 

Form handling with validation 

TypeScript integration for type safety 

Professional UI/UX with consistent styling 

The app provides a complete CRUD (Create, Read, Update, Delete) experience for menu management in a restaurant setting. 

 

Links 


YouTube Video:  

Author 

Name: Nthangene Ndlovu 

Student Number: ST10492130 

Institution: The Independent Institute of Education 

Date: 14 October 2025  

 # ChristoffelMenuApp – Final PoE Submission

A simple **menu management app** built with **Expo** and **React Native**, allowing users to browse, add, and remove dishes.

---

## Features Implemented

- Add a new dish with a name, description, course, and price
- Remove a dish with confirmation
- Real-time UI updates using React state
- Handles empty input gracefully
- Works on iOS, Android, and Web

---

## 📜 Change Log

### Changes since Part 2

1. **Dish Removal Bug Fix**
   - Fixed issue where dishes could not be removed from the menu.
   - Updated `setMenuItems` to use the **functional state update**:
     ```ts
     setMenuItems(prevMenuItems => prevMenuItems.filter(item => item.id !== id))
     ```
     ensuring the latest state is always used.
     
2. **UI Enhancements**
   - Added card styling for each dish.
   - Added “No dishes available” message when the list is empty.
   - Styled the remove button for better visibility.

3. **Input Validation**
   - Added check to prevent adding empty dish names.

4. **Refactoring**
   - Converted all `setMenuItems` calls to functional updates for consistent state management.
   - Simplified `FlatList` rendering for readability.
   - Extracted reusable styles into a `StyleSheet` object.
   - Updated TypeScript types for props and `MenuItem`.

---

## 🗂 Project Structure



 

 

 

 

 

 

References 

React Native (2025) React Native documentation. Available at: https://reactnative.dev/docs [Accessed: 14 October 2025] 

Expo (2025) Expo documentation. Available at: https://docs.expo.dev/ [Accessed: 14 October 2025] 

React (2025) React documentation. Available at: https://react.dev/ [Accessed: 14 October 2025] 

React Navigation (2025) React Navigation documentation. Available at: https://reactnavigation.org/ [Accessed: 14 October 2025] 

React Native Picker (2025) React Native Picker component documentation. Available at: https://github.com/react-native-picker/picker [Accessed: 14 October 2025] 

Stack Overflow (2025) Developer Q&A site. Available at: https://stackoverflow.com/ [Accessed: 14 October 2025] 

Mozilla Developer Network (2025) JavaScript reference and documentation. Available at: https://developer.mozilla.org/ [Accessed: 14 October 2025] 

 
