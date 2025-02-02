
# Documentation for the Settings Page HTML

This document provides an overview of the structure and functionality of the  `settings.html`  file. The page is designed to provide users with a settings interface where they can manage their profile, subscriptions, notifications, language preferences, and more.


## **Page Structure**

### **1. HTML Boilerplate**

-   The page uses the standard HTML5 boilerplate with  `<!DOCTYPE html>`.
    
-   The language is set to Turkish (`lang="tr"`).
    
-   The character encoding is set to UTF-8.
    
-   The viewport meta tag ensures the page is responsive on all devices.
    

### **2. External Resources**

-   A stylesheet (`styles.css`) is linked to style the page.
    
-   No external libraries or frameworks are used in this example.



## **Page Layout**
    
### **1. Profile Section**

-   Displays the user's profile picture and name.
    
-   Includes a chevron (`>`) to indicate that the profile section is clickable.
    

### **2. Settings Cards**

The settings are organized into cards, each containing related options:

#### **Card 1: Subscriptions and Payment**

-   **Abonelikler (Subscriptions)**: Navigates to subscription management.
    
-   **Kayıtlı Kartlarım (Saved Cards)**: Navigates to saved payment methods.
    

#### **Card 2: Notifications and Language**

-   **Bildirimler (Notifications)**: Toggle switch to enable/disable notifications.
    
-   **Dil (Language)**: Displays the current language (`English`) and allows navigation to language settings.
    

#### **Card 3: Support and Policies**

-   **Destek (Support)**: Navigates to the support page.
    
-   **Gizlilik Politikası (Privacy Policy)**: Navigates to the privacy policy page.
    
-   **Bizi Değerlendirin (Rate Us)**: Navigates to the app rating page.
    

#### **Card 4: Logout**

-   **Çıkış Yap (Logout)**: Logs the user out. The chevron is styled in red (`#ff4f4f`) to emphasize this action.
    

### **3. Footer Navigation**

-   A bottom navigation bar provides quick access to:
    
    -   **Home**: Navigates to the home page.
        
    -   **Chart**: Navigates to analytics or statistics.
        
    -   **Active**: Represents the currently active page (Settings).
        



## **Code Details**

### **1. HTML Structure**

-   The page is divided into sections using  `<div>`  elements with appropriate class names for styling.
    
-   Semantic HTML tags like  `<header>`,  `<footer>`, and  `<h1>`  are used for better readability and accessibility.
    

### **2. Styling**

-   Class names follow a BEM (Block Element Modifier) naming convention (e.g.,  `settings-page__card`,  `settings-page__item`).
    
-   Icons are displayed using  `<img>`  tags with  `src`  pointing to the respective SVG files.
    

### **3. Interactive Elements**

-   Buttons and toggles are implemented using  `<button>`  and  `<input type="checkbox">`  elements.
    
-   Navigation items are wrapped in  `<div>`  elements for styling and interactivity.
    

## **Assets**

-   **Profile Avatar**: Located at  `../../assets/images (1).png`.
    
-   **Icons**:
    
    -   Home icon:  `../../assets/home (1).svg`.
        
    -   Chart icon:  `../../assets/chart.svg`.
        
    -   Active icon:  `../../assets/Active.svg`.