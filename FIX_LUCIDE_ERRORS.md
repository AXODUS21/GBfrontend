# Fix for lucide-react Module Resolution Errors

## Problem
You're getting errors like:
```
Module not found: Can't resolve './icons/hand-metal.js'
Module not found: Can't resolve './icons/hand-platter.js'
```

This is a known issue with Next.js 16 (Turbopack) and lucide-react package.

## Solution Steps

### Step 1: Stop All Running Processes
1. **Stop your dev server** (Ctrl+C in the terminal where `npm run dev` is running)
2. **Close any editors** that might have files open from the project
3. **Close any other processes** that might be using the node_modules folder

### Step 2: Clean Installation
Open PowerShell or Command Prompt in the `GBfrontend` directory and run:

```powershell
# Remove node_modules and cache
Remove-Item -Recurse -Force node_modules, .next, package-lock.json -ErrorAction SilentlyContinue

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install
```

### Step 3: If Still Having Issues - Disable Turbopack
If the errors persist, you can temporarily disable Turbopack by modifying `next.config.mjs`:

```javascript
export default {
  // ... other config
  experimental: {
    turbo: false,  // Disable Turbopack, use webpack instead
  },
}
```

### Step 4: Alternative - Update lucide-react
If the above doesn't work, try updating to the latest version:

```powershell
npm install lucide-react@latest
```

### Step 5: Restart Dev Server
```powershell
npm run dev
```

## Why This Happens
- Next.js 16 uses Turbopack by default, which has stricter module resolution
- lucide-react uses dynamic imports for icons, which can conflict with Turbopack
- Corrupted node_modules can also cause this issue

## Permanent Fix
The `next.config.mjs` has been updated with webpack configuration to help resolve these issues. If problems persist, the Turbopack disable option is available.
