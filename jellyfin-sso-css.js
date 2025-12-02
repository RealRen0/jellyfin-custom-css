/*
 * =======================================================================
 * JELLYFIN CUSTOM CSS - MULTI-PAGE STYLES (Login Page and User Profile)
 * =======================================================================
 * This file contains styling rules for two purposes:
 * 1. SSO Login Page cleanup (Authelia)
 * 2. User Profile page modifications (Hiding password form, adding Authelia management button)
 */

/* -----------------------------------------------------------------------
 * 1. SSO LOGIN PAGE CLEANUP AND STYLE UNSETTING
 * -----------------------------------------------------------------------
 * Unsets standard Jellyfin button/form styles to allow for custom SSO theming.
 */
a.raised.emby-button,
.loginDisclaimerContainer,
.loginDisclaimer,
.manualLoginForm {
    all: unset;
}

/* Central alignment and margin adjustments for login page elements */
.btnQuick,
.btnSelectServer,
.btnForgotPassword,
a.raised.emby-button,
.emby-button.block,
.loginDisclaimerContainer,
.loginDisclaimer {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2.25em;
    color: inherit !important;
}

/* Hides the 'Forgot Password' link on the login page */
.btnForgotPassword {
    display: none !important;
}

/* Hides all elements in the manual login form except the first child (usually the server selection) */
.manualLoginForm > :not(:first-child) {
    display: none !important;
}

/* -----------------------------------------------------------------------
 * 2. USER PROFILE PAGE MODIFICATIONS
 * -----------------------------------------------------------------------
 */

/* HIDES THE ORIGINAL PASSWORD UPDATE FORM on the profile page */
.updatePasswordForm {
    display: none !important;
}

/* STYLES THE AUTHELIA ICON (Used on both Login and Profile buttons) */
.sso-icon {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-right: 8px; /* Spacing between icon and text */
}

/* STYLES THE NEW AUTHELIA MANAGEMENT BUTTON WRAPPER */
.autheliaButtonWrapper {
    /* Ensures the same centering and width as the original forms */
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}

/* Removes default padding from the detailSection used for the button */
.autheliaButtonWrapper .detailSection {
    padding: 0;
}

/* Styles the new button to match the primary theme color */
.authelia-button {
    background-color: var(--theme-primary-color); 
    color: var(--theme-primary-text-color);
    border: 1px solid var(--theme-primary-color);
    width: 100%; /* Ensures block-level width */
}