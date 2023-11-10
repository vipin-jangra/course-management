# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Instructions to run  

Must have node, npm/yarn installed
```bash
npm install
npm run dev
```


# Test 
[Demo Link](https://course-management-sabj.onrender.com/)  
**Test Users:**
```ts
const users = [
    {
    id: 101,
    name: 'Alice Johnson',
    email: 'alice@example.com',
 
    },
    {
    id: 102,
    name: 'Bob Smith',
    email: 'bob@example.com',
    
    },
];
```

# Note

This app uses dummy data as a global redux state. Although its not practical but for faster development (without setting up an additional backend) for sake of this assignment purpose, I took this approach. 