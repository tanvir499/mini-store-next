# 🚀 Quick Start Guide

## How to Run the MiniStore Application

### Method 1: Manual Start (Recommended)

1. **Open two terminal windows**

2. **Terminal 1 - Start Express Server:**
   ```bash
   cd mini-ecommerce/server
   npm run dev
   ```
   ✅ Server will run on: http://localhost:3001

3. **Terminal 2 - Start Next.js App:**
   ```bash
   cd mini-ecommerce
   npm run dev
   ```
   ✅ App will run on: http://localhost:3000

### Method 2: Using Concurrently (Alternative)

From the `mini-ecommerce` directory:
```bash
npm run dev:all
```

### 🔐 Demo Login Credentials

- **Email**: admin@example.com
- **Password**: Admin123

### 📱 Application URLs

- **Homepage**: http://localhost:3000
- **Items List**: http://localhost:3000/items
- **Login**: http://localhost:3000/login
- **Add Item** (Protected): http://localhost:3000/add-item
- **API Server**: http://localhost:3001

### 🛠️ Troubleshooting

**Port Already in Use Error:**
```bash
# Kill processes on port 3000
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Kill processes on port 3001
netstat -ano | findstr :3001
taskkill /PID [PID_NUMBER] /F
```

**Next.js Lock Error:**
- Close all terminal windows
- Delete `.next` folder: `rm -rf .next`
- Restart servers

### ✅ Success Indicators

**Express Server:**
```
Server running on http://localhost:3001
```

**Next.js App:**
```
✓ Ready in [X]s
- Local: http://localhost:3000
```

### 🎯 Test the Application

1. Visit http://localhost:3000 (Landing page)
2. Click "Items" to see product list
3. Click on any product to see details
4. Click "Login" and use demo credentials
5. After login, visit "Add Item" to create new products

Both servers are currently running and ready to use! 🎉