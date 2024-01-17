## README CIFRADO CÉSAR

![Título y Portada](<src/Imagenes/Portada Web Mensajeria.png>)

<!-- *[Insignias](#insignias) -->
## Índice

*[Objetivo del proyecto](#objetivo-del-proyecto)

*[Estado del proyecto](#Estado-del-proyecto)

*[Características de la aplicación y Funcionalidades](#Características-de-la-aplicación)

*[Diseño de Prototitpo](#Diseño-de-Prototitpo)

*[Acceso al proyecto](#acceso-proyecto)

*[Tecnologías utilizadas](#tecnologías-utilizadas)

*[Personas-Desarrolladores del Proyecto](#personas-desarrolladores)

# Mensajería Web - "With Friends"


## Objetivo del proyecto:

Esta web ha sido creada con el objetivo de mantener una comunicación encubierta, puede ser entre amig@s o parejas de enamorad@s que desean mantener en privacidad sus conversaciones. 

## Estado del proyecto:

 :white_check_mark: Finalizado :white_check_mark:

## 🚀 Características de la aplicación y Funcionalidades:

Para su funcionamiento, ambas partes deberán tener una llave, la cual establecerá el número de posiciones a cifrar de su mensaje, que podrá copiar y enviar a la otra persona por el medio que le convenga; esta llave deberá ser entregada a su amig@ y con ella pueda descifrar el mensaje que le enviaron. Así también el nuevo usuario podría cifrar su respuesta y enviarla a nuestro primer usuario, formando la interacción de ambas personas y sobre todo la comunicación encubierta para lo que necesiten.
Esta aplicación tiene 3 funcionalidades

### 🔨 Funcionalidades del proyecto:

* Cifrar: En un textarea se ingresará un mensaje, el cual queremos cifrar o descifrar, acción que tendrá que ejecutar el botón **CIFRAR**.
* Descifrar: Aquí se mostrará el mensaje cifrado o descifrado, acción que tendrá que ejecutar el botón **DESCIFRAR**.
* key: Se usará como llave de cifrado y descifrado. Esta función se la daremos a el [elemento < input > del tipo "range"](https://developer.mozilla.org/es/docs/Web/HTML/Element/input/range)

## Diseño de Prototitpo:

La interfaz básicamente contiene un formulario inicialmente con una caja de texto donde el usuario ingresará su mensaje a cifrar, posteriormente encontrará una barra para deslizar (scroll bar), que será "la llave" que indicará las posiciones a la derecha para conseguir el cifrado, al deslizarlo se mostrará el valor de la llave al costado. Tendrá que hacer click en el botón "Cifrar" para que el mensaje se muestre cifrado en otra caja de texto, así podrá enviarlo junto con la llave a su amig@ o enamorad@ para que pueda descifrar su mensaje posteriormente realizando el mismo paso inicial de ingresar el mensaje cifrado en la caja de texto inicial, colocar la llave y para este caso, hacer click en el botón "Descifrar", así obtendrá su mensaje descifrado.

Inicialmente se realizó un prototipo de baja fidelidad a mano alzada.

![Prototipo baja fidelidad](<src/Imagenes/Prototipo baja fidelidad.jpeg>)

## 💻 Acceso al proyecto:

Esta **"Web de Mensajería"** puedes verla desde cualquier dispositivo, ya que es responsive, por lo cual le permitirá usarla en su móvil, tablet o Computador escritorio.

Puedes visitarla y probarla, aquí: [Mensajería Web - "With Friends"](https://nellycn.github.io/DEV003-cipher-main/src/)

## 🛠️ Tecnologías utilizadas:

Este proyecto **Cifrado César**, se desarrolló en **HTML semántico**, **CSS** y **JavaScript** y desplegado en Github pages

## Personas-Desarrolladores del Proyecto

* **Nelly Cumpa** - *Trabajo Inicial, Desarrollo y Despliegue* - [NellyCN](https://github.com/NellyCN)
