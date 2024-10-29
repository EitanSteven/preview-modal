# PreviewModal

**PreviewModal** es un componente de React que permite visualizar un componente hijo en una ventana modal. Ideal para proyectos grandes donde necesitas enfocar tu atención en un solo componente sin distraerte con el resto de la interfaz.

## Instalación

Para instalar **PreviewModal**, debes agregarlo como dependencia de desarrollo en tu proyecto. Utiliza el siguiente comando:


```sh
npm install preview-modal --save-dev
```

## Uso
Una vez que hayas instalado la librería, puedes usar el componente PreviewModal en tu aplicación de React. Aquí tienes un ejemplo de cómo hacerlo:

```
import React from 'react';
import PreviewModal from 'preview-modal';

function App() {
    return (
        <div>
            <PreviewModal>
                <h1>¡Hola, mundo!</h1>
            </PreviewModal>
        </div>
    );
}

```

**Propiedades**:

Children: Cualquier componente JSX o contenido que desees renderizar dentro de la modal.

**Contribuciones**
Si deseas contribuir a PreviewModal, no dudes en abrir un issue o realizar un pull request. ¡Estamos aquí para mejorar juntos!

**Licencia**
Este proyecto está bajo la Licencia ISC/MIT.

