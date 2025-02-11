# 🚀 FeedPerks – The Ultimate Feedback & Rewards System

## 🎯 Overview
FeedPerks is a **QR-based instant feedback and rewards platform** that helps businesses collect real-time insights while incentivizing customers with cashback, discounts, and loyalty perks.

## 🛑 Problem Statement
- Businesses struggle with collecting **real-time** customer feedback.  
- Customers provide reviews **only when dissatisfied**, leading to biased ratings.  
- **Small businesses lack analytics** tools that big brands use.  

## 🚀 Solution: **Scan. Rate. Earn.**
FeedPerks bridges the gap by offering a **frictionless, QR-based solution** for instant feedback and rewards.

### 🔹 **How It Works**
1️⃣ Customers **scan a unique QR code** at a business location.  
2️⃣ They **rate their experience** (1-5 stars or emoji-based reactions).  
3️⃣ Businesses receive **real-time analytics** on customer feedback.  
4️⃣ Customers **earn rewards** (cashback, discounts, or loyalty points) for participating.  

### 🌟 **Key Features**
✅ **Instant Feedback** – Customers provide ratings in seconds.  
✅ **AI-Driven Insights** – Businesses improve based on real-time data.  
✅ **Customer Rewards** – Encourages repeat engagement.  
✅ **No App Required** – Works seamlessly via QR codes.  
✅ **Scalable & Monetizable** – Supports a **subscription model** for premium features.  

---

## 💰 Business Model
1️⃣ **Subscription Plan for Businesses** – ₹999/month for premium analytics.  
2️⃣ **Featured Listings & Custom Perks** – Extra visibility for brands.  
3️⃣ **Data-Driven Insights Sales** – Helping businesses understand customer trends.  

---

## 📌 Project Structure
### 1️⃣ **Business Listings Page (For Customers)**
- **Displays all businesses** from Firestore in a ListView.  
- Each **business card** includes name, location, and a "Scan QR" button.  
- Clicking the button **opens the QR scanner**.  

### 2️⃣ **Business Registration Page (For Owners)**
- **Text fields** for store name, location.  
- **"Generate QR Code"** button (creates a unique QR & saves it in Firestore).  
- **Uploads business details** to Firestore collection (`businesses`).  

### 3️⃣ **Feedback & Rewards Page**
- Customers **rate their experience** via QR-based system.  
- Businesses **receive real-time insights** in their dashboard.  
- Customers get **cashback & discounts** for engagement.  

---

## 📦 Tech Stack
- **Frontend:** Flutter (Android Studio)  
- **Backend:** Firebase (Firestore, Authentication)  
- **QR Code Integration:** QR scanner & generator  
- **AI Analytics:** Data-driven customer insights  

---

## 🚀 Getting Started
### 🔧 Prerequisites
- Install **Flutter & Android Studio**  
- Set up **Firebase** project  
- Clone the repository:  
  ```sh
  git clone https://github.com/Srihari-DON/FeedPerks.git
  cd FeedPerks
