
# Portfolio | Facundo D'Addese

Portfolio personal desarrollado con Next.js, donde presento mis proyectos, conocimientos técnicos y tecnologías, junto con información sobre mí y un formulario de contacto.

🔗 **Demo:**  [facundo-daddese.vercel.app](https://facundo-daddese.vercel.app/)

## Características

 - Diseño responsive, adaptado a dispositivos móviles y desktop. 
 - Modo claro y oscuro, con preferencia guardada en `localStorage`.
 -  Navegación por secciones con scroll suave e indicador de sección activa en el navbar. 
 - Carruseles infinitos de tecnologías y   herramientas. 
 - Animaciones al hacer scroll mediante AOS. 
 - Formulario de contacto funcional integrado con EmailJS. 
 - SEO mediante metadata y favicon personalizados.

    

## Tecnologías

 - [Next.js](https://nextjs.org/) (App Router)    
 - [React](https://react.dev/)
 - [TypeScript](https://www.typescriptlang.org/) 
 - [Tailwind CSS](https://tailwindcss.com/) 
 - [EmailJS](https://www.emailjs.com/)  
 - [AOS](https://michalsnik.github.io/aos/) 
 - [React Icons](https://react-icons.github.io/react-icons/)

    
## Cómo ejecutar el proyecto en local

Cloná el repositorio e instalá las dependencias:

```
git clone https://github.com/facudaddese/portfolio.git
cd portfolio
npm install
```

Creá un archivo `.env.local` en la raíz del proyecto con las variables necesarias para el formulario de contacto:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

Iniciá el servidor de desarrollo:

```
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del proyecto

```
app/          # Layout, página principal y estilos globales
components/   # Componentes de la interfaz
hooks/        # Hooks personalizados
public/       # Imágenes y recursos estáticos
```

## Contacto

- LinkedIn: [facundodaddese](https://www.linkedin.com/in/facundodaddese/)
-  GitHub: [facudaddese](https://github.com/facudaddese)
