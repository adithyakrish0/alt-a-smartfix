# Privacy Policy for Alt-A Smart Fix

**Last Updated:** November 28, 2024

---

## 🔒 Overview

Alt-A Smart Fix ("Alt-A", "we", "our", or "the extension") is committed to protecting your privacy. This privacy policy explains how we handle your data when you use our Firefox extension.

**TL;DR:** We don't collect, store, or share your personal data. Everything stays on your device.

---

## 📊 Data Collection

### What We DON'T Collect

- ❌ **Personal Information** — No names, emails, or identifiers
- ❌ **Browsing History** — We don't track what sites you visit
- ❌ **Analytics** — No Google Analytics, telemetry, or usage tracking
- ❌ **Your Text** — We never store the text you fix
- ❌ **Cookies** — We don't use tracking cookies

### What We DO Store (Locally Only)

The following data is stored **only on your device** using Firefox's `browser.storage.local` API:

| Data | Purpose | Synced to Cloud? |
|------|---------|------------------|
| **Groq API Key** | Authenticate with Groq API | ❌ No |
| **Settings** | Model, temperature, tone preferences | ❌ No |
| **Model Cache** | Cache available models for 1 hour | ❌ No |
| **Disabled Pages/Sites** | Remember where you disabled Alt-A | ❌ No |

**Important:** We explicitly use `browser.storage.local` (local-only storage). Your data is never uploaded to any cloud sync servers.

---

## 🌐 Network Requests

### Groq API Calls

When you use Alt-A to fix text, the extension makes a direct API call to Groq:

**Endpoint:** `https://api.groq.com/openai/v1/chat/completions`

**Data Sent:**
- Your selected text (for processing)
- Surrounding context (for better understanding)
- Your API key (for authentication)
- Model and temperature settings

**Data NOT Sent:**
- Your identity or personal information
- Your browsing history
- Any data to third parties
- Any data to our servers (we don't have any!)

### Model List Fetching

To show available AI models, we fetch from:

**Endpoint:** `https://api.groq.com/openai/v1/models`

This only retrieves the list of available models and requires your API key for authentication.

---

## 🔐 API Key Security

Your Groq API key is:

- ✅ Stored only in `browser.storage.local` on your device
- ✅ Never synced to the cloud
- ✅ Never sent to any server except Groq's API
- ✅ Never logged or stored by us
- ✅ Never shared with third parties

**Recommendation:** Treat your API key like a password. Don't share it publicly.

---

## 🖥️ Local Processing

Alt-A processes everything locally except for the AI model inference:

| Process | Location |
|---------|----------|
| Text selection detection | Your browser (local) |
| Settings management | Your browser (local) |
| UI rendering | Your browser (local) |
| Keyboard shortcut handling | Your browser (local) |
| **AI text processing** | **Groq's servers** |

---

## 👁️ Permissions Explained

Alt-A requests the following Firefox permissions:

| Permission | Why We Need It | What We DON'T Do |
|------------|----------------|------------------|
| `storage` | Save your settings and API key locally | We don't sync or upload your data |
| `scripting` | Inject content script to detect text selection | We don't read pages you don't interact with |
| `activeTab` | Replace text in the current tab | We don't access other tabs |
| `<all_urls>` | Work on any website | We don't track your browsing |

---

## 🚫 What We'll Never Do

1. **Sell Your Data** — We don't collect data, so there's nothing to sell
2. **Track You** — No analytics, fingerprinting, or tracking pixels
3. **Store Your Text** — Your writing stays private
4. **Share with Third Parties** — No data sharing agreements
5. **Use for Advertising** — No ads, ever
6. **Mine Cryptocurrency** — No hidden miners
7. **Send Spam** — We don't collect emails

---

## 🔄 Third-Party Services

The only third-party service Alt-A uses is:

### Groq (groq.com)

- **Purpose:** AI model inference for text fixing
- **Data Shared:** Your selected text and API key
- **Their Privacy Policy:** [groq.com/privacy](https://groq.com/privacy)

We encourage you to review Groq's privacy policy to understand how they handle data sent to their API.

---

## 👶 Children's Privacy

Alt-A is not intended for children under 13. We do not knowingly collect any information from children.

---

## 🌍 International Users

Alt-A is a client-side extension that stores data locally. Your data remains on your device regardless of your location. API calls to Groq are subject to Groq's data handling practices.

---

## 🔧 Your Rights

You have full control over your data:

### View Your Data
All settings are visible in the Alt-A options page.

### Delete Your Data
1. Go to `about:addons`
2. Find "Alt-A Smart Fix"
3. Click "Remove"
4. All local data is automatically deleted

### Export Your Data
Settings can be viewed in Firefox DevTools:
```javascript
browser.storage.local.get(null, console.log)
```

---

## 📝 Changes to This Policy

If we update this privacy policy, we will:
1. Update the "Last Updated" date
2. Describe changes in our GitHub releases
3. For significant changes, show a notification in the extension

---

## 📧 Contact

For privacy questions or concerns:

- **GitHub Issues:** [github.com/adithyakrish0/alt-a-smartfix/issues](https://github.com/adithyakrish0/alt-a-smartfix/issues)
- **Repository:** [github.com/adithyakrish0/alt-a-smartfix](https://github.com/adithyakrish0/alt-a-smartfix)

---

## ✅ Summary

| Question | Answer |
|----------|--------|
| Do you collect personal data? | No |
| Do you track browsing? | No |
| Do you store my text? | No |
| Is my API key safe? | Yes, local only |
| Do you share data? | No |
| Do you use analytics? | No |
| Can I delete my data? | Yes, uninstall removes all |

---

<div align="center">

**Your privacy matters. Alt-A is built to respect it.**

[Back to README](README.md) • [View Source Code](https://github.com/adithyakrish0/alt-a-smartfix)

</div>

