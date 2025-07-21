# Cinematic Video Portfolio

## Project Overview
A modern, cinematic video portfolio website showcasing film and video production work. The project has been successfully migrated from Lovable to Replit with proper client/server separation and security practices.

## Architecture
- **Frontend**: React with Wouter routing (migrated from React Router for Replit compatibility)
- **Backend**: Express.js server with Vite development setup
- **Styling**: Tailwind CSS with custom cinematic design system
- **Components**: Shadcn/ui component library

## Recent Changes (July 20-21, 2025)
- ✅ Migrated routing from React Router DOM to Wouter for Replit compatibility
- ✅ Fixed CSS import order issues (moved @import to top of file)
- ✅ Added missing dependencies (react-router-dom, sonner)
- ✅ Created queryClient setup for TanStack Query
- ✅ Simplified Home page to single screen with no scrolling sections
- ✅ Updated Home page to show only auto-playing looped video
- ✅ Added custom CSS animations and utility classes
- ✅ Fixed navigation component to use Wouter hooks
- ✅ Added Footer component with user's email (ivasant3005@gmail.com) and name "vasant"
- ✅ Changed font family from Inter to Roboto sans-serif throughout site
- ✅ Added slide-up animations to Work page instead of scale-up
- ✅ Added mute/unmute toggle for home video (bottom-right corner)
- ✅ Removed problematic NotFound route causing 404 screens on valid pages
- ✅ Replaced placeholder video with user's actual portfolio video
- ✅ Configured video to freeze on last frame instead of looping
- ✅ Fixed mobile video aspect ratio issues to prevent stretching
- ✅ Removed "Selected Work" title from Work page for cleaner design
- ✅ Updated Contact page social links to show only Instagram, LinkedIn, and Behance
- ✅ Replaced footer social icons with authentic branded LinkedIn and Instagram icons

## Current Status
The portfolio website is fully functional with:
- Static home page with full-screen auto-playing video and scroll-triggered overlay
- "Let's talk" section appears on scroll with blur background and transparency
- Floating mute button that repositions when overlay appears
- Working navigation between Home, Work, and Contact pages
- Footer section on Work and Contact pages with user contact info and social links
- Responsive design with dark theme using Roboto font throughout
- Custom slide-up animations for Contact page elements
- Express server running on port 5000
- Resolved 404 error screens that were appearing incorrectly

## User Preferences
- Prefers simple, focused pages without excessive scrolling
- Values clean, cinematic design aesthetic
- Wants professional portfolio presentation

## Next Steps
Ready for further development and customization as needed.