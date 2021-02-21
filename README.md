# Vue.js

## Installation

run `npm i -g @vue/cli`;

## Create project

run `vue create appName`

## Building

run `npm run build`

## Useful additional libraries

- Routing -> `npm i --save vue-router` (vue-router 4+ with vue3)
- State management -> `npm i --save vuex` (vuex 4+ with vue3)

## Lifecycle hooks

- **beforeCreate**
- **created**
- **beforeUpdate**
- **updated**
- **beforeMount**
- **mounted**
- **beforeUnmount**
- **unmounted**

## Options API (Vue 1 & 2)

### **data** 
Is the data we need to declare inside a component that we can use inside the template.
```
<template>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'testFirstName'
            firstName: 'testLastName'
        }
    }
}
<script>
```

### **methods**
declaration of all methods inside a component

```
<template>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
    <button @click="setLastName"></button>
    <button @click="setLastName(arg1, arg2, ...)"></button>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'testFirstName'
            firstName: 'testLastName'
        }
    },
    methods: {
        setLastName() {
            this.lastName = 'test'; 
        }
    }
}
<script>
```

### **computed** 
Methods that return readonly data. Used to abstract logic from the template.

```
<template>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
    <p>{{ fullName }}</p>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'testFirstName'
            firstName: 'testLastName'
        }
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    }
}
<script>
```

### **watch** 
Methods used to watch a specific property every time it changes.
```
<template>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
    <input type="text" v-model="firstName">
</template>

<script>
export default {
    data() {
        return {
            firstName: 'testFirstName'
            firstName: 'testLastName'
        }
    },
    watch() {
        firstName() {
            if (!firstName) {
                alert('You cannot provide an empty firstName');
            }
        }
    }
}
<script>
```

### **props**
Inputs from the parent to the child component
```
// ---- Component A (parent)
<template>
    <component-b 
        :firstName="firstName"
        :lastName="lastName"
    ></component-b>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'testFirstName'
            firstName: 'testLastName'
        }
    }
}
<script>

// ---- Component B (child)
<template>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
</template>

<script>
export default {
    props:['firstName', 'lastName']
}
<script>
```

### **emits** 
Outputs from the child to the parent component
```
// ---- Component A (parent)
<template>
    <component-b 
        :firstName="firstName"
        :lastName="lastName"
        @setLastNameEmitter="setLastName"
    ></component-b>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'testFirstName'
            firstName: 'testLastName'
        }
    },
    methods: {
        setLastName() {
            this.lastName = 'TEST';
        }
    }
}
<script>

// ---- Component B (child)
<template>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
    <button @click="$emit('setLastNameEmitter')"></button>
</template>


<script>
export default {
    props:['firstName', 'lastName'],
    emits:['setLastNameEmitter']
}
<script>
```

### **provide & inject**
Used to provide data from a component and used to another one.
```
// ---- Component A
<script>
export default {
    data() {
        return {
        firstName: 'testFirstName'
        firstName: 'testLastName'
    },
    provide() {
        return {
            firstname: this.firstName,
            lastName: this.lastName
        }
    }
}
<script>

// ----- Component C
<template>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
</template>

<script>
export default {
    inject: ['firstName', 'lastName']
}
<script>
```

> watchers must be named exactly the same as the property name

## Composition API (Vue 3)

### **setup**

### **ref**

### **reactive**

### **computed**

### **watch**

### **Lifecycle hooks**

- `beforeCreate` and `created` are replaced by the `setup` method. Everything that was declared inside those 2 methods in vue 2, should be directly inside the setup method now.
- `beforeUpdate` is replaced by the `onBeforeUpdate` method.
- `updated` is replaced by the `onUpdated` method.
- `beforeMount` is replaced by the `onBeforeMount` method.
- `mounted` is replaced by the `onMounted` method.
- `beforeUnmount` is replaced by the `onBeforeUnoun`t` method.
- `unmounted` is replaced by the `onUnmounted` method.

```
<script>
import { onBeforeUpdate, onMounted } from 'vue';

export default {
    setup() {
        onBeforeUpdate(() => {
            cxonsole.log('before update');
        });

        onMounted(() => {
            cxonsole.log('mounted');
        });
    }
}
</script>
```