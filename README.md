# Bijli Audit — AI-Powered Electricity Bill Auditor & Tariff Guard

Bijli Audit is an intelligent web application designed to scan, audit, and analyze electricity bills. Built to protect consumers from tariff slab errors, unauthorized tax overcharges, and sudden loss of **Protected Status** (200-unit threshold safety gauge), Bijli Audit brings complete transparency to your monthly energy costs.

---

##  Key Features

* **AI & OCR Extraction:** Instantly upload bill images (JPG, PNG, WEBP) to extract consumption data, total amounts, and tariff slabs via Fast-OCR processing.
* **Protected Status Safety Gauge:** Track your 6-month historical consumption against the crucial 200-unit protected status limit.
* **Discrepancy Detection Engine:** Automated checks for tax overcharges, illegal surcharges, and incorrect slab calculations.
* **Interactive Dashboard:** Dynamic charts, KPI metrics, and intuitive visuals powered by Framer Motion and Lucide Icons.
* **Audit Memory Bank Gallery:** View and manage historical audit reports and single-bill breakdown details.

---

##  Tech Stack

### **Frontend**
* **Framework:** Next.js 14+ (App Router, TypeScript)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React

### **Backend**
* **Framework:** FastAPI (Python)
* **OCR Engine:** EasyOCR & PyTorch
* **Server:** Uvicorn (ASGI)

---

##  Getting Started

### Prerequisites
* **Node.js** (v18 or higher)
* **Python** (v3.10 or higher)

---

### 1. Backend Setup

```bash
# Navigate to backend directory
cd bijli-audit-backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows (PowerShell):
.\venv\Scripts\Activate.ps1
# On macOS/Linux:
source venv/bin/activate

# Install backend dependencies
pip install -r requirements.txt

# Start FastAPI Server
python -m uvicorn main:app --reload
