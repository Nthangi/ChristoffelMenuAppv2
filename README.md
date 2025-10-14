 Christoffel's Menu App
A modern, multi-screen React Native restaurant menu management application built with Expo and TypeScript. This app allows restaurant staff to efficiently manage their menu with an intuitive and beautiful interface.


App Preview
Home Screen	Add Dish Screen	Menu List Screen
https://via.placeholder.com/300x600/3498db/ffffff?text=Home+Screen	https://via.placeholder.com/300x600/2ecc71/ffffff?text=Add+Dish	https://via.placeholder.com/300x600/e74c3c/ffffff?text=Menu+List
Features
Multi-Screen Navigation - Smooth transitions between Home, Add Dish, and Menu List screens

Real-time Statistics - Automatic calculation of totals and average prices per course

Smart Validation - Comprehensive form validation with user-friendly error messages

Beautiful UI - Professional design with card layouts and modern styling

Cross-Platform - Works seamlessly on web, iOS, and Android

Type Safety - Built with TypeScript for better development experience

Quick Start
Prerequisites
Node.js 14+

npm or yarn

Expo CLI

Installation
Clone the repository

bash
git clone https://github.com/Nthangi/ChristoffelMenuApp.git
cd ChristoffelMenuApp
Install dependencies

bash
npm install
Install Expo and navigation packages

bash
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native @react-navigation/native-stack
npm install @react-native-picker/picker
Start the development server

bash
npx expo start
Run on your preferred platform

Press w for web

Press a for Android

Press i for iOS

Scan QR code with Expo Go app (mobile)

Project Structure
text
ChristoffelMenuApp/
├── App.tsx                 # Main application with navigation setup
├── index.tsx              # Application entry point
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── app.json              # Expo configuration
└── screens/              # Application screens
    ├── HomeScreen.tsx     # Dashboard with statistics
    ├── AddDishScreen.tsx  # Add new dish form
    └── MenuListScreen.tsx # Menu items management
How to Use
1. Home Screen
View total menu items count

See average prices for Starters, Mains, and Desserts

Navigate to Add Dish or Menu List screens

2. Add Dish Screen
Fill in dish details:

Name (required)

Description (required)

Course type (Starter, Main, or Dessert)

Price (required, must be positive number)

Submit with validation

Success confirmation with auto-navigation

3. Menu List Screen
View all dishes in beautiful cards

Each card shows:

Dish name and price

Description

Course type

Remove button

Remove items with confirmation dialog

Empty state guidance

🛠 Technologies Used
Frontend Framework: React Native

Development Platform: Expo

Language: TypeScript

Navigation: React Navigation v6

UI Components: React Native + StyleSheet

State Management: React useState

Form Handling: Controlled components with validation

📊 Features in Detail
🏠 Home Screen Features
Real-time menu statistics

Quick action buttons

Professional dashboard design

Responsive layout

 Add Dish Screen Features
Comprehensive form validation

Course selection picker

Price formatting

Success/error feedback

Cancel option

 Menu List Screen Features
Efficient FlatList rendering

Beautiful card design

Safe delete with confirmation

Empty state handling

Smooth scrolling

Design System
Color Palette
css
Primary: #3498db (Blue)
Success: #2ecc71 (Green)
Danger: #e74c3c (Red)
Background: #fff8f0 (Cream)
Text: #2c3e50 (Dark Gray)
Typography
Headers: Bold, large text

Body: Readable medium text

Labels: Semi-bold for form elements

Interactive: Bold for buttons

Development
Running Tests
bash
npm test
Building for Production
bash
expo build:android
expo build:ios
Code Quality
TypeScript for type safety

Consistent code formatting

Component-based architecture

Proper error handling

Contributing
We welcome contributions! Please feel free to submit issues and enhancement requests.

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Author
Nthangene Ndlovu

Student Number: ST10492130

Institution: The Independent Institute of Education

GitHub: @Nthangi



🔗 Links
YOUTUBE VIEDO:


