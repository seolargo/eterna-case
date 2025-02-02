
# Documentation for "Profilini Düzenle" HTML Page

This document provides an overview of the HTML structure and functionality of the "Profilini Düzenle" (Edit Profile) page. The page is designed to allow users to edit their profile information, including their name, phone number, and email address. The page is responsive and includes a back button, an avatar image, and a form for editing profile details.


## HTML Structure

### DOCTYPE and Language

-   The document type is declared as  `<!DOCTYPE html>`.
    
-   The language is set to Turkish (`lang="tr"`).
    

### Head Section

-   **Meta Tags**:
    
    -   `charset="UTF-8"`: Ensures proper character encoding.
        
    -   `viewport`: Ensures the page is responsive on all devices.
        
-   **Title**: The title of the page is "Profilini Düzenle" (Edit Profile).
    
-   **CSS File**: Linked via  `<link rel="stylesheet" href="styles.css" />`.


## CSS Styling

The page uses a CSS file (`styles.css`) for styling. Key classes include:

-   **`.profile`**: Main container for the profile editing interface.
    
-   **`.profile__header`**: Styles for the header section.
    
-   **`.profile__title`**: Styles for the main title.
    
-   **`.profile__avatar`**: Styles for the avatar section, including the edit overlay.
    
-   **`.profile__form`**: Styles for the form and input fields.
    
-   **`.profile__footer`**: Styles for the footer and update button.
    

----------

## JavaScript Functionality

The page includes a JavaScript file (`script.js`) for interactive functionality, such as:

-   Handling the back button click.
    
-   Enabling avatar editing (e.g., uploading a new image).
    
-   Validating and submitting the form data.
    


## Assets and Icons

The page uses the following assets:

-   **Avatar Image**: Located at  `../../assets/images (1).png`.
    
-   **Icons**:
    
    -   Back arrow icon (SVG).
        
    -   Camera icon (`camera.svg`).
        
    -   User icon (`user.svg`).
        
    -   Phone icon (`call.svg`).
        
    -   Email icon (`sms.svg`).
        
