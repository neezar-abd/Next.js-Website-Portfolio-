# Contributing to Portfolio Website

Terima kasih atas minat Anda untuk berkontribusi! 🎉

## 📋 Cara Berkontribusi

### 1. Fork & Clone Repository

```bash
# Fork repository terlebih dahulu melalui GitHub UI
git clone https://github.com/YOUR_USERNAME/Next.js-Website-Portfolio-.git
cd Next.js-Website-Portfolio-

# Tambahkan upstream remote
git remote add upstream https://github.com/neezar-abd/Next.js-Website-Portfolio-.git
```

### 2. Setup Development Environment

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local dengan Firebase credentials Anda

# Run development server
npm run dev
```

### 3. Buat Branch Baru

```bash
# Selalu buat branch dari master yang terbaru
git checkout master
git pull upstream master

# Buat branch untuk feature/fix Anda
git checkout -b feature/nama-feature
# atau
git checkout -b fix/nama-bug
```

### 4. Lakukan Perubahan

- Ikuti coding standards yang ada (lihat di bawah)
- Tulis kode yang clean dan mudah dibaca
- Tambahkan komentar jika diperlukan
- Test perubahan Anda secara menyeluruh

### 5. Commit Changes

```bash
# Stage changes
git add .

# Commit dengan pesan yang jelas
git commit -m "feat: add new feature X"
# atau
git commit -m "fix: resolve bug Y"
```

**Commit Message Format:**
- `feat:` - Feature baru
- `fix:` - Bug fix
- `docs:` - Perubahan dokumentasi
- `style:` - Formatting, missing semi colons, etc
- `refactor:` - Refactoring kode
- `perf:` - Performance improvements
- `test:` - Tambah/update tests
- `chore:` - Maintenance tasks

### 6. Push & Create Pull Request

```bash
# Push ke fork Anda
git push origin feature/nama-feature
```

Kemudian:
1. Buka repository fork Anda di GitHub
2. Klik "Compare & pull request"
3. Isi deskripsi PR dengan jelas:
   - Apa yang diubah?
   - Mengapa perubahan ini diperlukan?
   - Screenshot/GIF jika ada perubahan UI
4. Submit PR!

## 📝 Coding Standards

### TypeScript
- Selalu gunakan TypeScript, hindari `any` type
- Buat interface/type untuk props dan data structures
- Gunakan type inference jika memungkinkan

```tsx
// ✅ Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  // ...
}

// ❌ Bad
export function Button({ label, onClick, variant }: any) {
  // ...
}
```

### React Components
- Gunakan functional components dengan hooks
- Export component sebagai named export
- Props destructuring di parameter
- Use meaningful component names

```tsx
// ✅ Good
export function BlogCard({ title, date, excerpt }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  // ...
}

// ❌ Bad
export default ({ title, date, excerpt }) => {
  // ...
}
```

### Styling
- Gunakan Tailwind CSS utility classes
- Gunakan `cn()` utility untuk conditional classes
- Hindari inline styles kecuali dynamic values

```tsx
// ✅ Good
<div className={cn(
  "rounded-lg p-4",
  isActive && "bg-primary text-white"
)}>

// ❌ Bad
<div style={{ borderRadius: "8px", padding: "16px" }}>
```

### File Organization
- Sesuai struktur yang ada
- Components di `components/`
- Pages di `app/`
- Utils di `lib/`
- Types di `types/`

### Naming Conventions
- Components: PascalCase (`BlogCard.tsx`)
- Files: kebab-case (`blog-card.tsx`) atau PascalCase
- Variables/Functions: camelCase (`fetchBlogPosts`)
- Constants: UPPER_SNAKE_CASE (`MAX_POSTS`)

## 🧪 Testing

Sebelum submit PR:

```bash
# Build production untuk check errors
npm run build

# Lint check
npm run lint

# Manual testing:
# 1. Test di development mode (npm run dev)
# 2. Test di production build (npm run build && npm run start)
# 3. Test responsive design (mobile, tablet, desktop)
# 4. Test dark mode toggle
# 5. Test navigation links
```

## 📦 Pull Request Checklist

Sebelum submit PR, pastikan:

- [ ] Kode berjalan tanpa error di development
- [ ] Build production berhasil (`npm run build`)
- [ ] Tidak ada TypeScript errors
- [ ] Tidak ada ESLint warnings/errors
- [ ] Sudah test di berbagai screen sizes
- [ ] Sudah test dark mode (jika ada perubahan UI)
- [ ] Documentation updated (jika perlu)
- [ ] Commit messages jelas dan mengikuti format

## 🐛 Melaporkan Bug

Jika Anda menemukan bug:

1. **Check Issues terlebih dahulu** - Mungkin sudah dilaporkan
2. **Buat Issue baru** dengan informasi:
   - Deskripsi bug yang jelas
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots/videos (jika ada)
   - Environment (Browser, OS, dll)

## 💡 Request Feature

Punya ide untuk feature baru?

1. **Buat Issue** dengan label `enhancement`
2. Jelaskan:
   - Apa feature yang diinginkan?
   - Mengapa feature ini berguna?
   - Bagaimana cara kerjanya?
   - Mockup/wireframe (jika ada)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [HeroUI Documentation](https://heroui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📞 Pertanyaan?

Jika ada pertanyaan, jangan ragu untuk:
- Buat Issue dengan label `question`
- Contact via email: neezarabdurrahman@gmail.com
- LinkedIn: [linkedin.com/in/neezarabd](https://linkedin.com/in/neezarabd)

---

**Terima kasih telah berkontribusi! 🙏**
