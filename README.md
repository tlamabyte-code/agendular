# Agendular

Aplicativo/Proyecto de una Agenda Digital en Angular

## Sesión 4 (Inicio del Desarrollo de Agendular)
**Resumen**
> Hola 👋, aquí puedes encontrar una serie de conceptos y conocimientos que se vieron durante la sesión 4

### Diseño de Aplicación Modular 🧩

  Práctica que puede aplicar en un aplicativo, consiste en dividir en módulos independientes el aplicativo **(páginas, componentes, servicio, modelos, etc.)**, siempre puedes seguir aplicando la modularidad, esto **facilita el mantenimiento, escalabilidad y colaboración** al momento de estar desarrollando ya sea <u>individual o en equipo</u>.

### Páginas en Angular (Pages) 🖥️📄
  
  Se refiere a la manera en que puedes separar las **vistas/páginas que puedan existir en nuestro aplicativo**, pensadas para renderizar dentro de ellas componentes</br>
  > Ejemplos: [Login, Home, Dashboard, ...]
  <hr/>
  
  Comando de Angular CLI para crear un componente tipo página<br/>
  <strong><code>ng g c pages/&lt;nombre_de_la_pagina&gt;</code></strong> <br/></br>
   * [Pages](src/app/pages) > Durante el proyecto utilizamos esta ubicación para colocar cada una de nuestras vistas en el aplicativo de Agendular </br></br>
  > Algo importante es mencionar que en realidad una "página" es un componente (@Component), y que solo se esta utilizando esta estrategia para identificarlo como un componente pero que se comporta como una [página](#páginas-en-angular-pages-%EF%B8%8F)

### Componentes en Angular (Components) 📦📄

  Son las piezas de código que permiten fragmentar tu aplicación, el decorador @Component es por el cual Angular reconoce a los componentes de una aplicación, son  
  recomendables para reutilizarse o simplemente para modular/aislar/separar.
  > Ejemplos: [Card, Navbar, Sidebar, ...]

  Comando de Angular CLI para crear un componente<br/>
  <strong><code>ng g c components/&lt;nombre_del_componente&gt;</code></strong> <br/></br>
  * [Components](src/app/components) > Componentes del proyecto 

    
  Los componentes se conforman de la siguiente manera:
  * `*.component.html` (**Estructura HTML que va a renderizar tu componente**, puedes utilizar directivas y variables conectadas con tu archivo typescript [lógica] del componente)
  * `*.component.css` (**Hoja de estilo de tu componente**, puedes utilizar también otros medios de CSS como SCSS, SASS, etc.)
  * `*.component.ts` (**Archivo Typescript que cuenta con la configuración de tu componente y la clase de su lógica**)
  * `*.spec.ts` (**Archivo para pruebas unitarias**)

### Decorador @Input 📥

  > Los decoradores en Angular permiten definir una funcionalidad/comportamiento que tendrá un objeto (@Component, @Input, @Output, @Injectable, ...)

  El decorador **@Input permite que a un componente poder recibir atributos (valores)**, en ocasiones los componentes necesitan atributos para que suceda un 
  comportamiento o para renderizar (imprimir) información, generalmente el "padre" que esta renderizando al componente es el responsable de mandarle los atributos 
  esperados **(Padre -> Hijo)**

  Los **@Input** se definen dentro del archivo typescript `(*.component.ts)` del componente<br/>
  <h4>Ejemplo de Input</h4>
  
  🟢**Hijo**
  Crear @Input en el hijo para poder recibir atributos `(*.component.ts)`
  ```
  @Component({
    ...
  )}

  export class Componente {
    @Input() mensaje: string;

    ... // Resto de código

  }
  ```

  
  🟢**Padre**
  Pasarle los datos al @Input del componente en el HTML del Padre `(*.component.html)`<br/>
  ```
  <mi-componente [mensaje]="Hola Mundo"></mi-componente>
  ```

  * [Ejemplo de Input de Agendular](src/app/components/daily-card.component.ts) > Línea 10

### Decorador @Output 📤

  El decorador **@Output permite emitir eventos desde un componente hijo hacia su componente padre (Hijo -> Padre)**, a través de eventos personalizados, un componente 
  hijo **puede notificar al componente padre sobre acciones o cambios en su estado (datos)**

  Los **@Output** se definen dentro del archivo typescript `(*.component.ts)` del componente<br/>
  <h4>Ejemplo de Output</h4>
  
  🟢**Hijo**
  Crear evento para emisión de evento (datos) `(*.component.ts)`
  ```
  import { ... , EventEmitter } from '@angular/core'; 

  @Component({
    ...
  )}

  export class Componente {
    // Transmisión de un evento de tipo `string`
    @Output() miEvento = new EventEmitter<string>();

    // miEvento será el nombre de atributo utilizado para poder manejar el evento, también se puede definir un nombre personalizado.
    // Ejemplo: @Output('eventoPersonalizado') -> Si se utiliza un nombre personalizado entonces ese nombre será el que Angular va a reconocer para poder hacer manejo

    ... // Resto de código

    emitirEvento() {
      this.miEvento.emit("mensaje/dato");
    }

  }
  ```


  🟢**Padre**
  Manejo de evento en el HTML del Padre `(*.component.html)`<br/>
  ```
  <mi-componente-hijo [miEvento]="manejarEvento()"></mi-componente> <!-- Se espera que en la lógica del padre exista la función/método manejarEvento() -->
  ```

  * [Ejemplo de Output de Agendular](src/app/components/active-daily-card.component.ts) > Línea 31
  * [Ejemplo de Output de Agendular](src/app/pages/daily.component.html) > Línea 2

### Ciclo de Vida de Componente 📦📄

**Eventos que van sucediendo durante la vida del componente, permiten ejecutar código**. Aquí mencionaré algunos:

- `constructor()`. Función/Bloque se encarga de crear la instancia del componente
- `ngOnChanges`. Sucede al inicio y queda escuchando cada @Input, puede recibir un objeto SimpleChanges proporciona los cambios de todos los @Inputs con previousValue, firstChange, ...
- `ngOnInit`. Sucede antes del render (puede ser asíncrono), corre sola una vez
- `ngAfterViewInit`. Sucede después del render
- `ngDestroy`. Sucede cuando el componente va a desaparecer del render, aquí se pueden limpiar eventos que pueden quedar despiertos

Puedes encontrar más en la documentación de Angular

### Servicios en Angular (Decorador @Injectable)

**Es una forma de encapsular y modular lógica de negocio en una aplicación**, estos servicios son singleton por defecto en Angular, eso quiere decir que **hay una única instancia del servicio en toda la aplicación** y pueden ser reutilizados

Los servicios en Angular se pueden identificar con el decorador @Injectable<br/><br/>

Comando de Angular CLI para crear nuevos servicios <br/>
`ng g s services/<nombre_del_Servicio>` <br/>

<h4>Ejemplo de Servicio</h4>

🟢**Archivo de Servicio**
```
@Injectable({
  providedIn: 'root'
})
export class MiServicio {

  ... // Resto del código del servicio

}
```

  * [Ejemplo de Servicio en Agendular](src/app/services/dailies.service.ts) > Línea 8
  * [Ejemplo de Servicio en Agendular](src/app/services/quotes.service.ts) > Línea 8
  * [Ejemplo del Uso de Servicio en Agendular](src/app/components/active-daily-card/active-daily-card.components.ts) > Línea 26

### Modelos en Angular 🧿

Estructura de objetos por medio de interfaces, **definen la forma que deben tener los objetos** sin proporcionar una implementación, se utilizan principalmente en **componentes, servicios** o donde se requiera trabajar con la estructura <br/>

<h4>Ejemplo de Servicio</h4>

```
export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  // Otros campos según sea necesario
}
```

### Pipes en Angular 🧿

Mecanismo que **funciona para transformar datos**, como una especie de tubería con una entrada, transformación y salida.</br>
**Solo se utilizan en los renderizados (html)** se identifican con el decorador @Pipe 

Angular ofrece una serie de pipes listos para ser utilizados, pero también se permite crear pipes personalizados. <br/>

[Pipes Oficiales de Angular](https://angular.io/api?type=pipe) </br>

Comando de Angular CLI para crear una tubería (pipe) <br/>
`ng g p pipes/<nombre_del_pipe>`

<h4>Ejemplo de uso de Pipe</h4>

```
<div class="date">
   {{ valorFecha | date: 'short' }} <!-- El pipe empieza desde el caracter `|` -->
</div>
```

<h4>Ejemplo de Pipe Personalizado</h4>

```
@Pipe({
  name: 'customPipe'
})
export class customPipe implements PipeTransform {
  transform(value: string): string {
    // Tratamiento de mi valor -> value
    return ''
  }
}
```

### Directivas Personalizadas en Angular

Angular también permite que puedas hacer tus propias directivas, **permiten modificar el DOM de manera directa.** se identifican con el decorador @Directive <br /> 

> Ejemplo: Una directiva para mostrar un sombreado al poner el cursor del mouse sobre el elemento que tenga activa la directiva

Comando de Angular CLI para crear una directiva <br/>
`ng g d directives/<nombre_directiva>`

<h4>Ejemplo de Directiva Personalizada</h4>

```
@Directive({
  selector: '[customDirective]'
})
export class CustonDirective {

  ... // El resto del código de la directiva personalizada
  
}
```

### Manejo del Estado (Reactividad) (rxjs)

**Mecanismo para manejar eventos, peticiones, HTTP y otras operaciones asíncronas de manera más eficiente y declarativa**. Por medio de 
"observables" representan una secuencia de eventos o valores en el tiempo, es decir, **es un estado global compartido entre 
componentes/nodos.**

La librería `rxjs` es una herramienta que viene en conjunto con Angular y permite poder comportamientos de reactividad.

<h4>Ejemplo de Reactividad con <code>rxjs</code></h4>

`mi-servicio.service.ts`
```
  import { BehaviorSubject } from 'rxjs';

  // BehaviorSubject es la clase que permite primero crear un objeto para retener información reactiva
  private mensajeReactivo = new BehaviorSubject<string>('')

  // Al ser objeto privado, se requiere un Observable sería el objeto público para poder ser utilizado/inyectado en otros lugares del
  // aplicativo 
  mensajeReactivo$ = this.mensajeReactivo.asObservable()
```

`mi-componente.component.ts`
```
  ngOnInit(): void {
    // Utilizando el servicio (miServicio) inyectado, se puede acceder al observable público para suscribirnos y poder recibir las
    // actualizaciones que reporte el observable
    this.miServicio.mensajeReactivo$.subscribe(nuevoValor =>
      // Cualquier flujo que se quiera realizar con el nuevoValor
    )
  }
```

  * [Ejemplo de Servicio con Reactividad](src/app/services/dailies.service.ts) > Línea 23
  * [Ejemplo del Uso del Observable](src/app/components/active-daily-card.component.ts) > Línea 30

# Módulo HTTPClient de Angular

Módulo que puedes activar/importar en Angular, **simplifica la realización de solicitudes HTTP en Angular** y proporciona características como la manipulación de observables para gestionar respuestas asíncronas.

Pasos para activarlo y utilizarlo
1. Importar el módulo `HttpClientModule` en el módulo principal `app.module.ts`
  * [Ejemplo en Agedular](src/app/app-module.ts) -> Línea 31
2. Inyección en cualquier lugar que se requiera (por ejemplo: un servicio)
  * [Ejemplo en Agedular](src/app/services/quotes.service.ts) -> Línea 10  
3. Utilizar el servicio `HttpClient` importado para crear petición
  * [Ejemplo en Agedular](src/app/services/quotes.service.ts) -> Línea 13
4. Utilizar el observable del servicio
  * [Ejemplo en Agedular](src/app/pages/quotes/quotes.component.ts) -> Línea 15

# Módulo ReactiveFormsModule de Angular

Módulo que puedes activar/importar en Angular, **simplifica el manejo de formularios en Angular al proporcionar un enfoque más reactivo** y permitir una fácil implementación de validaciones y seguimiento de cambios.

<h4>Ejemplo del Módulo ReactiveForms en Agendular</h4>

1. Importar el módulo `ReactiveFormsModule` en el módulo principal `app.module.ts`
  * [Ejemplo en Agedular](src/app/app-module.ts) -> Línea 30
2. Revisar el uso de ReactiveForms en el componente `app-active-daily-card`
  * [Ejemplo en Agendular](src/app/components/active-daily-card/active-daily-card.component.ts)
    * Revisar el uso de `FormGroup`
    * Revisar el uso de `FormBuilder`   
  * [Ejemplo en Agendular](src/app/components/active-daily-card/active-daily-card.component.html)   

