# Frontend Chat Integration Guide

## Overview
The `ChatWidgetEnhanced.tsx` component has been updated to integrate with the Gemini-powered chatbot backend. Users can now chat with an AI assistant that has context about your services, team members, and insights.

## Setup Steps

### 1. Environment Configuration
Make sure your `.env.local` file includes:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3004
```

For production, update to your deployed backend URL:
```bash
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

### 2. Backend Prerequisites
Ensure the backend is running:
- ✅ Backend server running on port 3004 (or configured port)
- ✅ Gemini API key configured in backend `.env` as `GEMINI_API_KEY`
- ✅ Database is initialized and running
- ✅ Chat routes registered at `/api/chat`

```bash
# In contours-bn directory
npm run dev
```

### 3. Frontend Installation
No additional packages needed - already included dependencies:
- `framer-motion` (animations)
- `lucide-react` (icons)

### 4. Verify Component is Imported
Make sure `ChatWidgetEnhanced` is imported in your layout or main page:

```tsx
import ChatWidgetEnhanced from '@/components/ui/ChatWidgetEnhanced'

export default function Layout() {
  return (
    <div>
      {/* Your content */}
      <ChatWidgetEnhanced />
    </div>
  )
}
```

## How It Works

### Conversation Flow

1. **Widget Opens**
   - User clicks chat button
   - Frontend creates a new conversation via `POST /api/chat/conversations`
   - `conversationId` is stored in component state

2. **User Sends Message**
   - User types message and presses Enter or clicks Send
   - Input is disabled (loading state)
   - Message is sent to backend: `POST /api/chat/conversations/{conversationId}/messages`

3. **Backend Processes**
   - Gemini API receives the message with full conversation context
   - System prompt includes your services, team members, insights
   - AI generates relevant response

