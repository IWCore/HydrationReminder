# HydrationReminder 💧

A mobile application developed for **Practical Tutorial 06: Local Notifications & Tab Navigation in Expo** as part of the **COST 32152 - Mobile Application Development** course at the **Department of Statistics & Computer Science, University of Kelaniya** (Academic Year 2024/2025, Semester 2).

---

## 📱 Project Overview

The **Hydration Reminder** app demonstrates hardware-level integration using Expo APIs by scheduling recurring local device notifications to remind users to stay hydrated. It also features a bottom tab navigation layout implemented with **Expo Router**.

### Key Learning Objectives
- Understanding differences between **Local Notifications** (on-device, offline) and **Push Notifications** (remote servers via APNs/FCM).
- Requesting and managing OS-level hardware permissions with `Notifications.requestPermissionsAsync()`.
- Configuring global foreground alert presentation via `Notifications.setNotificationHandler()`.
- Scheduling, triggering, and canceling repeating local notifications with `Notifications.scheduleNotificationAsync()` and `Notifications.cancelAllScheduledNotificationsAsync()`.
- Building a 3-tab layout using Expo Router file-based routing.
- Following the React "Rules of Hooks" (calling hooks like `useEffect` and `useState` only at the top level).

---

## 📑 Application Structure

```text
HydrationReminder/
├── assets/                  # App icons, splash screens, and images
├── Output_Screens/          # Output screenshots for submission
│   └── README.md
├── src/
│   └── app/
│       ├── _layout.tsx      # Bottom tab navigator and global notification handler
│       ├── index.tsx        # Tab 1: Reminder screen (schedule, interval, custom message)
│       ├── tips.tsx         # Tab 2: Tips screen (static hydration benefits)
│       └── about.tsx        # Tab 3: About screen (app and developer information)
├── app.json                 # Expo configuration
├── package.json             # Project dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

### 1. Tab 1: Reminder (`src/app/index.tsx`) ⏰
- **Permission Check**: Automatically requests notification permissions on component mount (`useEffect`).
- **Custom Message**: Allows users to input their own reminder message in real-time.
- **Interval Setting**: Configures notification interval in minutes.
- **Status Indicator**: Displays real-time status (`Active 🟢` or `Inactive 🔴`).
- **Start Reminders Button**: Cancels any existing scheduled alerts, then schedules a repeating time-interval notification.
- **Stop Reminders Button**: Cancels all scheduled notifications and resets the status.

### 2. Tab 2: Tips (`src/app/tips.tsx`) 💧
- Displays static educational content highlighting key benefits of regular water intake:
  - Boosts skin health and beauty
  - Regulates body temperature
  - Flushes body waste
  - Maintains blood pressure

### 3. Tab 3: About (`src/app/about.tsx`) ℹ️
- Shows details about the lab practical, technologies used (React Native and Expo), and developer attribution.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: React Native with [Expo](https://expo.dev) (SDK 58)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based tab routing)
- **Notifications**: [`expo-notifications`](https://docs.expo.dev/versions/latest/sdk/notifications/)
- **Language**: TypeScript

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Expo Notifications (if not already installed)
```bash
npx expo install expo-notifications
```

### 3. Run the App
Start the Expo development server while clearing cache:
```bash
npx expo start -c
```

### 4. Testing on Physical Device
1. Install **Expo Go** on your physical Android or iOS device.
2. Scan the QR code displayed in the terminal or browser.
3. Grant notification permissions when prompted upon app launch.
4. Set an interval (e.g., 1 minute) and click **START REMINDERS**.
5. Switch to another tab or minimize the app to observe the notification arriving with sound and banner.

---

## 📸 Output Screenshots

Screenshots of the working application running on a device are saved in the [`Output_Screens`](./Output_Screens) folder:
- **Reminder Tab (Inactive & Active)**
- **Notification Banner / Alert**
- **Tips Tab**
- **About Tab**

---

## 👨‍💻 Developer Information

- **Course**: COST 32152 - Mobile Application Development
- **Department**: Department of Statistics & Computer Science, University of Kelaniya
- **Developer**: IWCore
