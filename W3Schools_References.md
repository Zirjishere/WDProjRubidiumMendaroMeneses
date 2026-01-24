# W3Schools References for StudyMate Project

This document provides W3Schools references for all CSS and JavaScript features used in the StudyMate project.

---

## CSS References

### 1. CSS Variables (Custom Properties)
- **W3Schools Link:** https://www.w3schools.com/css/css3_variables.asp
- **Used in:** All CSS files for color themes
- **Example:** `:root { --bg-color: #9fbfcc; }`

### 2. CSS Flexbox
- **W3Schools Link:** https://www.w3schools.com/css/css3_flexbox.asp
- **Used in:** Navbar layout, button containers, card layouts
- **Properties used:**
  - `display: flex` - https://www.w3schools.com/cssref/pr_class_display.php
  - `flex-direction` - https://www.w3schools.com/cssref/css3_pr_flex-direction.php
  - `justify-content` - https://www.w3schools.com/cssref/css3_pr_justify-content.php
  - `align-items` - https://www.w3schools.com/cssref/css3_pr_align-items.php
  - `gap` - https://www.w3schools.com/cssref/css3_pr_gap.php
  - `flex-shrink` - https://www.w3schools.com/cssref/css3_pr_flex-shrink.php

### 3. CSS Grid
- **W3Schools Link:** https://www.w3schools.com/css/css_grid.asp
- **Used in:** Hero section, cards section, profile/goals layouts
- **Properties used:**
  - `display: grid` - https://www.w3schools.com/cssref/pr_grid.php
  - `grid-template-columns` - https://www.w3schools.com/cssref/pr_grid-template-columns.php
  - `grid-gap` / `gap` - https://www.w3schools.com/cssref/pr_grid-gap.php

### 4. CSS Positioning
- **W3Schools Link:** https://www.w3schools.com/css/css_positioning.asp
- **Used in:** Fixed navbar
- **Properties used:**
  - `position: fixed` - https://www.w3schools.com/cssref/pr_class_position.php
  - `top`, `left`, `right` - https://www.w3schools.com/cssref/pr_pos_top.php
  - `z-index` - https://www.w3schools.com/cssref/pr_pos_z-index.php

### 5. CSS Transitions
- **W3Schools Link:** https://www.w3schools.com/css/css3_transitions.asp
- **Used in:** Buttons, theme toggle, hover effects
- **Example:** `transition: all 0.3s ease;`

### 6. CSS Transforms
- **W3Schools Link:** https://www.w3schools.com/css/css3_2dtransforms.asp
- **Used in:** Button hover effects, card hover effects
- **Properties used:**
  - `transform: translateY()` - https://www.w3schools.com/cssref/css3_pr_transform.php

### 7. CSS Box Shadow
- **W3Schools Link:** https://www.w3schools.com/css/css3_shadows_box.asp
- **Used in:** Cards, buttons, navbar
- **Example:** `box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);`

### 8. CSS Border Radius
- **W3Schools Link:** https://www.w3schools.com/css/css3_borders.asp
- **Used in:** Buttons, cards, images
- **Example:** `border-radius: 25px;`

### 9. CSS Media Queries (Responsive Design)
- **W3Schools Link:** https://www.w3schools.com/css/css_rwd_mediaqueries.asp
- **Used in:** All CSS files for mobile responsiveness
- **Example:** `@media (max-width: 900px) { ... }`

### 10. CSS Pseudo-classes
- **W3Schools Link:** https://www.w3schools.com/css/css_pseudo_classes.asp
- **Used in:** Hover effects, active states
- **Properties used:**
  - `:hover` - https://www.w3schools.com/cssref/sel_hover.php
  - `:active` - https://www.w3schools.com/cssref/sel_active.php
  - `:first-child` - https://www.w3schools.com/cssref/sel_firstchild.php

### 11. CSS Box Model
- **W3Schools Link:** https://www.w3schools.com/css/css_boxmodel.asp
- **Properties used:**
  - `margin` - https://www.w3schools.com/css/css_margin.php
  - `padding` - https://www.w3schools.com/css/css_padding.php
  - `box-sizing` - https://www.w3schools.com/css/css3_box-sizing.php

### 12. CSS Colors
- **W3Schools Link:** https://www.w3schools.com/css/css_colors.asp
- **Used in:** All color properties
- **Formats used:**
  - Hex colors - https://www.w3schools.com/css/css_colors_hex.asp
  - RGBA colors - https://www.w3schools.com/css/css_colors_rgb.asp

### 13. CSS Fonts
- **W3Schools Link:** https://www.w3schools.com/css/css_font.asp
- **Properties used:**
  - `font-family` - https://www.w3schools.com/cssref/pr_font_font-family.php
  - `font-size` - https://www.w3schools.com/cssref/pr_font_font-size.php
  - `font-weight` - https://www.w3schools.com/cssref/pr_font_weight.php

