# Landing page - Lote en Cota, Conjunto Residencial Los Alisos

Proyecto estático en HTML, CSS y JavaScript para publicar en Vercel.

## Estructura

```txt
lote-cota-los-alisos/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── img/
        ├── hero-lote.jpg
        ├── entrada-conjunto.jpg
        ├── lote-frente.jpg
        ├── lote-fondo.jpg
        ├── casas-conjunto.jpg
        ├── vias-internas.jpg
        ├── mapa-ubicacion.jpg
        └── plano-lote.jpg
```

## Cómo cambiar fotos

Reemplaza las imágenes dentro de `assets/img/` manteniendo los mismos nombres.

La más importante es:

- `hero-lote.jpg`: imagen principal de la portada.

Recomendación: usa imágenes horizontales, livianas, en formato `.jpg` o `.webp`.

## Contacto configurado

- Nicolás Segura
- WhatsApp: +57 302 832 7122
- Correo: nicolasseguraherrera96@gmail.com

Para cambiar el contacto, edita el objeto `CONTACT` en `js/main.js`.

## Formulario

El formulario no necesita backend. Al enviar, abre WhatsApp con el mensaje armado automáticamente.

## Publicar en Vercel

Opción fácil:

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a Vercel.
3. Importa el repositorio.
4. Deja la configuración por defecto para proyecto estático.
5. Publica.

También puedes usar Vercel CLI desde la carpeta raíz:

```bash
npm i -g vercel
vercel --prod
```

## Nota legal/comercial

La página dice que la construcción debe respetar el diseño preestablecido del conjunto y los permisos o trámites correspondientes. Esto evita prometer condiciones no verificadas ante la autoridad competente.
