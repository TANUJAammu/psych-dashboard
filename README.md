# Digital Psyche - AI & Human Behavior Research Dashboard

A comprehensive React-based dashboard analyzing survey data on AI personality inference and digital behavior patterns.

## 🧠 Project Overview

This web application explores the question: **Do AI Inferences Match Human Reality?**

The dashboard visualizes 29 survey responses collected in January 2026, examining:
- Digital behavior patterns (social media usage, posting frequency, texting styles)
- Personality self-assessments (MBTI types, introversion/extroversion)
- Privacy concerns and AI awareness
- Attitudes toward AI personality inference

## 📁 Project Structure

```
.
├── index.html          # Entry HTML file
├── main.jsx            # React application bootstrap
├── App.js              # Main app component with routing
├── Home.jsx            # Home page with project introduction
├── Dashboard.jsx       # Interactive data visualizations
├── Table.jsx           # Sortable/filterable data table
├── data.js             # Survey response data (29 entries)
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite build configuration
└── README.md           # This file
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Features

### Page 1: Home
- Project title and research question
- Introduction to AI and digital behavior analysis
- Survey methodology explanation
- Ethical considerations and privacy concerns

### Page 2: Dashboard
Interactive charts and visualizations:
- **Posting Frequency vs Privacy Concern** - Bar chart showing correlation
- **Emoji Usage Purposes** - Pie chart of emoji expression categories
- **AI Awareness vs Accuracy Belief** - Scatter plot revealing relationships
- **Personality Type Distribution** - Bar chart of intro/extro/ambivert responses
- **Texting Style Distribution** - Pie chart of communication styles
- **AI Ethics Opinions** - Bar chart of attitudes toward AI inference
- **Key Insights** - Data-driven findings and analysis

### Page 3: Data Table
- All 29 survey responses in tabular format
- Sortable columns (click headers to sort)
- Filter by:
  - Search term (personality, style)
  - Age group
  - Privacy concern level (high/medium/low)
- Color-coded ratings (privacy, AI awareness, AI accuracy)

## 🛠️ Technology Stack

- **React 18** - UI framework
- **React Router** - Page navigation
- **Recharts** - Data visualization library
- **Tailwind CSS** - Styling (via CDN)
- **Vite** - Build tool and dev server

## 🎨 Design Philosophy

The dashboard features a distinctive **psychology-themed dark aesthetic**:
- **Color palette**: Amber/orange gradients on dark slate backgrounds
- **Typography**: DM Sans for body text, JetBrains Mono for code
- **Visual elements**: Subtle animated backgrounds, gradient borders, hover effects
- **Accessibility**: High contrast, clear typography, semantic HTML

## 📊 Data Source

Survey data collected January 5-7, 2026 from 29 anonymous respondents.

**Data fields include:**
- Demographics (age, gender, occupation)
- Online behavior (platforms, time online, posting frequency)
- Communication style (texting style, emoji usage)
- Personality assessment (MBTI type, intro/extro self-identification)
- AI attitudes (awareness, accuracy belief, ethical opinion)
- Privacy ratings (1-5 scale)

## 🔒 Ethics & Privacy

- All data is anonymized
- No personally identifiable information collected
- Informed consent obtained from all participants
- Data used solely for research and educational purposes

## 📝 Key Findings

1. **Privacy Paradox**: Users who post rarely show higher privacy concerns
2. **Awareness Gap**: High AI awareness doesn't correlate with belief in AI accuracy
3. **Communication Norms**: "Short and direct" dominates as preferred texting style
4. **Ethics Nuance**: Majority view AI inference contextually rather than categorically

## 🤝 Contributing

This is a research project. For questions or collaboration inquiries, please refer to the documentation.

## 📄 License

Research project - Educational use only

---

**Research Question:** Do AI personality inferences match how humans actually perceive themselves?

**Explore the data to form your own conclusions.**