### 14. CSS Text
- **W3Schools Link:** https://www.w3schools.com/css/css_text.asp
- **Properties used:**
  - `text-align` - https://www.w3schools.com/cssref/pr_text_text-align.php
  - `text-decoration` - https://www.w3schools.com/cssref/pr_text_text-decoration.php
  - `line-height` - https://www.w3schools.com/cssref/pr_dim_line-height.php
  - `white-space` - https://www.w3schools.com/cssref/pr_text_white-space.php

### 15. CSS Display Property
- **W3Schools Link:** https://www.w3schools.com/cssref/pr_class_display.php
- **Values used:** `flex`, `grid`, `block`, `inline-block`, `none`

---

## JavaScript References

### 1. DOM Manipulation
- **W3Schools Link:** https://www.w3schools.com/js/js_htmldom.asp
- **Methods used:**
  - `document.getElementById()` - https://www.w3schools.com/jsref/met_document_getelementbyid.asp
  - `document.querySelector()` - https://www.w3schools.com/jsref/met_document_queryselector.asp
  - `document.querySelectorAll()` - https://www.w3schools.com/jsref/met_document_queryselectorall.asp
  - `element.textContent` - https://www.w3schools.com/jsref/prop_node_textcontent.asp
  - `element.innerHTML` - https://www.w3schools.com/jsref/prop_html_innerhtml.asp
  - `element.style` - https://www.w3schools.com/jsref/prop_html_style.asp

### 2. Event Listeners
- **W3Schools Link:** https://www.w3schools.com/js/js_htmldom_eventlistener.asp
- **Methods used:**
  - `addEventListener()` - https://www.w3schools.com/jsref/met_element_addeventlistener.asp
  - **Events:** `click`, `DOMContentLoaded`, `keypress`, `change`, `submit`

### 3. classList API
- **W3Schools Link:** https://www.w3schools.com/jsref/prop_element_classlist.asp
- **Methods used:**
  - `classList.add()` - Add CSS class
  - `classList.remove()` - Remove CSS class
  - `classList.toggle()` - Toggle CSS class
  - `classList.contains()` - Check if class exists

### 4. LocalStorage
- **W3Schools Link:** https://www.w3schools.com/jsref/prop_win_localstorage.asp
- **Methods used:**
  - `localStorage.setItem()` - https://www.w3schools.com/jsref/met_storage_setitem.asp
  - `localStorage.getItem()` - https://www.w3schools.com/jsref/met_storage_getitem.asp
  - `localStorage.removeItem()` - https://www.w3schools.com/jsref/met_storage_removeitem.asp

### 5. JSON Methods
- **W3Schools Link:** https://www.w3schools.com/js/js_json.asp
- **Methods used:**
  - `JSON.parse()` - https://www.w3schools.com/js/js_json_parse.asp
  - `JSON.stringify()` - https://www.w3schools.com/js/js_json_stringify.asp

### 6. Array Methods
- **W3Schools Link:** https://www.w3schools.com/js/js_array_methods.asp
- **Methods used:**
  - `forEach()` - https://www.w3schools.com/jsref/jsref_foreach.asp
  - `filter()` - https://www.w3schools.com/jsref/jsref_filter.asp
  - `find()` - https://www.w3schools.com/jsref/jsref_find.asp
  - `push()` - https://www.w3schools.com/jsref/jsref_push.asp
  - `length` - https://www.w3schools.com/jsref/jsref_length_array.asp

### 7. String Methods
- **W3Schools Link:** https://www.w3schools.com/js/js_string_methods.asp
- **Methods used:**
  - `trim()` - https://www.w3schools.com/jsref/jsref_trim_string.asp
  - `includes()` - https://www.w3schools.com/jsref/jsref_includes.asp

### 8. Date Object
- **W3Schools Link:** https://www.w3schools.com/js/js_dates.asp
- **Methods used:**
  - `new Date()` - https://www.w3schools.com/jsref/jsref_constructor_date.asp
  - `getHours()` - https://www.w3schools.com/jsref/jsref_gethours.asp
  - `getMinutes()` - https://www.w3schools.com/jsref/jsref_getminutes.asp
  - `getSeconds()` - https://www.w3schools.com/jsref/jsref_getseconds.asp
  - `toLocaleDateString()` - https://www.w3schools.com/jsref/jsref_tolocaledatestring.asp

### 9. setInterval() and setTimeout()
- **W3Schools Link:** https://www.w3schools.com/js/js_timing.asp
- **Methods used:**
  - `setInterval()` - https://www.w3schools.com/jsref/met_win_setinterval.asp
  - `setTimeout()` - https://www.w3schools.com/jsref/met_win_settimeout.asp