4. **Response Displayed**
   - Bot message appears in chat
   - Optional: Text-to-speech plays response (user's language preference)
   - Input is re-enabled

### Key Features

✅ **Multi-language Support**
- UI strings translated to: English, Spanish, French, German, Portuguese
- Bot responses can be translated
- Text-to-speech uses appropriate language

✅ **Conversation History**
- All messages stored in database
- Full context maintained across conversation
- Conversations can be retrieved later

✅ **Voice Input**
- Speech Recognition API (if browser supports)
- Transcribed text appears in input field
- Works across languages

✅ **Loading States**
- Send button shows loading spinner while waiting for response
- Input field is disabled during API call
- Voice button disabled while loading

✅ **Error Handling**
- Connection errors display friendly message
- Failed requests show error text to user
- Console logs for debugging

## API Endpoints Used

### Create Conversation
```
POST /api/chat/conversations
Header: Content-Type: application/json
Body: {
  "title": "Chat - 11/15/2025",
  "userId": undefined
}

Response: { success: true, data: { id: "uuid", title: "...", createdAt: "..." } }
```

### Send Message
```
POST /api/chat/conversations/{conversationId}/messages
Header: Content-Type: application/json
Body: {
  "message": "What services do you offer?"
}

Response: {
  success: true,
  data: {
    userMessage: { id: "...", role: "user", content: "..." },
    assistantMessage: { id: "...", role: "assistant", content: "..." },
    conversationId: "uuid"
  }
}
```

## Component Props & State

### State Variables
| Variable | Type | Purpose |
|----------|------|---------|
| `conversationId` | string \| null | Current conversation ID |
| `messages` | Message[] | Chat messages (user + bot) |
| `inputValue` | string | Current input text |
| `isLoading` | boolean | API call in progress |
| `isOpen` | boolean | Widget visibility |
| `language` | string | Selected language |
| `isListening` | boolean | Voice input active |
| `apiBaseUrl` | string | Backend API URL |

### Interface Definitions
```tsx
interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface ConversationData {
  id: string
  title: string
  userId?: string
  createdAt: string
}
```

## Styling & Customization

### CSS Classes Used
- Tailwind CSS for responsive design
- Dark mode support via `dark:` prefix
- Primary color theme via `primary-500`, `primary-600`

### Customize Appearance
```tsx
// In the component, modify:
// - Message bubble colors: bg-primary-500 (user), bg-slate-200 (bot)
// - Widget width: w-96 (default), change to w-80 or w-full
// - Widget height: h-96 (default)
// - Corner radius: rounded-xl

// Example: Make widget wider
className="w-full md:w-96 h-96 ..." // Instead of just w-96
```

### Customize Colors
Update theme in `tailwind.config.ts` to change `primary-500` color globally.

## Translations

All UI strings are in the `UI_STRINGS` object:

```tsx
const UI_STRINGS = {
  en: { 
    title: 'Contours Analytics Assistant',
    placeholder: 'Type your message...',
    send: 'Send',
    voice: 'Voice',
    speaking: 'Speaking...',
    listening: 'Listening...',
    voiceError: 'Voice not supported'
  },
  // ... other languages
}
```

**To add a new language:**
1. Add language code to the type: `type LangCode = 'en' | 'es' | 'fr' | 'de' | 'pt' | 'it'`
2. Add strings to `UI_STRINGS` object
3. Add language option to language selector (if you add one)

## Performance Considerations

### Optimization Tips

1. **Lazy Load Component** (if on many pages)
```tsx
import dynamic from 'next/dynamic'
const ChatWidget = dynamic(() => import('@/components/ui/ChatWidgetEnhanced'), {
  ssr: false,
  loading: () => null,
})
```

2. **Limit Message History Display**
- Currently shows all messages
- For long conversations, add pagination
- Fetch older messages via: `GET /api/chat/conversations/{id}/messages?page=2&limit=50`

3. **Optimize API Calls**
- Add debouncing for voice input
- Add request timeout (currently uses fetch default)
- Cache conversations list

## Troubleshooting

### "Failed to get response"
- ✓ Check if backend is running on port 3004
- ✓ Verify `NEXT_PUBLIC_API_URL` is correct
- ✓ Check backend logs for errors
- ✓ Verify Gemini API key is set in backend

### Widget not appearing
- ✓ Ensure component is imported in your layout
- ✓ Check if CSS is loading (TailwindCSS configured)
- ✓ Verify `mounted` state is true (SSR safe)

### Voice input not working
- ✓ Not all browsers support Web Speech API
- ✓ Requires HTTPS in production (for security)
- ✓ Check browser console for errors

### Messages not persisting
- ✓ Conversation ID is required to save messages
- ✓ Check if conversation creation succeeded
- ✓ Verify database connection in backend

### CORS Errors
- ✓ Backend should have CORS enabled for frontend URL
- ✓ Check backend CORS configuration
- ✓ Ensure `NEXT_PUBLIC_API_URL` matches backend origin

## Testing the Integration

### Manual Test Checklist

```
[ ] Backend is running and accessible
[ ] Widget opens on button click
[ ] Can type and send messages
[ ] Bot responds with relevant answers
[ ] Conversation history is maintained
[ ] Multiple conversations can be created
[ ] Voice input transcribes correctly
[ ] Dark mode displays properly
[ ] Mobile responsive layout works
[ ] Errors are handled gracefully
[ ] Language switching works (if implemented)
```

### Example Test Conversation

```
User: "What services does Contours Analytics offer?"

Expected Response: AI should mention:
- Data Science & Analytics
- Actuarial Services
- Business Intelligence
- Team members and expertise
- Specific sub-services based on backend data
```

## Next Steps

1. **Add User Authentication**
   ```tsx
   const userId = getCurrentUserId() // Get from auth context
   // Pass to conversation creation
   body: JSON.stringify({ title: "...", userId })
   ```

2. **Add Conversation List**
   - Show past conversations
   - Allow user to switch between chats
   - Delete/archive old conversations

3. **Add Message Features**
   - Copy message to clipboard
   - Regenerate bot response
   - Rate response quality
   - Report inappropriate content

4. **Advanced Features**
   - Real-time typing indicators
   - Message search
   - Export conversation as PDF
   - Share conversation link

5. **Analytics**
   - Track popular questions
   - Monitor average response time
   - Identify common user issues

## Support

For issues or questions:
- Check backend logs: `npm run dev` in `contours-bn`
- Review API documentation: `contours-bn/CHAT_API.md`
- Check Gemini setup: `contours-bn/GEMINI_SETUP.md`
- Review component code: `components/ui/ChatWidgetEnhanced.tsx`

---

**Last Updated:** November 15, 2025
**Status:** ✅ Production Ready
