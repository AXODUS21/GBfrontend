# Zeffy Donation Integration Setup Guide

This guide will walk you through setting up Zeffy for accepting donations on your Global Bright Futures Foundation website.

## Prerequisites

- A Zeffy account (free to sign up at [zeffy.com](https://www.zeffy.com))
- Access to your organization's bank account information
- Admin access to your website's environment variables

---

## Step-by-Step Setup Process

### Step 1: Create Your Zeffy Account

1. Visit [https://www.zeffy.com](https://www.zeffy.com)
2. Click **"Sign Up"** or **"Get Started"**
3. Fill in your organization details:
   - Organization name: **Global Bright Futures Foundation Inc.**
   - Organization type: **Nonprofit/501(c)(3)**
   - Address: **5830 E 2ND ST, STE 7000 #30800, CASPER, WY 82609**
   - Email: **admin@globalbrightfutures.org**
   - Phone: **661 488 9935**
4. Complete the registration process

### Step 2: Verify Your Organization

1. After signing up, Zeffy may ask you to verify your nonprofit status
2. Provide your **501(c)(3) tax-exempt status** documentation if requested
3. This verification ensures donors receive proper tax receipts

### Step 3: Connect Your Bank Account

1. Log into your Zeffy dashboard
2. Navigate to the **"Bank"** or **"Settings"** section
3. Click **"Link my bank account"** or **"Add Bank Account"**
4. You'll need:
   - A blank check from your organization's bank account (contains routing and account numbers)
   - Or manually enter:
     - Bank name
     - Account type (checking/savings)
     - Routing number
     - Account number
5. Follow the prompts to complete the bank verification
6. **Note:** Zeffy may make small test deposits to verify the account (usually takes 1-2 business days)

### Step 4: Create Your Donation Form

1. In your Zeffy dashboard, go to **"Donations"** in the main menu
2. Click **"Create a new form"** or **"New Donation Form"**
3. Customize your form:

   **Basic Settings:**
   - Form name: "Global Bright Futures Foundation Donation"
   - Description: Add your mission statement or donation purpose
   - Suggested amounts: $5, $10, $25, $50, $75, $100, $200, $500 (or customize)
   - Allow custom amounts: **Yes**
   - Allow recurring donations: **Yes** (recommended)

   **Appearance:**
   - Upload your organization logo
   - Choose colors that match your brand
   - Add a cover image (optional)

   **Donation Options:**
   - Enable one-time donations: **Yes**
   - Enable monthly recurring donations: **Yes**
   - Set default donation frequency (optional)

   **Tax Receipts:**
   - Enable automatic tax receipts: **Yes** (important for 501(c)(3))
   - Customize receipt message (optional)

4. Click **"Save"** or **"Create Form"**

### Step 5: Get Your Form Embed URL

1. After creating your form, go to **"Donations"** > **"My forms"**
2. Find your newly created donation form
3. Click **"Share"** or the share icon next to your form
4. Select **"Embed your form in your website"** option
5. You'll see an iframe code that looks like:
   ```html
   <iframe src="https://www.zeffy.com/en-US/embed/your-form-id" ...></iframe>
   ```
6. **Copy the URL** from the `src` attribute (e.g., `https://www.zeffy.com/en-US/embed/your-form-id`)
   - This is your **Zeffy Form URL**

### Step 6: Configure Your Website

1. **Create Environment Variable File:**
   - In your project root (`GBfrontend/`), create a `.env.local` file (if it doesn't exist)
   - Add the following line:
     ```
     NEXT_PUBLIC_ZEFFY_FORM_URL=https://www.zeffy.com/en-US/embed/your-form-id
     ```
   - Replace `your-form-id` with your actual form ID from Step 5

2. **Example `.env.local` file:**
   ```
   NEXT_PUBLIC_ZEFFY_FORM_URL=https://www.zeffy.com/en-US/embed/abc123xyz
   ```

3. **Important:** 
   - Never commit `.env.local` to version control (it's already in `.gitignore`)
   - For production, add this environment variable to your hosting platform (Vercel, Netlify, etc.)

### Step 7: Test Your Integration

1. **Start your development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

2. **Navigate to the donation page:**
   - Go to `http://localhost:3000/sponsor`
   - You should see the Zeffy donation form

3. **Test a donation:**
   - Select a donation amount or enter a custom amount
   - Choose one-time or recurring
   - Click "Donate Now"
   - The form should open in a new tab or embed on the page
   - **Use Zeffy's test mode** (if available) to test without processing real payments

4. **Verify:**
   - Check that amounts are passed correctly
   - Verify recurring donation option works
   - Test that the form displays properly on mobile devices

### Step 8: Deploy to Production

1. **Add environment variable to your hosting platform:**

   **For Vercel:**
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `NEXT_PUBLIC_ZEFFY_FORM_URL` with your form URL
   - Redeploy your application

   **For Netlify:**
   - Go to Site settings > Build & deploy > Environment
   - Add `NEXT_PUBLIC_ZEFFY_FORM_URL` with your form URL
   - Trigger a new deploy

   **For other platforms:**
   - Add the environment variable according to your platform's documentation

2. **Test on production:**
   - Visit your live donation page
   - Perform a test donation (use a small amount)
   - Verify the donation appears in your Zeffy dashboard

---

## How It Works

### Donation Flow

1. **User visits `/sponsor` page**
2. **User selects donation amount** (suggested amounts or custom)
3. **User chooses donation type** (one-time or recurring)
4. **User clicks "Donate Now"**
5. **Zeffy form opens** (in new tab or embedded) with pre-filled amount
6. **User completes donation** on Zeffy's secure platform
7. **Donation is processed** and funds are transferred to your bank account
8. **Tax receipt is automatically sent** to the donor (if enabled)

### Features Included

- ✅ Suggested donation amounts ($5, $10, $25, $50, $75, $100, $200, $500)
- ✅ Custom amount input
- ✅ One-time and recurring donation options
- ✅ Secure payment processing via Zeffy
- ✅ Automatic tax receipts
- ✅ Mobile-responsive design
- ✅ Embedded form option

---

## Troubleshooting

### Form URL Not Working

- **Check the URL format:** Should be `https://www.zeffy.com/en-US/embed/[form-id]`
- **Verify form is published:** In Zeffy dashboard, ensure form status is "Active" or "Published"
- **Check environment variable:** Ensure `NEXT_PUBLIC_ZEFFY_FORM_URL` is set correctly

### Donations Not Appearing

- **Check Zeffy dashboard:** Log into Zeffy and check "Donations" section
- **Verify bank connection:** Ensure bank account is properly connected and verified
- **Check email notifications:** Zeffy should send email notifications for new donations

### Form Not Displaying

- **Check browser console:** Look for any JavaScript errors
- **Verify iframe permissions:** Ensure your hosting platform allows iframes
- **Test in different browsers:** Check if issue is browser-specific

### Environment Variable Not Loading

- **Restart dev server:** After adding `.env.local`, restart your development server
- **Check variable name:** Must start with `NEXT_PUBLIC_` for client-side access
- **Verify file location:** `.env.local` should be in the `GBfrontend/` directory

---

## Support Resources

- **Zeffy Support:** [support@zeffy.com](mailto:support@zeffy.com) or check their help center
- **Zeffy Documentation:** [https://www.zeffy.com/help](https://www.zeffy.com/help)
- **Zeffy Dashboard:** [https://www.zeffy.com/dashboard](https://www.zeffy.com/dashboard)

---

## Security Notes

- ✅ Zeffy handles all payment processing securely (PCI compliant)
- ✅ No credit card information is stored on your website
- ✅ All transactions are encrypted
- ✅ Tax receipts are automatically generated and sent
- ✅ Donor information is stored securely in Zeffy's system

---

## Next Steps

After setup is complete:

1. **Customize your form** in Zeffy dashboard (branding, messaging, etc.)
2. **Set up email notifications** for new donations
3. **Configure reporting** to track donation metrics
4. **Test with a small donation** to ensure everything works
5. **Share your donation page** with supporters!

---

## Questions?

If you encounter any issues during setup, please:
1. Check this guide first
2. Review Zeffy's documentation
3. Contact Zeffy support if needed
4. Check your website's console for any errors

Good luck with your donation integration! 🎉
