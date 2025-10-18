# Team Portfolio Setup Guide

## 🎯 Overview
Each team member now has their own individual folder where they can customize their personal page. This guide explains how to use the system.

## 📁 Folder Structure
```
src/members/
├── abdellah/          # Team Leader 
├── abdelali/          # Team Member 
├── abderraouf/        # Team Member 
├── sadjeda/           # Team Member 
├── minetellah/        # Team Member 
├── badis/             # Team Member 
└── TEMPLATE.md        # Instructions
```


## 📋 How Each Member Can Customize Their Page

### 1. **Edit Personal Information**
Navigate to your folder: `src/members/[your-name]/memberData.js`

**What you can customize:**
- Personal information (name, role, email)
- Bio and description
- Skills and technologies
- Projects and experience
- Contact information
- GitHub/LinkedIn links

### 2. **Customize Page Layout**
Edit: `src/members/[your-name]/MemberPage.jsx`

**What you can customize:**
- Page sections and layout
- Content organization
- Personal touches and features

### 3. **Style Your Page**
Edit: `src/members/[your-name]/MemberPage.css`

**What you can customize:**
- Colors and theme
- Typography and fonts
- Layout and spacing
- Animations and effects

### 4. **Add Personal Assets**
Create an `assets/` folder in your directory for:
- Profile photos
- Project screenshots
- Resume files
- Personal images

## 🚀 Getting Started

### For Team Members:
1. **Navigate to your folder**: `src/members/[your-name]/`
2. **Edit `memberData.js`** with your information
3. **Test your changes**: Run `npm run dev` and visit your page
4. **Customize styling**: Edit `MemberPage.css` for personal branding
5. **Add projects**: Include your work in the projects section

## 🔧 Technical Details

### File Structure for Each Member:
```
src/members/[your-name]/
├── memberData.js      # Your personal information
├── MemberPage.jsx     # Your page component
├── MemberPage.css      # Your page styling
└── assets/           # Your personal files (optional)
```

### Integration:
- Each member's page is automatically integrated with the main application
- Changes are reflected immediately when you run `npm run dev`
- The main hero page links to each member's individual page

## 📝 Example Customization

### Adding a Project:
```javascript
// In your memberData.js
projects: [
  {
    title: 'My Awesome Project',
    description: 'A description of what I built',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://yourproject.com',
    image: 'assets/project-screenshot.jpg'
  }
]
```

### Adding Experience:
```javascript
// In your memberData.js
experience: [
  {
    title: 'Frontend Developer',
    company: 'Tech Company',
    period: '2024 - Present',
    description: 'Building amazing web applications'
  }
]
```

## 🎯 Next Steps

1. **Each member should:**
   - Edit their `memberData.js` with real information
   - Add their projects and experience
   - Customize their page styling
   - Test their changes

2. **Team Leader should:**
   - Help coordinate any issues
   - Ensure all pages work correctly
   - Plan deployment when ready

## 🚀 Deployment
When ready, the team portfolio can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any hosting platform

## 📞 Support
If any team member needs help:
- Check the `TEMPLATE.md` file in `src/members/`
- Ask the team leader for assistance
- Review the main application structure

---

**Happy customizing! 🎉**