### 10. Math Object
- **W3Schools Link:** https://www.w3schools.com/js/js_math.asp
- **Methods used:**
  - `Math.random()` - https://www.w3schools.com/jsref/jsref_random.asp
  - `Math.floor()` - https://www.w3schools.com/jsref/jsref_floor.asp
  - `Math.abs()` - https://www.w3schools.com/jsref/jsref_abs.asp
  - `Math.ceil()` - https://www.w3schools.com/jsref/jsref_ceil.asp

### 11. Functions
- **W3Schools Link:** https://www.w3schools.com/js/js_functions.asp
- **Types used:**
  - Function declarations - https://www.w3schools.com/js/js_function_definition.asp
  - Arrow functions - https://www.w3schools.com/js/js_arrow_function.asp

### 12. Conditional Statements
- **W3Schools Link:** https://www.w3schools.com/js/js_if_else.asp
- **Used:** `if`, `else if`, `else`

### 13. Loops
- **W3Schools Link:** https://www.w3schools.com/js/js_loop_for.asp
- **Used:** `for` loops, `forEach()` loops

### 14. Window Object
- **W3Schools Link:** https://www.w3schools.com/js/js_window.asp
- **Methods used:**
  - `window.location.href` - https://www.w3schools.com/jsref/prop_loc_href.asp
  - `alert()` - https://www.w3schools.com/jsref/met_win_alert.asp
  - `confirm()` - https://www.w3schools.com/jsref/met_win_confirm.asp
  - `prompt()` - https://www.w3schools.com/jsref/met_win_prompt.asp

### 15. Form Validation
- **W3Schools Link:** https://www.w3schools.com/js/js_validation.asp
- **Used in:** Sign-up form validation

### 16. Creating Elements
- **W3Schools Link:** https://www.w3schools.com/jsref/met_document_createelement.asp
- **Methods used:**
  - `document.createElement()` - Create new HTML element
  - `appendChild()` - https://www.w3schools.com/jsref/met_node_appendchild.asp

### 17. Event Object
- **W3Schools Link:** https://www.w3schools.com/jsref/obj_event.asp
- **Properties used:**
  - `event.preventDefault()` - https://www.w3schools.com/jsref/event_preventdefault.asp
  - `event.key` - https://www.w3schools.com/jsref/event_key_key.asp

---

## HTML References

### 1. HTML Forms
- **W3Schools Link:** https://www.w3schools.com/html/html_forms.asp
- **Elements used:** `<form>`, `<input>`, `<select>`, `<textarea>`, `<button>`

### 2. HTML Semantic Elements
- **W3Schools Link:** https://www.w3schools.com/html/html5_semantic_elements.asp
- **Elements used:** `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<figure>`, `<figcaption>`

### 3. HTML Links
- **W3Schools Link:** https://www.w3schools.com/html/html_links.asp
- **Element:** `<a href="">` - https://www.w3schools.com/tags/tag_a.asp

### 4. HTML Images
- **W3Schools Link:** https://www.w3schools.com/html/html_images.asp
- **Element:** `<img src="" alt="">` - https://www.w3schools.com/tags/tag_img.asp

### 5. HTML Lists
- **W3Schools Link:** https://www.w3schools.com/html/html_lists.asp
- **Elements used:** `<ul>`, `<ol>`, `<li>`

### 6. HTML Attributes
- **W3Schools Link:** https://www.w3schools.com/html/html_attributes.asp
- **Attributes used:** `id`, `class`, `aria-label`, `aria-current`, `type`, `placeholder`, `required`, `maxlength`

---

## Additional Resources

### CSS Flexbox Complete Guide
- https://www.w3schools.com/css/css3_flexbox.asp
- https://www.w3schools.com/css/css3_flexbox_container.asp
- https://www.w3schools.com/css/css3_flexbox_items.asp

### CSS Grid Complete Guide
- https://www.w3schools.com/css/css_grid.asp
- https://www.w3schools.com/css/css_grid_container.asp
- https://www.w3schools.com/css/css_grid_item.asp

### JavaScript ES6 Features
- https://www.w3schools.com/js/js_es6.asp
- Arrow functions, const/let, template literals

### Responsive Web Design
- https://www.w3schools.com/css/css_rwd_intro.asp
- https://www.w3schools.com/css/css_rwd_mediaqueries.asp

---

## Quick Reference Links

**CSS:**
- CSS Tutorial: https://www.w3schools.com/css/
- CSS Reference: https://www.w3schools.com/cssref/

**JavaScript:**
- JavaScript Tutorial: https://www.w3schools.com/js/
- JavaScript Reference: https://www.w3schools.com/jsref/

**HTML:**
- HTML Tutorial: https://www.w3schools.com/html/
- HTML Reference: https://www.w3schools.com/tags/

---

*This reference document covers all major CSS and JavaScript features used in the StudyMate project. Each link directs to the relevant W3Schools tutorial or reference page for detailed explanations and examples.*
