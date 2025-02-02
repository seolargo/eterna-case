
# Subscription Page Documentation

**Filename:** `index.html` (or the file where this HTML code is used)  
**Purpose:** Provides a subscription interface for the MusicAI application, allowing users to select between monthly and yearly plans and view the features included with the subscription. The interface is designed with responsive design in mind.

## 1. Overview

The HTML code represents a complete webpage for a subscription (abonelik) screen. It is structured into three main parts:

-   **Header:** Contains navigation elements and the application title with a subscription badge.
-   **Main Content:** Displays subscription plan options and a list of features.
-   **Footer:** Includes the upgrade button and subscription details (trial information and pricing).

The page is styled using custom CSS as well as external libraries for icons and checkbox styles like Pretty Checkbox (see: https://lokesh-coder.github.io/pretty-checkbox/)


## 2. External Dependencies

The following external resources are referenced in the `<head>` section:

-   **Custom Stylesheet:**
 
    `<link rel="stylesheet" href="styles.css" />` 
    
    Contains the custom styles for the subscription page.
    
-   **Material Design Icons:**
    
    `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css" />` 
    
    Provides access to Material Design icons used in the UI (e.g., the check mark icon).
    
-   **Pretty Checkbox Library:**
    
    `<link rel="stylesheet" href="https://unpkg.com/pretty-checkbox/dist/pretty-checkbox.min.css" />` 
    
    Used for enhanced and customizable checkbox and radio button styling.
    
Since the project focuses on mainly responsive design, there is no need to add additional Javascript file here.


## 3. Styling Conventions

-   **BEM Methodology:**  
    The CSS classes follow the Block-Element-Modifier (BEM) naming convention for clarity and maintainability. For example:
    
    -   Block: `subscription`
    -   Elements: `subscription__header`, `subscription__title`, `subscription__plan-option`
    -   Modifier: `subscription__plan-option--selected`
-   **External Libraries:**
    
    -   The **Pretty Checkbox** library is used to style the radio buttons with a smooth, rounded appearance and to display the check icon when selected.
    -   **Material Design Icons** are utilized within the radio button state and the feature list items.


## 4. Expected Behavior and Interactivity

-   **Plan Selection:**
    
    -   Only one subscription plan (monthly or yearly) can be selected at a time due to the radio input grouping.
    -   The yearly plan is pre-selected, and its option is visually distinguished with an extra modifier class and a tag indicating it is more advantageous.

-   **Responsive Design:**
    
    -   The inclusion of the viewport meta tag ensures that the layout adapts to different screen sizes and devices.


## 5. How to Extend or Modify

-   **Changing Prices or Text:**  
    Update the inner text of the plan options and footer details directly in the HTML.
    
-   **Adding More Features:**  
    Additional `<li>` elements can be added within the `<ul class="subscription__features">` list.
    
-   **Modifying Styles:**  
    Edit `styles.css` to change the visual appearance of the components, or override the styles provided by the external libraries if needed.
    
-   **Enhancing Interactivity:**  
    Add `script.js` to include further dynamic behaviors such as form validation, animations, or API integrations.
