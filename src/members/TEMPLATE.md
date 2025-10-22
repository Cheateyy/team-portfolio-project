# Team Member Page Template

## How to Customize Your Page

Each team member has their own folder in `src/members/[your-name]/` where you can customize your individual page.

### Files You Can Customize:

1. **`MemberPage.jsx`** - Your main page component
2. **`MemberPage.css`** - Your page styling
3. **`memberData.js`** - Your personal information
4. **`assets/`** - Your personal images and files

### Steps to Customize:

1. **Navigate to your folder**: `src/members/[your-name]/`
2. **Edit `memberData.js`** to update your information
3. **Edit `MemberPage.jsx`** to customize your page layout
4. **Edit `MemberPage.css`** to style your page
5. **Add your assets** to the `assets/` folder

### Available Customization Options:

- Personal information (name, bio, role, etc.)
- Skills and technologies
- GitHub profile integration
- Personal projects showcase
- Contact information
- Custom styling and layout
- Personal images and media

### Example Structure:
```
src/members/[your-name]/
├── MemberPage.jsx      # Your page component
├── MemberPage.css      # Your page styles
├── memberData.js       # Your personal data
└── assets/            # Your personal files
    ├── profile.jpg
    ├── project1.png
    └── resume.pdf
```

### Important Notes:
- Keep your folder name consistent with your ID in `teamMembers.js`
- Test your changes by running `npm run dev`
- Your changes will be automatically reflected in the main application
- Coordinate with the team leader for any major structural changes
